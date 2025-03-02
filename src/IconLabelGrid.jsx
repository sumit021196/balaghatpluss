import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import FlightIcon from '@mui/icons-material/Flight';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SpaIcon from '@mui/icons-material/Spa';
import CelebrationIcon from '@mui/icons-material/Celebration';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SchoolIcon from '@mui/icons-material/School';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BuildIcon from '@mui/icons-material/Build';
import WeekendIcon from '@mui/icons-material/Weekend';
import WorkIcon from '@mui/icons-material/Work';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import HomeIcon from '@mui/icons-material/Home';
import HotelIcon from '@mui/icons-material/Hotel';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const services = [
  { icon: <BusinessCenterIcon style={{color: '#4285f4'}} />, title: 'B2B', path: '/b2b' },
  { icon: <LocalHospitalIcon style={{color: '#34a853'}} />, title: 'Doctors', path: '/doctors' },
  { icon: <FlightIcon style={{color: '#4285f4'}} />, title: 'Travel', path: '/travel' },
  { icon: <DirectionsCarIcon style={{color: '#fbbc05'}} />, title: 'Car Hire', path: '/car-hire' },
  { icon: <SpaIcon style={{color: '#ea4335'}} />, title: 'Beauty', path: '/beauty' },
  { icon: <CelebrationIcon style={{color: '#4285f4'}} />, title: 'Wedding Planning', path: '/wedding' },
  { icon: <FitnessCenterIcon style={{color: '#34a853'}} />, title: 'Gyms', path: '/gyms' },
  { icon: <SchoolIcon style={{color: '#34a853'}} />, title: 'Education', path: '/education' },
  { icon: <LocalShippingIcon style={{color: '#fbbc05'}} />, title: 'Packers & Movers', path: '/packers-movers' },
  { icon: <BuildIcon style={{color: '#ea4335'}} />, title: 'Repairs & Services', path: '/repairs' },
  { icon: <WeekendIcon style={{color: '#4285f4'}} />, title: 'Rent or Hire', path: '/rent' },
  { icon: <WorkIcon style={{color: '#34a853'}} />, title: 'Jobs', path: '/jobs' },
  { icon: <AccountBalanceIcon style={{color: '#4285f4'}} />, title: 'Loans', path: '/loans' },
  { icon: <HomeIcon style={{color: '#ea4335'}} />, title: 'Real Estate', path: '/real-estate' },
  { icon: <HotelIcon style={{color: '#fbbc05'}} />, title: 'PG/Hostel', path: '/pg-hostel' },
  { icon: <ExpandMoreIcon style={{color: '#4285f4'}} />, title: 'Show More', path: '/more' }
];

const IconLabelGrid = () => {
  return (
    <Grid container spacing={3} sx={{ padding: 2, maxWidth: 1200, margin: 'auto' }}>
      {services.map((service, index) => (
        <Grid item xs={3} key={index}>
          <Link to={service.path} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Paper 
              elevation={0} 
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 1,
                backgroundColor: 'transparent',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)'
                }
              }}
            >
              {service.icon}
              <Typography 
                variant="caption" 
                align="center" 
                sx={{ 
                  marginTop: 1,
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  color: '#333'
                }}
              >
                {service.title}
              </Typography>
            </Paper>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default IconLabelGrid;
