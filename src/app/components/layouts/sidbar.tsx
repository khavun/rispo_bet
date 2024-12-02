import React from 'react';
import { Box, List, ListItem, ListItemText, Divider, Typography, ListItemIcon,  } from '@mui/material';
import { useRouter } from 'next/navigation';

// Importing icons from Material-UI
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import SocialMediaLinks from './socialMediaLinks';
import LatestNews from './lastNews';

export default function Sidbar() {
  const router = useRouter();

  const navItems = [
    { text: 'Info Terkini:',href:'/terkinit', icon: <VolumeDownIcon/>},
    { text: 'Cara Bermain', href: '/cara_bermain', icon: <HelpOutlineIcon /> },
    { text: 'History Nomor', href: '/history_nomor', icon: <InfoIcon /> },
    { text: 'Referral', href: '/referral', icon: <PeopleAltIcon/> },
    { text: 'Hubungi Kami', href: '/hubungi_kami', icon: <ContactMailIcon /> },  
    { text: 'Lupa Password', href: '/lupa_password', icon: <CalendarMonthIcon /> }, 
    { text: 'Promosi', href: '/lupa_password', icon: <ContactMailIcon /> }
  ];

  return (
    <Box
      sx={{
        width: '25%',
        backgroundColor: 'rgba(17, 18, 20, 0.5)',
        color: 'white',
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Sidebar Logo */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: 'auto',
          backgroundImage: 'url(/images/logo.png)',  
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          marginBottom: 2,
        }}
      />
        <List>
          {navItems.map((item, index) => (
            <React.Fragment key={item.text}>
              <ListItem 
                onClick={() => router.push(item.href)} 
                component="li"  
                sx={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center', 
                }}
              >
                <ListItemIcon sx={{ marginRight: 2 , color:'#ffdf7e'}}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText sx={{color:'#ffdf7e'}} primary={item.text} />
              </ListItem>
              {index < navItems.length  && (
                <Divider sx={{ borderColor: '#ffdf7e' }} />
              )}
            </React.Fragment>
          ))}
        </List>
        <SocialMediaLinks/>
        <SocialMediaLinks/>
        <LatestNews/>

        <Box sx={{ marginTop: 'auto', paddingTop: 2, textAlign: 'center' }}>
          <Typography variant="body2" color="textSecondary" sx={{color: 'white'}}>
            © 2024 Your Company
          </Typography>
        </Box>
    </Box>
  );
}
