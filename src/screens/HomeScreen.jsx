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
            alignItems: "center",
            color: "white"
        }}>
            <Typography
                variant='h2'
                sx={{
                    my: 10
                }}
            >
                Project Dambyurak
            </Typography>

            <Typography variant='h6' sx={{ mb: 3, mx: 20, fontSize: 17 }}>
                A simple baseball itself may not be worth a lot. However, once a Major League Baseball star signs one’s name on the ball, 
                it gains its value much bigger than that without the signature. Project Dambyurak introduces a unique concept of a singable (or commentable) NFT on 
                which anyone can leave a signature or a comment. Each comment and the writer of a comment are stored on a blockchain,
                so the NFT itself includes the comments written on it. “Dambyurak (담벼락)” is a Korean word meaning “wall,” as it 
                symbolizes a wall on a street on which pedestrians can write scribbles. The <a href="https://polygonscan.com/address/0x4B2FbEd0CcDea6DfA35C5557Cd670C11922198ED">Dambyurak smart contract </a> 
                stores comments on the wall as “Nakseo (낙서),” a Korean word for scribbles on papers or walls. The more people leave their marks on the wall, the more it becomes unique, 
                and thus, it accrues value as time passes. Project Dambyurak aims to embrace the same concept in the realm of NFT and blockchain.
            </Typography>

            <Typography variant='h6' sx={{ mb: 3, mx: 20, fontSize: 17 }}>
                Project Dambyurak also introduces an interesting recursive concept NFT as the token itself is a BApp (Blockchain Application). 
                The NFT tokenURI contains a link to BApp which displays all the comments written on the wall. You can check out the NFT on <a href="https://opensea.io/collection/dambyurak">OpenSea </a> 
                and find out that the NFT listed on the marketplace shows a responsive wall that shows all the comments written on it. 
                With recent attempts to utilize NFTs for various purposes such as Play2Earn and Move2Earn, Project Dambyurak makes a novel attempt to utilize NFT itself as a blockchain application.
            </Typography>

            <Typography variant='h6' sx={{ mb: 10, mx: 20, fontSize: 17 }}>
                Unlike other NFTs that provide exclusive ownership, Dambyurak tokens evolve and grow with community participation. 
                The owner of the token can set the price (MATIC) that needs to be paid to write on the wall, and anyone who pays the right price can leave a mark on the token. 
                Dambyurak tokens and its ecosystem are what we as a community develop together, and such feature of the project leads to a new horizon of the blockchain landscape.
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