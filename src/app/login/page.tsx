'use client';
import React from 'react';
import { Container, Box,Typography,Grid, Divider } from '@mui/material';
import Navbar from "@/app/components/layouts/navbar";  
import Sidbar from "@/app/components/layouts/sidbar"; 
import Contain from "@/app/components/layouts/contain"; 
import AcUnitIcon from '@mui/icons-material/AcUnit';
import '@/app/components/layouts/css/enimation.css'

import GameSlote from '../components/layouts/gameSlote';
export default function Login() {
  return (
    <Container 
      maxWidth={false} 
      style={{
        background: 'url(/images/login.webp) center top / cover no-repeat',
        backgroundAttachment: 'fixed',  
        minHeight: '100vh',  
        height: '100%',      
        position: 'relative',
        display: 'flex',     
        flexDirection: 'column',  
      }}
    >
        <Container maxWidth='lg'
                sx={{
                    position: 'fixed',   
                    top: 0,
                    left:0,
                    right:0,
                    zIndex: 2,
                    justifyContent:'center',                  
                    alignItems: 'center',
                }}
            >
                <Navbar />
        </Container>
        <Container maxWidth="lg" sx={{marginTop: '20px'}}>
            <Box sx={{display: 'flex',height: 'auto',overflowY: 'auto'}}>
                <Sidbar />  
                <Contain /> 
            </Box>

            <Box
                sx={{
                    position: 'fixed',
                    left: '20%',
                    zIndex: 1,
                    transform: 'translateX(-20%)',
                    animation: 'enimationOne 20s ease-in-out infinite',
                }}
            >
                <AcUnitIcon sx={{ fontSize: 100, color: 'white',width: '50px', height: '50px'  }} />
            </Box>

            <Box
                sx={{
                    position: 'fixed',
                    left: '50%',
                    zIndex: 1,
                    transform: 'translateX(-50%)',
                    animation: 'enimationTwo 20s ease-in-out infinite',
                    animationDelay: '5s',
                }}
            >
                <AcUnitIcon sx={{ fontSize: 100, color: 'white',width: '50px', height: '50px' }} />
            </Box>

            <Box
                sx={{
                    position: 'fixed',
                    left: '80%',
                    zIndex: 1,
                    transform: 'translateX(-80%)',
                    animation: 'enimationThree 20s ease-in-out infinite',
                    animationDelay: '10s',
                }}
            >
                <AcUnitIcon sx={{ fontSize: 100, color: 'white',width: '50px', height: '50px' }} />
            </Box>
            <Box sx={{backgroundColor: 'rgba(17, 18, 20, 0.5)',}}>
                <Box sx={{ width:'100%', height: '2px', backgroundColor: '#fdc51b'}} />
                <GameSlote/>
                <Box
                    sx={{
                        backgroundColor: '#000',
                        color: '#fff',
                        padding: '20px 0',
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '20px'
                    }}
                    >
                    <Typography
                        variant="body2"
                        sx={{
                            fontSize: '14px',
                            textAlign: 'center', // Align left as requested
                            width: '100%',
                            paddingLeft: '20px',
                        }}
                    >
                        © Copyright 2014 - 2024 RUPIAHTOTO. All Rights Reserved.
                    </Typography>
                </Box>
            </Box>
        </Container>
    </Container>
  );
}
