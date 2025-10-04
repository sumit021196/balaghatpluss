import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Business as BusinessIcon } from '@mui/icons-material';
import ServiceList from '../components/ServiceList';

// Service categories for filtering
const serviceCategories = [
  { value: 'all', label: 'All Categories' },
  { value: 'electrician', label: 'Electrician' },
  { value: 'plumber', label: 'Plumber' },
  { value: 'ac', label: 'AC Repair' },
  { value: 'mobile', label: 'Mobile Repair' },
  { value: 'bike', label: 'Bike Service' },
  { value: 'appliances', label: 'Home Appliances' },
  { value: 'tv', label: 'TV Repair' },
  { value: 'computer', label: 'Computer Repair' },
  { value: 'cctv', label: 'CCTV Installation' },
  { value: 'water', label: 'Water Purifier' }
];

const repairServices = [
  {
    id: 'elec-1',
    title: 'A1 Electrician',
    description: '24/7 emergency electrical services including wiring, switchboard repairs, and power point installations.',
    category: 'electrician',
    price: '₹300 - ₹500',
    rating: 4.5,
    reviews: 128,
    available: true,
    speciality: 'Emergency Electrical Repairs',
    image: '/assets/repair/electrician.jpg'
  },
  {
    id: 'plumb-1',
    title: 'City Plumbers',
    description: 'Expert plumbing services for leak detection and repair, pipe fitting, and bathroom installations.',
    category: 'plumber',
    price: '₹400 - ₹800',
    rating: 4.7,
    reviews: 95,
    available: true,
    speciality: 'Leak Detection & Repair',
    image: '/assets/repair/plumber.jpg'
  },
  {
    id: 'ac-1',
    title: 'CoolBreeze AC Services',
    description: 'Professional AC gas refill, servicing, and repair for all brands including split and window ACs.',
    category: 'ac',
    price: '₹500 - ₹1500',
    rating: 4.8,
    reviews: 156,
    available: true,
    speciality: 'AC Servicing & Repair',
    image: '/assets/repair/ac.jpg'
  },
  {
    id: 'mobile-1',
    title: 'Mobile Care Center',
    description: 'Fast and reliable mobile screen replacement and repair for all major smartphone brands.',
    category: 'mobile',
    price: '₹1000 - ₹5000',
    rating: 4.6,
    reviews: 210,
    available: true,
    speciality: 'Screen Replacement',
    image: '/assets/repair/mobile.jpg'
  },
  {
    id: 'bike-1',
    title: 'Speedy Bike Service',
    description: 'Complete bike service, repair, and maintenance for all two-wheeler brands.',
    category: 'bike',
    price: '₹500 - ₹3000',
    rating: 4.7,
    reviews: 187,
    available: true,
    speciality: 'Two-Wheeler Service',
    image: '/assets/repair/bike.jpg'
  },
  {
    id: 'appliance-1',
    title: 'Home Appliance Care',
    description: 'Repair services for washing machines, refrigerators, microwaves, and other home appliances.',
    category: 'appliances',
    price: '₹600 - ₹2500',
    rating: 4.5,
    reviews: 143,
    available: true,
    speciality: 'Home Appliance Repair',
    image: '/assets/repair/appliance.jpg'
  }
];

const RepairServices = () => {
  const handleVendorRegister = () => {
    alert('Vendor registration coming soon.');
  };

  return (
    <Box>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <ServiceList
          services={repairServices}
          title="Repair Services"
          description="Find and book professional repair services in your area"
          type="repair_service"
          categories={serviceCategories}
          recipientPhone="1234567890"
        />

        {/* Vendor Registration CTA */}
        <Box textAlign="center" mt={8} mb={4}>
          <Typography variant="h5" gutterBottom>
            Are you a service provider?
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Join our network of trusted professionals and get more customers
          </Typography>
          <Button 
            variant="outlined" 
            size="large"
            startIcon={<BusinessIcon />}
            onClick={handleVendorRegister}
          >
            Register as a Service Provider
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default RepairServices;

