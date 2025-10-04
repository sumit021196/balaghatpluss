import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Business as BusinessIcon } from '@mui/icons-material';
import ServiceList from '../components/ServiceList';
import { fetchCaretakerServices } from '../services/caretakers';

const caretakerCategories = [
  { value: 'all', label: 'All Categories' },
  { value: 'caretaker', label: 'Caretaker' }
];

const CaretakerServices = () => {
  const [services, setServices] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        const data = await fetchCaretakerServices();
        if (isMounted) setServices(data);
      } catch (e) {
        console.error(e);
        if (isMounted) setError('Failed to load caretaker services');
      } finally {
        if (isMounted) setLoading(false);
      }
    })();
    return () => { isMounted = false; };
  }, []);

  const handleVendorRegister = () => {
    alert('Vendor registration coming soon.');
  };

  return (
    <Box>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <ServiceList
          services={services}
          title="Caretaker Services"
          description={loading ? 'Loading…' : (error || 'Hire trained attendants for elderly, post-surgery, and newborn care')}
          type="caretaker_service"
          categories={caretakerCategories}
          recipientPhone="1234567890"
        />

        <Box textAlign="center" mt={8} mb={4}>
          <Typography variant="h5" gutterBottom>
            Are you a caretaker?
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Join our network and get more bookings.
          </Typography>
          <Button variant="outlined" size="large" startIcon={<BusinessIcon />} onClick={handleVendorRegister}>
            Register as Caretaker
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default CaretakerServices;


