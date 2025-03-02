import React from 'react';
import { Grid, Typography, Box, Container, Button, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchBar from '../SearchBar';
import { useNavigate } from 'react-router-dom';

const ServiceItem = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  color: '#666',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  cursor: 'pointer',
  padding: theme.spacing(2),
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
}));

const IconWrapper = styled('div')({
  width: '48px',
  height: '48px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '8px',
  '& svg': {
    width: '100%',
    height: '100%',
    color: '#1976d2',
  },
});

const services = [
  {
    icon: '/icons/b2b.svg',
    title: 'B2B',
    path: '/b2b'
  },
  {
    icon: '/icons/doctor.svg',
    title: 'Doctors',
    path: '/doctors'
  },
  {
    icon: '/icons/travel.svg',
    title: 'Travel',
    path: '/travel'
  },
  {
    icon: '/icons/car.svg',
    title: 'Car\nHire',
    path: '/car-hire'
  },
  {
    icon: '/icons/beauty.svg',
    title: 'Beauty',
    path: '/beauty'
  },
  {
    icon: '/icons/wedding.svg',
    title: 'Wedding\nPlanning',
    path: '/wedding'
  },
  {
    icon: '/icons/gym.svg',
    title: 'Gyms',
    path: '/gyms'
  },
  {
    icon: '/icons/education.svg',
    title: 'Education',
    path: '/education'
  },
  {
    icon: '/icons/movers.svg',
    title: 'Packers\n&\nMovers',
    path: '/movers'
  },
  {
    icon: '/icons/repair.svg',
    title: 'Repairs\n&\nServices',
    path: '/repairs'
  },
  {
    icon: '/icons/rent.svg',
    title: 'Rent\nor\nHire',
    path: '/rent'
  },
  {
    icon: '/icons/jobs.svg',
    title: 'Jobs',
    path: '/jobs'
  }
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ pb: 8 }}>
      <Box sx={{ mt: 2, mb: 4 }}>
        <Box sx={{ mb: 3, px: 2 }}>
          <SearchBar />
        </Box>
        <Grid container>
          {services.map((service, index) => (
            <Grid item xs={3} key={index}>
              <ServiceItem onClick={() => navigate(service.path)}>
                <IconWrapper>
                  <img 
                    src={service.icon} 
                    alt={service.title}
                    style={{ width: '100%', height: '100%' }}
                  />
                </IconWrapper>
                <Typography 
                  variant="caption" 
                  component="div"
                  sx={{ 
                    fontSize: '13px',
                    lineHeight: 1.2,
                    color: '#555',
                    whiteSpace: 'pre-line',
                    textAlign: 'center',
                  }}
                >
                  {service.title}
                </Typography>
              </ServiceItem>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;