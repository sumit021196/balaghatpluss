import React from 'react';
import { Container, Typography, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  Info as InfoIcon,
  ContactMail as ContactIcon,
  Policy as PolicyIcon,
  Description as TermsIcon,
  HelpOutline as HelpIcon
} from '@mui/icons-material';

const MorePage = () => {
  const navigate = useNavigate();

  const menuItems = [
    { text: 'About Us', icon: <InfoIcon />, path: '/about' },
    { text: 'Contact Us', icon: <ContactIcon />, path: '/contact' },
    { text: 'Privacy Policy', icon: <PolicyIcon />, path: '/privacy' },
    { text: 'Terms & Conditions', icon: <TermsIcon />, path: '/terms' },
    { text: 'Help / FAQ', icon: <HelpIcon />, path: '/help' },
  ];

  return (
    <Container maxWidth="sm" sx={{ py: 3, pb: 10 }}>
      <Typography variant="h5" component="h1" sx={{ mb: 3, fontWeight: 'bold' }}>
        More Options
      </Typography>
      <List sx={{ bgcolor: 'background.paper', borderRadius: 2, boxShadow: 1 }}>
        {menuItems.map((item, index) => (
          <React.Fragment key={item.text}>
            <ListItem 
              button 
              onClick={() => navigate(item.path)}
              sx={{ py: 2 }}
            >
              <ListItemIcon sx={{ minWidth: 40, color: 'primary.main' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text} 
                primaryTypographyProps={{ fontWeight: 'medium' }}
              />
            </ListItem>
            {index < menuItems.length - 1 && <Divider variant="inset" component="li" />}
          </React.Fragment>
        ))}
      </List>
    </Container>
  );
};

export default MorePage;
