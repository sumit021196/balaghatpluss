import React from 'react';
import { Grid, Typography, Box, Container, Button, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchBar from '../SearchBar';
import { useNavigate } from 'react-router-dom';
import { BiBuildingHouse, BiDumbbell } from 'react-icons/bi';
import { FaUserDoctor, FaCarSide, FaGraduationCap, FaMoneyBillWave } from 'react-icons/fa6';
import { MdTravelExplore, MdHomeRepairService, MdExpandMore } from 'react-icons/md';
import { GiLipstick } from 'react-icons/gi';
import { RiHandHeartLine, RiHomeHeartFill } from 'react-icons/ri';
import { TbTruckDelivery } from 'react-icons/tb';
import { BsHouses, BsBuildingsFill } from 'react-icons/bs';
import { MdWorkOutline } from 'react-icons/md';

const ServiceItem = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  color: '#666',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  cursor: 'pointer',
  padding: theme.spacing(1),
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    '& .service-icon': {
      transform: 'scale(1.1)',
    }
  },
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
  },
  {
    icon: <FaMoneyBillWave className="service-icon" style={{ color: '#2980B9' }} />,
    title: 'Loans',
    path: '/loans'
  },
  {
    icon: <RiHomeHeartFill className="service-icon" style={{ color: '#C0392B' }} />,
    title: 'Real\nEstate',
    path: '/real-estate'
  },
  {
    icon: <BsBuildingsFill className="service-icon" style={{ color: '#8E44AD' }} />,
    title: 'PG/Hostel',
    path: '/pg-hostel'
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
  const [showAllServices, setShowAllServices] = React.useState(false);

  const displayedServices = showAllServices ? services : services.slice(0, 12);

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
          {!showAllServices && (
            <Grid item xs={3}>
              <ServiceItem onClick={() => setShowAllServices(true)}>
                <IconWrapper>
                  <MdExpandMore className="service-icon" style={{ color: '#1976d2' }} />
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
                  Show More
                </Typography>
              </ServiceItem>
            </Grid>
          )}
        </Grid>

        <PromotionalCard>
          <Typography variant="h5" sx={{ color: '#0277bd', fontWeight: 'bold', mb: 1 }}>
            Connect with
          </Typography>
          <Typography variant="h4" sx={{ color: '#0277bd', fontWeight: 'bold', mb: 1 }}>
            1 Lakh+
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
              px: 4,
            }}
          >
            List your business for FREE
          </Button>
        </PromotionalCard>

        <Grid container spacing={2} sx={{ mt: 4 }}>
          {promotionalApps.map((app, index) => (
            <Grid item xs={3} key={index}>
              <AppCard bgcolor={app.bgcolor}>
                <Typography 
                  variant="caption" 
                  sx={{ 
                    display: 'block',
                    whiteSpace: 'pre-line',
                    fontWeight: 500
                  }}
                >
                  {app.title}
                </Typography>
              </AppCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;