import React from 'react';
import { Grid, Typography, Box, Container, Button, Paper, Chip, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchBar from '../SearchBar';
import { useNavigate } from 'react-router-dom';
import { BiBuildingHouse, BiDumbbell } from 'react-icons/bi';
import { FaUserDoctor, FaCarSide, FaGraduationCap, FaMoneyBillWave, FaBriefcase, FaSuitcase } from 'react-icons/fa6';
import { MdTravelExplore, MdHomeRepairService, MdExpandMore, MdWorkOutline, MdFitnessCenter, MdEmergency, MdLocalGroceryStore, MdDirectionsCar, MdLocalOffer, MdPets } from 'react-icons/md';
import { GiLipstick, GiGavel, GiClothes } from 'react-icons/gi';
import { RiHandHeartLine, RiHomeHeartFill } from 'react-icons/ri';
import { TbTruckDelivery } from 'react-icons/tb';
import { BsHouses, BsBuildingsFill, BsDroplet, BsShop } from 'react-icons/bs';
import { FaTshirt, FaTractor, FaHamburger, FaFilm, FaCalendarAlt, FaCarAlt } from 'react-icons/fa';
import { Gavel } from '@mui/icons-material';
import { supabase } from '../lib/supabaseClient';
// Styled components
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

// Services grouped into broader categories (rows become horizontally scrollable if overflow)
const serviceSections = [
  {
    title: 'Health & Safety',
    items: [
      { icon: <FaUserDoctor className="service-icon" style={{ color: '#E74C3C' }} />, title: 'Doctors', path: '/doctors' },
      { icon: <MdEmergency className="service-icon" style={{ color: '#FF0000' }} />, title: 'Emergency', path: '/emergency' },
      { icon: <RiHandHeartLine className="service-icon" style={{ color: '#C0392B' }} />, title: 'Caretaker', path: '/caretaker' },
      { icon: <MdPets className="service-icon" style={{ color: '#ff7043' }} />, title: 'Pet Care', path: '/pet-care' },
    ]
  },
  {
    title: 'Jobs & Hiring',
    items: [
      { icon: <FaSuitcase className="service-icon" style={{ color: '#27AE60' }} />, title: 'Jobs', path: '/jobs' },
      { icon: <FaBriefcase className="service-icon" style={{ color: '#8E44AD' }} />, title: 'Hire & Fire', path: '/hire-fire' },
      { icon: <BsBuildingsFill className="service-icon" style={{ color: '#8E44AD' }} />, title: 'Hospitality', path: '/hospitality' },
      { icon: <GiClothes className="service-icon" style={{ color: '#2980B9' }} />, title: 'Laundry', path: '/laundry' },
    ]
  },
  {
    title: 'Home & Personal',
    items: [
      { icon: <GiLipstick className="service-icon" style={{ color: '#E91E63' }} />, title: 'Beauty', path: '/beauty-services' },
      { icon: <MdHomeRepairService className="service-icon" style={{ color: '#D35400' }} />, title: 'Repairs', path: '/repair-services' },
      { icon: <FaTshirt className="service-icon" style={{ color: '#E74C3C' }} />, title: 'Fashion', path: '/fashion' },
      { icon: <BsShop className="service-icon" style={{ color: '#D35400' }} />, title: 'Local\nProducts', path: '/local-products' },
    ]
  },
  {
    title: 'Transport & Travel',
    items: [
      { icon: <TbTruckDelivery className="service-icon" style={{ color: '#8E44AD' }} />, title: 'Transport', path: '/transportation' },
      { icon: <FaCarAlt className="service-icon" style={{ color: '#F39C12' }} />, title: 'Car Hire', path: '/car-hire' },
    ]
  },
  {
    title: 'Education',
    items: [
      { icon: <FaGraduationCap className="service-icon" style={{ color: '#2ECC71' }} />, title: 'Education', path: '/education' },
      { icon: <MdWorkOutline className="service-icon" style={{ color: '#2ECC71' }} />, title: 'Govt\nSchemes', path: '/government-schemes' },
    ]
  },
  {
    title: 'Farming & Nature',
    items: [
      { icon: <FaTractor className="service-icon" style={{ color: '#27AE60' }} />, title: 'Farmer', path: '/farmer-services' },
      { icon: <BsDroplet className="service-icon" style={{ color: '#3498DB' }} />, title: 'Nature', path: '/nature' },
      { icon: <FaTractor className="service-icon" style={{ color: '#27AE60' }} />, title: 'Agriculture', path: '/farmer-services' },
    ]
  },
  {
    title: 'Legal & Real Estate',
    items: [
      { icon: <Gavel className="service-icon" style={{ color: '#8E44AD' }} />, title: 'Legal', path: '/legal' },
      { icon: <RiHomeHeartFill className="service-icon" style={{ color: '#C0392B' }} />, title: 'Real\nEstate', path: '/real-estate' },
    ]
  },
  {
    title: 'Food & Media',
    items: [
      { icon: <FaHamburger className="service-icon" style={{ color: '#E67E22' }} />, title: 'Food', path: '/food' },
      { icon: <FaFilm className="service-icon" style={{ color: '#2C3E50' }} />, title: 'Media', path: '/media' },
      { icon: <MdLocalOffer className="service-icon" style={{ color: '#16A085' }} />, title: 'Event\nMgmt', path: '/event-management' },
    ]
  },
  {
    title: 'Mechanics & Kirana',
    items: [
      { icon: <MdHomeRepairService className="service-icon" style={{ color: '#D35400' }} />, title: 'Mechanical', path: '/mechanical-services' },
      { icon: <MdLocalGroceryStore className="service-icon" style={{ color: '#27AE60' }} />, title: 'Kirana', path: '/kirana' },
      { icon: <BiDumbbell className="service-icon" style={{ color: '#6C5CE7' }} />, title: 'Fitness', path: '/fitness' },
    ]
  },
];

const promotionalApps = [
  { title: 'JioMart\nSHOPPING', bgcolor: '#0277bd' },
  { title: 'AJIO\nFASHION', bgcolor: '#263238' },
  { title: 'tira\nBEAUTY', bgcolor: '#ffcdd2' },
  { title: 'PAY\nBILLS', bgcolor: '#1565c0' }
];

const Home = () => {
  const navigate = useNavigate();

  const recordServiceClick = (key) => {
    try {
      const data = JSON.parse(localStorage.getItem('serviceClicks') || '{}');
      data[key] = (data[key] || 0) + 1;
      localStorage.setItem('serviceClicks', JSON.stringify(data));
    } catch (e) {
      // ignore storage errors in production UI
    }
  };

  const sendClickToSupabase = (service, sectionTitle) => {
    try {
      const payload = {
        service_title: service.title,
        service_path: service.path,
        section_title: sectionTitle,
        clicked_at: new Date().toISOString(),
        user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : null,
      };
      // fire-and-forget; do not block navigation
      supabase.from('service_clicks').insert(payload).then(() => {}).catch(() => {});
    } catch (_) {
      // no-op
    }
  };

  const handleServiceClick = (service, sectionTitle) => {
    recordServiceClick(service.title);
    sendClickToSupabase(service, sectionTitle);
    navigate(service.path);
  };

  return (
    <Container maxWidth="md" sx={{ pb: 8 }}>
      <Box sx={{ mt: 2, mb: 4 }}>
        <Box sx={{ mb: 3, px: 2 }}>
          <SearchBar />
        </Box>

        {serviceSections.map((section, sIdx) => (
          <Box key={sIdx} sx={{ mb: 2 }}>
            <Box sx={{ px: 1, mb: 0.5, display: 'flex', alignItems: 'center' }}>
              <Chip label={section.title} size="small" variant="outlined" sx={{ fontWeight: 700 }} />
            </Box>
            <Divider light sx={{ mb: 1 }} />
            <Box
              sx={{
                display: 'flex',
                gap: 1,
                overflowX: 'auto',
                px: 1,
                pb: 1,
                scrollSnapType: 'x mandatory',
                scrollPadding: 8,
                '&::-webkit-scrollbar': { display: 'none' },
                scrollbarWidth: 'none',
              }}
            >
              {section.items.map((service, index) => (
                <Box
                  key={index}
                  sx={{
                    // Show 3 full items and ~15% of the 4th on mobile when more than 3 items exist
                    // Per-item width = (100% - 15%) / 3 = 28.33%
                    minWidth: { xs: section.items.length > 3 ? '28.33%' : '33.33%', sm: '23%' },
                    flex: '0 0 auto',
                    scrollSnapAlign: 'start'
                  }}
                >
                  <ServiceItem onClick={() => handleServiceClick(service, section.title)}>
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
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Home;