import React, { useState } from 'react';
import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';
import {
  Home,
  Message,
  Business,
  Payment,
  Newspaper,
  Menu
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const LabelBottomNavigation = () => {
  const [value, setValue] = useState('home');
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(`/${newValue}`);
  };

  return (
    <Paper 
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} 
      elevation={3}
    >
      <BottomNavigation
        value={value}
        onChange={handleChange}
        sx={{
          '& .MuiBottomNavigationAction-root': {
            minWidth: 'auto',
            padding: '6px 0',
          },
          '& .MuiBottomNavigationAction-label': {
            fontSize: '0.7rem',
          },
        }}
      >
        <BottomNavigationAction
          label="Home"
          value="home"
          icon={<Home />}
        />
        <BottomNavigationAction
          label="Leads"
          value="leads"
          icon={<Message />}
        />
        <BottomNavigationAction
          label="B2B"
          value="b2b"
          icon={<Business />}
        />
        <BottomNavigationAction
          label="Pay"
          value="pay"
          icon={<Payment />}
        />
        <BottomNavigationAction
          label="News"
          value="news"
          icon={<Newspaper />}
        />
        <BottomNavigationAction
          label="More"
          value="more"
          icon={<Menu />}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default LabelBottomNavigation;
