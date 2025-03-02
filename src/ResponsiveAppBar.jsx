import React from 'react';
import { AppBar, Toolbar, Button, IconButton, Box } from '@mui/material';
import { NotificationsNone, AccountCircle } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#fff',
  boxShadow: 'none',
  borderBottom: '1px solid #eee',
}));

const Logo = styled('div')({
  '& img': {
    height: '30px',
  },
});

const AdvertiseButton = styled(Button)(({ theme }) => ({
  border: '1px solid #1976d2',
  color: '#1976d2',
  borderRadius: '20px',
  padding: '4px 15px',
  textTransform: 'none',
  fontSize: '14px',
  marginLeft: 'auto',
  marginRight: '10px',
}));

const ResponsiveAppBar = () => {
  return (
    <StyledAppBar position="sticky">
      <Toolbar>
        <Logo>
          <img 
            src="/balaghatplus-logo.png" 
            alt="BalaghatPlus" 
            style={{ 
              height: '30px',
              color: '#1976d2',
              fontWeight: 'bold',
              fontSize: '24px',
            }}
          />
        </Logo>
        <AdvertiseButton variant="outlined">
          Advertise
        </AdvertiseButton>
        <Box>
          <IconButton>
            <NotificationsNone />
          </IconButton>
          <IconButton>
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default ResponsiveAppBar;