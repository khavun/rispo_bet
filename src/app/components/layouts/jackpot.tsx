
import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Jackpot(){
  return (
    <Box
      sx={{
        background: 'url("https://cdn.linkadsku.xyz/rupiah/jprpok.gif") center center / 100% 100% no-repeat',
        height: '122px',
        marginBottom: '1rem',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      className="jackpot-responsive"
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          position: 'absolute',
          color: '#ffdf7e',
        }}
      >
        Rp.1.242.961.314
      </Typography>
    </Box>
  );
};

