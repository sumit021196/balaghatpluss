import React from 'react';
import { Grid, Typography, Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchBar from '../SearchBar';
import { useNavigate } from 'react-router-dom';
import { BiBuildingHouse, BiDumbbell } from 'react-icons/bi';
import { FaUserDoctor, FaCarSide, FaGraduationCap } from 'react-icons/fa6';
import { MdTravelExplore, MdHomeRepairService } from 'react-icons/md';
import { GiLipstick } from 'react-icons/gi';
import { RiHandHeartLine } from 'react-icons/ri';
import { TbTruckDelivery } from 'react-icons/tb';
import { BsHouses } from 'react-icons/bs';
import { MdWorkOutline } from 'react-icons/md';

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
    '& .service-icon': {
      transform: 'scale(1.1)',
    }
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
    transition: 'transform 0.2s ease-in-out',
  },
  '& .service-icon': {
    transition: 'transform 0.2s ease-in-out',
  }
});

const services = [
  {
    icon: <BiBuildingHouse className="service-icon" style={{ color: '#0B5394' }} />,
    title: 'B2B',
    path: '/b2b'
  },
  {
    icon: <FaUserDoctor className="service-icon" style={{ color: '#E74C3C' }} />,
    title: 'Doctors',
    path: '/doctors'
  },
  {
    icon: <MdTravelExplore className="service-icon" style={{ color: '#3498DB' }} />,
    title: 'Travel',
    path: '/travel'
  },
  {
    icon: <FaCarSide className="service-icon" style={{ color: '#F39C12' }} />,
    title: 'Car\nHire',
    path: '/car-hire'
  },
  {
    icon: <GiLipstick className="service-icon" style={{ color: '#E83E8C' }} />,
    title: 'Beauty',
    path: '/beauty'
  },
  {
    icon: <RiHandHeartLine className="service-icon" style={{ color: '#FF4D6D' }} />,
    title: 'Wedding\nPlanning',
    path: '/wedding'
  },
  {
    icon: <BiDumbbell className="service-icon" style={{ color: '#6C5CE7' }} />,
    title: 'Gyms',
    path: '/gyms'
  },
  {
    icon: <FaGraduationCap className="service-icon" style={{ color: '#2ECC71' }} />,
    title: 'Education',
    path: '/education'
  },
  {
    icon: <TbTruckDelivery className="service-icon" style={{ color: '#8E44AD' }} />,
    title: 'Packers\n&\nMovers',
    path: '/movers'
  },
  {
    icon: <MdHomeRepairService className="service-icon" style={{ color: '#D35400' }} />,
    title: 'Repairs\n&\nServices',
    path: '/repairs'
  },
  {
    icon: <BsHouses className="service-icon" style={{ color: '#16A085' }} />,
    title: 'Rent\nor\nHire',
    path: '/rent'
  },
  {
    icon: <MdWorkOutline className="service-icon" style={{ color: '#27AE60' }} />,
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
                  {service.icon}
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