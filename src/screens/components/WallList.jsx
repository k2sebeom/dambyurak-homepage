import React from 'react';
import WallCard from './WallCard';
import { Grid } from '@mui/material';


const WallList = ({ totalSupply }) => {
    let cards = [];
    for(let i = 1; i <= totalSupply; i++) {
        cards.push(
            <Grid key={i} item>
                <WallCard tokenId={i} />
            </Grid>
        )
    }

    return (
        <Grid container spacing={2}>
            {cards}
        </Grid>
    )
}


export default WallList;