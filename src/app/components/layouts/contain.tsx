import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import './css/terkinit.css';
import Slider from './slider';
import WrapperService from './wrapperService';
import Jackpot from './jackpot';
import Transactions from './transactions';
import Carousel from './carousel';
import BankCarousel from './bankCarousel';

export default function Contain() {
  return (
    <Box
      sx={{
        width: '75%',
        padding: 2,
        marginTop: '40px',
        overflow: 'hidden',
        backgroundColor: 'rgba(17, 18, 20, 0.5)',
      }}
    >
      <Typography
        className="animated-text"
        sx={{ color: 'white',}}
      >
        Selamat datang di Rupiahtoto, Bandar Togel Online, Slot Gacor Dan Live Casino Terbesar di Indonesia.
      </Typography>
      <Slider/>
      <WrapperService/>
      <Jackpot/>
      <Transactions/>
      <Carousel/>
      <BankCarousel/>
      
    </Box>
  );
}
