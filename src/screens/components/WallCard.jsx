import React from 'react';
import { Card, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';


const WallCard = ({ tokenId }) => {
    const navigate = useNavigate();

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
                    backgroundImage: 'url(https://images.unsplash.com/photo-1547056961-3c25e9140b05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnJpY2slMjB3YWxsfGVufDB8fDB8fA%3D%3D&w=1000&q=80)'
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