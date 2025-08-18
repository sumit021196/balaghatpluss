import React from 'react';
import { Grid, Typography, Box, Container, Button, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchBar from '../SearchBar';
import { useNavigate } from 'react-router-dom';
import { BiBuildingHouse, BiDumbbell } from 'react-icons/bi';
import { FaUserDoctor, FaCarSide, FaGraduationCap, FaMoneyBillWave, FaBriefcase, FaSuitcase } from 'react-icons/fa6';
import { MdTravelExplore, MdHomeRepairService, MdExpandMore, MdWorkOutline, MdFitnessCenter, MdEmergency, MdLocalGroceryStore, MdDirectionsCar, MdLocalOffer } from 'react-icons/md';
import { GiLipstick } from 'react-icons/gi';
import { RiHandHeartLine, RiHomeHeartFill } from 'react-icons/ri';
import { TbTruckDelivery } from 'react-icons/tb';
import { BsHouses, BsBuildingsFill, BsDroplet, BsShop } from 'react-icons/bs';
import { FaTshirt, FaTractor, FaHamburger, FaFilm, FaCalendarAlt, FaCarAlt } from 'react-icons/fa';
import { GiClothes, GiFarmer } from 'react-icons/gi';

const ServiceItem = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  color: '#333',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  cursor: 'pointer',
  padding: theme.spacing(1),
  '& .service-title': {
    fontWeight: '600',
    whiteSpace: 'pre-line',
    fontSize: '0.9rem',
    lineHeight: '1.2',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem',
      fontWeight: '700'
    }
  }
}));

const IconWrapper = styled('div')({
  width: '36px',
  height: '36px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '4px',
  '& svg': {
    width: '100%',
    height: '100%',
    transition: 'transform 0.2s ease-in-out',
  },
  '& .service-icon': {
    transition: 'transform 0.2s ease-in-out',
  }
});

const PromotionalCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: '#e3f2fd',
  borderRadius: theme.spacing(2),
  marginTop: theme.spacing(4),
  textAlign: 'center',
}));

const AppCard = styled(Paper)(({ bgcolor }) => ({
  padding: '16px',
  backgroundColor: bgcolor,
  borderRadius: '8px',
  color: 'white',
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
}));

const services = [
  {
    icon: <FaUserDoctor className="service-icon" style={{ color: '#E74C3C' }} />,
    title: 'Doctors',
    path: '/doctors',
    description: 'Book appointments or consult online with top doctors in Balaghat'
  },
  {
    icon: <FaBriefcase className="service-icon" style={{ color: '#8E44AD' }} />,
    title: 'Hire & Fire',
    path: '/hire-fire',
    description: 'Find daily wage workers, security guards, and domestic help'
  },
  {
    icon: <FaSuitcase className="service-icon" style={{ color: '#27AE60' }} />,
    title: 'Jobs',
    path: '/jobs',
    description: 'Find local jobs and employment opportunities in Balaghat'
  },
  {
    icon: <MdWorkOutline className="service-icon" style={{ color: '#2ECC71' }} />,
    title: 'Govt\nSchemes',
    path: '/government-schemes'
  },
  {
    icon: <BiDumbbell className="service-icon" style={{ color: '#6C5CE7' }} />,
    title: 'Fitness',
    path: '/fitness'
  },
  {
    icon: <FaGraduationCap className="service-icon" style={{ color: '#2ECC71' }} />,
    title: 'Education',
    path: '/education'
  },
  {
    icon: <TbTruckDelivery className="service-icon" style={{ color: '#8E44AD' }} />,
    title: 'Transport',
    path: '/transportation'
  },
  {
    icon: <MdHomeRepairService className="service-icon" style={{ color: '#D35400' }} />,
    title: 'Repairs',
    path: '/repairs'
  },
  {
    icon: <MdEmergency className="service-icon" style={{ color: '#FF0000' }} />,
    title: 'Emergency',
    path: '/emergency'
  },
  {
    icon: <FaTractor className="service-icon" style={{ color: '#27AE60' }} />,
    title: 'Farmer',
    path: '/farmer'
  },
  {
    icon: <FaFilm className="service-icon" style={{ color: '#2C3E50' }} />,
    title: 'Media',
    path: '/media'
  },
  {
    icon: <FaHamburger className="service-icon" style={{ color: '#E67E22' }} />,
    title: 'Food',
    path: '/food'
  },
  {
    icon: <MdLocalOffer className="service-icon" style={{ color: '#16A085' }} />,
    title: 'Event\nMgmt',
    path: '/event-management'
  },
  {
    icon: <BsShop className="service-icon" style={{ color: '#D35400' }} />,
    title: 'Local\nProducts',
    path: '/local-products'
  },
  {
    icon: <FaTshirt className="service-icon" style={{ color: '#E74C3C' }} />,
    title: 'Fashion',
    path: '/fashion'
  },
  {
    icon: <MdWorkOutline className="service-icon" style={{ color: '#2C3E50' }} />,
    title: 'Hire &\nFire',
    path: '/hire-fire'
  },
  {
    icon: <BsDroplet className="service-icon" style={{ color: '#3498DB' }} />,
    title: 'Nature',
    path: '/nature'
  },
  {
    icon: <MdLocalGroceryStore className="service-icon" style={{ color: '#27AE60' }} />,
    title: 'Kirana',
    path: '/kirana'
  },
  {
    icon: <FaCarAlt className="service-icon" style={{ color: '#F39C12' }} />,
    title: 'Car Hire',
    path: '/car-hire'
  },
  {
    icon: <RiHomeHeartFill className="service-icon" style={{ color: '#C0392B' }} />,
    title: 'Real\nEstate',
    path: '/real-estate'
  }
];

const promotionalApps = [
  { title: 'JioMart\nSHOPPING', bgcolor: '#0277bd' },
  { title: 'AJIO\nFASHION', bgcolor: '#263238' },
  { title: 'tira\nBEAUTY', bgcolor: '#ffcdd2' },
  { title: 'PAY\nBILLS', bgcolor: '#1565c0' }
];

const Home = () => {
  const navigate = useNavigate();
  const displayedServices = services; // Show all services by default

  return (
    <Container maxWidth="md" sx={{ pb: 8 }}>
      <Box sx={{ mt: 2, mb: 4 }}>
        <Box sx={{ mb: 3, px: 2 }}>
          <SearchBar />
        </Box>
        <Grid container spacing={1}>
          {displayedServices.map((service, index) => (
            <Grid item xs={3} key={index}>
              <ServiceItem onClick={() => navigate(service.path)}>
                <IconWrapper>
                  {service.icon}
                </IconWrapper>
                <Typography 
                  variant="caption" 
                  component="div"
                  sx={{ 
                    fontSize: '11px',
                    lineHeight: 1.1,
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