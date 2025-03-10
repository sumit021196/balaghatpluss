import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  IconButton,
  Divider
} from '@mui/material';
import { 
  ArrowBack,
  ChevronRight,
  School,
  AccountBalance,
  SportsEsports,
  Assignment,
  Cast
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const menuItems = [
  {
    title: 'Schools',
    icon: <School />,
    path: 'schools'
  },
  {
    title: 'Colleges',
    icon: <AccountBalance />,
    path: 'colleges'
  },
  {
    title: 'Hobbies',
    icon: <SportsEsports />,
    path: 'hobbies'
  },
  {
    title: 'Coaching',
    icon: <Assignment />,
    path: 'coaching'
  },
  {
    title: 'Vocational Training',
    icon: <Cast />,
    path: 'vocational-training'
  }
];

const Education = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    try {
      navigate(`/education/${path}`);
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };

  const handleBack = () => {
    try {
      if (location.pathname === '/education') {
        navigate('/');
      } else {
        navigate(-1);
      }
    } catch (error) {
      console.error('Back navigation error:', error);
      navigate('/');
    }
  };

  return (
    <Box sx={{ pb: 8, bgcolor: '#fff', minHeight: '100vh' }}>
      {/* Header */}
      <Box sx={{ 
        bgcolor: '#fff', 
        borderBottom: '1px solid #eee',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}>
        <Container maxWidth="md">
          <Box sx={{ 
            py: 1.5,
            display: 'flex',
            alignItems: 'center',
            gap: 2
          }}>
            <IconButton onClick={handleBack} size="small">
              <ArrowBack />
            </IconButton>
            <Typography variant="h6" sx={{ fontWeight: 500 }}>Education</Typography>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="md">
        <List sx={{ pt: 1 }}>
          {menuItems.map((item, index) => (
            <React.Fragment key={item.title}>
              <ListItem disablePadding>
                <ListItemButton 
                  onClick={() => handleNavigation(item.path)}
                  sx={{ 
                    py: 2,
                    '&:hover': {
                      bgcolor: 'rgba(0, 0, 0, 0.02)',
                    }
                  }}
                >
                  <ListItemIcon sx={{ color: '#666' }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText 
                    primary={item.title} 
                    primaryTypographyProps={{
                      sx: { 
                        fontWeight: 400,
                        fontSize: '1rem',
                        color: '#333'
                      }
                    }}
                  />
                  <ChevronRight sx={{ color: '#999' }} />
                </ListItemButton>
              </ListItem>
              {index < menuItems.length - 1 && (
                <Divider component="li" />
              )}
            </React.Fragment>
          ))}
        </List>

        {/* Popular Categories Section */}
        <Box sx={{ mt: 4, px: 2 }}>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 500,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 2
            }}
          >
            Popular Categories
            <IconButton size="small">
              <ChevronRight />
            </IconButton>
          </Typography>
        </Box>

        {/* JD Collections Section */}
        <Box sx={{ mt: 4, px: 2 }}>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 500,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 2
            }}
          >
            Explore JD Collections
            <IconButton size="small">
              <ChevronRight />
            </IconButton>
          </Typography>
        </Box>

        {/* Popular Cities Section */}
        <Box sx={{ mt: 4, px: 2 }}>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 500,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 2
            }}
          >
            Popular Cities
            <IconButton size="small">
              <ChevronRight />
            </IconButton>
          </Typography>
        </Box>

        {/* Quick Links Section */}
        <Box sx={{ mt: 4, px: 2 }}>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 500,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 2
            }}
          >
            Quick Links
            <IconButton size="small">
              <ChevronRight />
            </IconButton>
          </Typography>
        </Box>

        {/* JD Verticals Section */}
        <Box sx={{ mt: 4, px: 2, mb: 4 }}>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 500,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 2
            }}
          >
            JD Verticals
            <IconButton size="small">
              <ChevronRight />
            </IconButton>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Education; 