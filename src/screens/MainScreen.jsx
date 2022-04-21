import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Stack } from '@mui/material';
import wall from '../assets/images/wall.png';

const MainScreen = () => {
    
    return (
        <Stack
            sx={{
                position: "relative",
                minHeight: "100vh",
                backgroundImage: `url(${wall})`,
                backgroundRepeat: "repeat"
            }}
        >
            <Header />
            <Outlet />
            <Footer />
        </Stack>
    )
}

export default MainScreen;