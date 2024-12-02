import React from 'react';
import { AppBar, Toolbar, Box, Typography, TextField, Button, useMediaQuery, useTheme, Grid,InputProps } from '@mui/material';


export default function Navbar() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="static" sx={{ backgroundColor: '#111214', borderBottom: '2px solid #fdbf02',  }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        {/* Logo Section */}
        <Box component="img" src="/images/logo.png" alt="Login Logo" sx={{ width: isSmallScreen ? '180px' : '240px', height: 'auto' }} />

        {/* Login Form Section */}
        <Grid 
          container 
          justifyContent={isSmallScreen ? 'center' : 'flex-end'} 
          alignItems="center" 
          spacing={2}
          sx={{ width: '100%' }}
        >
          <Grid item>
            <TextField
              placeholder="Username"
              variant="outlined"
              size="small"
              fullWidth={isSmallScreen}
              sx={{
                maxWidth: '250px',
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                boxShadow: 3,
                '& .MuiOutlinedInput-root': {
                  borderRadius: '20px',
                  '& fieldset': { borderColor: 'transparent' },
                  '&:hover fieldset': { borderColor: '#1976d2' },
                  '&.Mui-focused fieldset': { borderColor: '#1976d2', borderWidth: 2 },
                },
              }}
            />
          </Grid>
          <Grid item>
          <TextField
            placeholder="Password"
            variant="outlined"
            size="small"
            fullWidth={isSmallScreen}
            sx={{
              maxWidth: '250px',
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              boxShadow: 3,
              '& .MuiOutlinedInput-root': {
                borderRadius: '20px',
                '& fieldset': { borderColor: 'transparent' },
                '&:hover fieldset': { borderColor: '#1976d2' },
                '&.Mui-focused fieldset': { borderColor: '#1976d2', borderWidth: 2 },
                textAlign:'center'
              },
            }}
            InputProps={{
              sx: {
                textAlign: 'center', 
                '&::placeholder': {
                  textAlign: 'center', 
                },
              },
            }}
          />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              fullWidth={isSmallScreen}
              sx={{
                maxWidth: '150px',
                borderRadius: '20px',
                backgroundColor: '#fdbf02',
                '&:hover': { backgroundColor: '#e0a501' },
              }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
