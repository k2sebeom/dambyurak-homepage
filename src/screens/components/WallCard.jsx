import React, { useEffect } from 'react';
import { Card, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { getServedImageUrl } from '../../util/ipfs';


const WallCard = ({ tokenId }) => {
    const navigate = useNavigate();
    const [imageURL, setImageURL] = React.useState('');

    useEffect(() => {
        setImageURL(getServedImageUrl(tokenId));
    }, [tokenId]);

    return (
        <Card
            variant='outlined'
            style={{
                height: 250,
                width: 250,
                boxShadow: '0 20px 32px 0 #BDC9D7'
            }}
        >
            <div
                style={{
                    boxSizing: "border-box",
                    position: "relative",
                    height: "100%",
                    backgroundImage: `url(${imageURL})`,
                    backgroundSize: 'cover'
                }}
            >
                <Button variant='contained' 
                    style={{
                        backgroundColor: "purple",
                        position: "absolute",
                        bottom: 10,
                        right: 10
                    }}
                    onClick={() => {
                        navigate(`/${tokenId}`);
                    }}
                >
                    Dambyurak #{tokenId}
                </Button>
            </div>
        </Card>        
    )
}


export default WallCard;