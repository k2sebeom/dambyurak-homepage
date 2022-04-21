import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';

import WallList from './components/WallList';
import { contract } from '../util/Ethers';

const HomeScreen = () => {
    const [totalSupply, setTotalSupply] = useState(0);

    useEffect(() => {
        contract.totalSupply().then((data) => {
            setTotalSupply(data.toNumber());
        })
    }, []);

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <Typography
                variant='h2'
                sx={{
                    my: 10
                }}
            >
                Home Screen
            </Typography>

            <div style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                paddingLeft: 20,
                paddingRight: 20,
                boxSizing: "border-box"
            }}>
                <Typography
                    variant='h5'
                    style={{
                        marginBottom: 20
                    }}
                >
                    Explore Walls
                </Typography>
                <WallList totalSupply={totalSupply}/>
                <Box sx={{
                    height: "50px"
                }} />
            </div>
        </div>
    )
}

export default HomeScreen;