import React from 'react';
import { Grid, Typography, Paper, Box, Container, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchBar from '../SearchBar';
import {
  LocalHospital,
  Flight,
  DirectionsCar,
  Spa,
  People,
  FitnessCenter,
  School,
  LocalShipping,
  Build,
  Store,
  Work,
  AccountBalance,
  Home as HomeIcon,
  Hotel,
  ExpandMore,
  ShoppingCart,
  Checkroom,
  Face
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const ServiceItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: '#666',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  cursor: 'pointer',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: theme.palette.grey[100],
  },
}));

const IconWrapper = styled('div')(({ theme }) => ({
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(1),
  '& svg': {
    fontSize: '24px',
    color: theme.palette.primary.main,
  },
}));

const services = [
  { icon: <Store />, title: 'B2B', path: '/b2b', color: '#ff9800' },
  { icon: <LocalHospital />, title: 'Doctors', path: '/doctors' },
  { icon: <Flight />, title: 'Travel', path: '/travel' },
  { icon: <DirectionsCar />, title: 'Car Hire', path: '/car-hire' },
  { icon: <Spa />, title: 'Beauty', path: '/beauty' },
  { icon: <People />, title: 'Wedding Planning', path: '/wedding' },
  { icon: <FitnessCenter />, title: 'Gyms', path: '/gyms' },
  { icon: <School />, title: 'Education', path: '/education' },
  { icon: <LocalShipping />, title: 'Packers & Movers', path: '/movers' },
  { icon: <Build />, title: 'Repairs & Services', path: '/repairs' },
  { icon: <Store />, title: 'Rent or Hire', path: '/rent' },
  { icon: <Work />, title: 'Jobs', path: '/jobs' },
  { icon: <AccountBalance />, title: 'Loans', path: '/loans' },
  { icon: <HomeIcon />, title: 'Real Estate', path: '/real-estate' },
  { icon: <Hotel />, title: 'PG/Hostel', path: '/hostel' },
];

const promotionalApps = [
  { icon: <ShoppingCart />, title: 'JioMart\nSHOPPING', color: '#0277bd' },
  { icon: <Checkroom />, title: 'AJIO\nFASHION', color: '#263238' },
  { icon: <Face />, title: 'tira\nBEAUTY', color: '#ffcdd2' },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ pb: 8 }}>
      <Box sx={{ mt: 2, mb: 4 }}>
        <Box sx={{ mb: 3 }}>
          <SearchBar />
        </Box>
        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={3} key={index}>
              <ServiceItem onClick={() => navigate(service.path)}>
                <IconWrapper>
                  {service.icon}
                </IconWrapper>
                <Typography 
                  variant="caption" 
                  sx={{ 
                    fontSize: '12px',
                    lineHeight: 1.2,
                    fontWeight: 500,
                    textAlign: 'center',
                  }}
                >
                  {service.title}
                </Typography>
              </ServiceItem>
            </Grid>
          ))}
          <Grid item xs={3}>
            <ServiceItem>
              <IconWrapper>
                <ExpandMore />
              </IconWrapper>
              <Typography 
                variant="caption"
                sx={{ 
                  fontSize: '12px',
                  lineHeight: 1.2,
                  fontWeight: 500 
                }}
              >
                Show More
              </Typography>
            </ServiceItem>
          </Grid>
        </Grid>

        <Box 
          sx={{ 
            mt: 4, 
            p: 3, 
            bgcolor: '#e3f2fd', 
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            gap: 3
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" sx={{ color: '#0277bd', fontWeight: 'bold', mb: 1 }}>
              Connect with
            </Typography>
            <Typography variant="h4" sx={{ color: '#0277bd', fontWeight: 'bold', mb: 1 }}>
              18.1 Crore+
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#0277bd', mb: 2 }}>
              Customers on BalaghatPlus
            </Typography>
            <Button 
              variant="contained" 
              sx={{ 
                bgcolor: '#1976d2',
                '&:hover': { bgcolor: '#1565c0' },
                borderRadius: '4px',
                textTransform: 'none',
              }}
            >
              List your business for FREE
            </Button>
          </Box>
          <Box 
            component="img"
            src="/business-man.png"
            alt="Business Man"
            sx={{ 
              width: '150px',
              height: 'auto',
              display: { xs: 'none', sm: 'block' }
            }}
          />
        </Box>

        <Grid container spacing={2} sx={{ mt: 4 }}>
          {promotionalApps.map((app, index) => (
            <Grid item xs={4} key={index}>
              <Paper 
                sx={{ 
                  p: 2, 
                  bgcolor: app.color,
                  color: 'white',
                  textAlign: 'center',
                  borderRadius: 2
                }}
              >
                {app.icon}
                <Typography 
                  variant="caption" 
                  sx={{ 
                    display: 'block',
                    mt: 1,
                    whiteSpace: 'pre-line'
                  }}
                >
                  {app.title}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;