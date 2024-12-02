import React from 'react';
import { Grid, Box, Typography, Avatar } from '@mui/material';

interface SlotGame {
  name: string;
  logo: string;
}

interface WidgetAboutProps {
  slotGameData: SlotGame[];
  gifUrl: string;
}

const WidgetAbout: React.FC<WidgetAboutProps> = ({ slotGameData, gifUrl }) => {
  return (
    <Box>
      <Box sx={{width:'30rem', marginTop: '20px', marginRight: 'auto'}}>
        <Box component='img' src={gifUrl} sx={{width: '100%',height: 'auto',objectFit: 'cover',  }}/>
      </Box>
      <Grid container spacing={2} justifyContent="center"sx={{marginTop:'10px'}}>
        {slotGameData.map((game, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Box component='img' alt={game.name} src={game.logo} sx={{maxWidth: '100%'}}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export { WidgetAbout };
