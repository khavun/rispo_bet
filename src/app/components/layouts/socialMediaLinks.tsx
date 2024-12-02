import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Link } from '@mui/material';
import { Info, Star } from '@mui/icons-material';

const socialMediaLinks = [
  { name: 'Whatsapp 1', href: 'https://api.whatsapp.com/send/?phone=6281265553547' },
  { name: 'Whatsapp 2', href: 'https://api.whatsapp.com/send/?phone=6281265553596' },
  { name: 'Facebook', href: 'https://www.facebook.com/groups/rupiahtotonew2024' },
  { name: 'Telegram', href: 'https://telegram.me/rupiahtoto' },
  { name: 'Instagram', href: 'https://www.instagram.com/rupiahtoto_/profilecard/?igsh=MW1rc2N4bTh5bzFqYw==' },
];

const SocialMediaLinks: React.FC = () => {
  return (
    <Box sx={{ p: 2, borderRadius: 2, boxShadow: 1,background: "linear-gradient(283deg, #fed24c, #1c1300, #1c1300)", marginTop: '10px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Info sx={{ color: '#1976d2', mr: 1 }} />
        <Typography variant="h6" component="h4" sx={{ fontWeight: 'bold' }}>
          Social Media Kami
        </Typography>
      </Box>
      <List>
        {socialMediaLinks.map((link, index) => (
          <ListItem key={index} disableGutters>
            <ListItemIcon>
              <Star sx={{ color: '#fbc02d' }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Link href={link.href} target="_blank" rel="noopener" sx={{ textDecoration: 'none', color: '#1976d2' }}>
                  {link.name}
                </Link>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SocialMediaLinks;
