import { Stack, Typography, IconButton, Button } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import React from 'react';
import { connectMetaMask } from '../util/Wallet';
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate();

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: "tomato",
                height: 50,
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
                paddingRight: 30,
                paddingLeft: 30,
                boxSizing: "border-box"
            }}
        >
            <Button
                style={{
                    fontSize: 20,
                    color: "black"
                }}
                onClick={() => {
                    navigate('');
                }}
            >
                Dambyurak
            </Button>

            <Stack
                direction="row"
                spacing={1}
                alignItems="center"
            >
                <Typography variant='h6'>Connect Wallet</Typography>
                <IconButton onClick={() => {
                    connectMetaMask().then((data) => {console.log(data)});
                }}>
                    <AccountBalanceWalletIcon />
                </IconButton>
            </Stack>
        </div>
    )
}


export default Header;