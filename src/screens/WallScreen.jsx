import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, TextField, Button, Box } from '@mui/material';
import { writeOnWall, getConnectedAccounts, subscribeTo, setWritePrice, isWalletAvailable } from '../util/Wallet';
import { contract } from '../util/Ethers';
import { ethers } from 'ethers';
import ethLogo from '../assets/images/MATIC.png';


const WallScreen = () => {
    let { tokenId } = useParams();
    const [msg, setMsg] = useState("");
    const [price, setPrice] = useState("");
    const [newWritePrice, setNewWritePrice] = useState("");

    const [accounts, setAccounts] = useState([]);
    const [owner, setOwner] = useState("");
    const [isMine, setIsMine] = useState(false);
    const [animation, setAnimation] = useState('');

    useEffect(() => {
        contract.writePrice(tokenId).then((data) => {
            setPrice(ethers.utils.formatEther(data));
        });
        contract.ownerOf(tokenId).then((owner) => {
            setOwner(owner);
            console.log(owner);
        });
        contract.tokenURI(tokenId).then(async (url) => {
            const resp = await fetch(url);
            const json = await resp.json();
            setAnimation(json.animation_url);
        });
    }, [tokenId]);

    useEffect(() => {
        setIsMine(false);
        for(const a of accounts) {
            if (a.toLowerCase() === owner.toLowerCase()) {
                console.log(a.toLowerCase(), owner.toLowerCase());
                setIsMine(true);
            }
        }
    }, [owner, accounts])

    useEffect(() => {
        if (isWalletAvailable()) {
            getConnectedAccounts().then((accounts) => {
                setAccounts(accounts);
            });
            subscribeTo('accountsChanged', (accounts) => {
                setAccounts(accounts);
            })
        }
    }, [])

    const SetPriceField = (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                marginTop: 30,
                marginBottom: 30
            }}
        >
            <Typography
                sx={{
                    mr: 2
                }}
            >
                Wall owner can set the writing price!
            </Typography>
            <TextField
                label="New Price (MATIC)"
                variant='filled'
                sx={{
                    width: 200,
                    height: 50,
                    mr: 2,
                    backgroundColor: 'white'
                }}
                value={newWritePrice}
                onChange={(e) => {
                    setNewWritePrice(e.target.value)
                }}
            />
            <Button
                variant='contained'
                sx={{
                    width: 100,
                    height: 50,
                    backgroundColor: 'tomato'
                }}
                onClick={async () => {
                    const result = await setWritePrice(tokenId, newWritePrice);
                    if (result) {
                        window.location.reload();
                    }
                }}
            >
                Confirm
            </Button>
        </div>
    )

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: "white"
            }}
        >
            <Typography
                variant='h4'
                sx={{
                    ml: 2,
                    my: 5,
                }}
            >
                Dambyurak #{tokenId}
            </Typography>

            <iframe
                title={`Dambyurak #${tokenId}`}
                src={animation}
                height="510px"
                width="510px"
            >
            </iframe>

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: 30,
                    marginBottom: 30
                }}
            >
                <TextField
                    label="Leave your mark!"
                    variant='filled'
                    sx={{
                        width: 500,
                        height: 50,
                        mr: 2,
                        backgroundColor: 'white'
                    }}
                    value={msg}
                    onChange={(e) => {
                        setMsg(e.target.value)
                    }}                
                />
                <Button
                    variant='contained'
                    sx={{
                        width: 100,
                        height: 50,
                        backgroundColor: 'tomato'
                    }}
                    onClick={async () => {
                        const result = await writeOnWall(tokenId, isMine ? '0.0' : price, msg);
                        if(result) {
                            setMsg('');
                        }
                    }}
                >
                    Send
                </Button>
            </div>
            
            <div style={{ display: "flex", alignItems: "center" }}>
                <img
                alt="LOGO"
                    style={{
                        width: 25,
                        marginRight: 10
                    }}
                    src={ethLogo}
                />
                <Typography
                    variant='h7'
                >
                    Writing Price: {price} MATIC
                </Typography>
            </div>
            {isMine ? SetPriceField : null}

            <Box sx={{
                    height: "50px"
                }} />
        </div>
    )
}

export default WallScreen;