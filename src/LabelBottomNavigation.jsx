import React from 'react';
import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PaymentIcon from '@mui/icons-material/Payment';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import MenuIcon from '@mui/icons-material/Menu';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('home');
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(`/${newValue === 'home' ? '' : newValue}`);
  };

  return (
    <Paper 
      sx={{ 
        position: 'fixed', 
        bottom: 0, 
        left: 0, 
        right: 0,
        borderTop: '1px solid #eee'
      }} 
      elevation={3}
    >
      <BottomNavigation 
        value={value} 
        onChange={handleChange}
        sx={{
          '& .MuiBottomNavigationAction-root': {
            minWidth: 'auto',
            padding: '6px 0',
            color: '#666',
          },
          '& .Mui-selected': {
            color: '#1a73e8',
          }
        }}
      >
        <BottomNavigationAction
          label="Home"
          value="home"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          label="Leads"
          value="leads"
          icon={<EmailIcon />}
        />
        <BottomNavigationAction
          label="B2B"
          value="b2b"
          icon={<BusinessCenterIcon />}
        />
        <BottomNavigationAction
          label="Pay"
          value="pay"
          icon={<PaymentIcon />}
        />
        <BottomNavigationAction
          label="News"
          value="news"
          icon={<NewspaperIcon />}
        />
        <BottomNavigationAction
          label="More"
          value="more"
          icon={<MenuIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}
