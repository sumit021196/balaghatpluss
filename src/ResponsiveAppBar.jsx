import React from 'react';
import { AppBar, Toolbar, Button, IconButton, Box } from '@mui/material';
import { NotificationsNone, AccountCircle } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#fff',
  boxShadow: 'none',
  borderBottom: '1px solid #e0e0e0',
  '& .MuiToolbar-root': {
    minHeight: '56px',
    padding: '0 16px',
  },
}));

const Logo = styled('div')({
  display: 'flex',
  alignItems: 'center',
  '& img': {
    height: '24px',
  },
});

const IconContainer = styled(Box)({
  display: 'flex',
  gap: '4px',
  '& .MuiIconButton-root': {
    padding: '8px',
    color: '#5f6368',
  },
});

const ResponsiveAppBar = ({ toggleDrawer }) => {
  return (
    <StyledAppBar position="sticky">
      <Toolbar>
        <Logo>
          <img 
            src="/balaghatplus-logo.svg" 
            alt="BalaghatPlus"
          />
        </Logo>
        <Box sx={{ marginLeft: 'auto' }} />
        <IconContainer>
          <IconButton 
            aria-label="notifications"
            title="Notifications"
          >
            <NotificationsNone />
          </IconButton>
          <IconButton 
            onClick={toggleDrawer(true)}
            aria-label="account menu"
            title="Open account menu"
          >
            <AccountCircle />
          </IconButton>
        </IconContainer>
      </Toolbar>
    </StyledAppBar>
  );
};

export default ResponsiveAppBar;