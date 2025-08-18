import React, { useState } from 'react';
import { 
  Container, Typography, Grid, Card, CardContent, Avatar, 
  Button, Box, Chip, TextField, InputAdornment, useMediaQuery, useTheme
} from '@mui/material';
import { 
  Search as SearchIcon, LocalHospital, Phone, Email, 
  VideoCall, Star, Work, MedicalServices, LocationOn, AccessTime 
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

// Sample doctors data
const doctors = [
  {
    id: 1,
    name: 'Dr. Rajesh Verma',
    speciality: 'Cardiologist',
    experience: '15 years',
    rating: 4.8,
    hospital: 'Balaghat City Hospital',
    address: 'Civil Lines, Balaghat',
    phone: '9876543210',
    email: 'dr.rajesh@example.com',
    timings: '10 AM - 6 PM',
    fee: '₹500',
    onlineFee: '₹300',
    image: 'https://img.icons8.com/color/96/doctor-male.png',
    about: 'Senior Cardiologist with extensive experience.',
    services: ['ECG', 'Echo', 'Angiography']
  },
  // Add more doctors as needed
];

const StyledCard = styled(Card)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 12,
  overflow: 'hidden',
  '&:hover': {
    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
  },
});

const DoctorCard = ({ doctor }) => {
  const [showContact, setShowContact] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid item xs={12} sm={6} md={4}>
      <StyledCard>
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <Avatar 
              src={doctor.image} 
              alt={doctor.name}
              sx={{ 
                width: isMobile ? 60 : 80, 
                height: isMobile ? 60 : 80,
                mb: 2,
                mx: 'auto',
                border: '3px solid #1976d2'
              }}
            />
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              {doctor.name}
            </Typography>
            <Chip 
              icon={<MedicalServices fontSize="small" />} 
              label={doctor.speciality} 
              color="primary" 
              size="small" 
              sx={{ mb: 1 }}
            />
            
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 1 }}>
              <Star color="warning" fontSize="small" />
              <Typography variant="body2">
                {doctor.rating} • {doctor.experience}
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <LocalHospital fontSize="small" color="action" sx={{ mr: 1 }} />
              <Typography variant="body2" color="text.secondary">
                {doctor.hospital}
              </Typography>
            </Box>
            
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontStyle: 'italic' }}>
              {doctor.about}
            </Typography>
            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, justifyContent: 'center', mb: 2 }}>
              {doctor.services.map((service, idx) => (
                <Chip key={idx} label={service} size="small" variant="outlined" />
              ))}
            </Box>
            
            <Box sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 2, mb: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2">
                  <AccessTime fontSize="small" sx={{ verticalAlign: 'middle', mr: 0.5 }} />
                  {doctor.timings}
                </Typography>
                <Typography variant="body2">
                  Fee: <span style={{ fontWeight: 600, color: '#1976d2' }}>{doctor.fee}</span>
                </Typography>
              </Box>
              <Button 
                variant="contained" 
                fullWidth 
                startIcon={<VideoCall />}
                onClick={() => window.alert(`Initiating video consultation with ${doctor.name}`)}
              >
                Video Consult ({doctor.onlineFee})
              </Button>
            </Box>
            
            <Button 
              variant="outlined" 
              fullWidth 
              onClick={() => setShowContact(!showContact)}
            >
              {showContact ? 'Hide Contact' : 'Show Contact'}
            </Button>
            
            {showContact && (
              <Box sx={{ mt: 2, p: 2, bgcolor: '#f9f9f9', borderRadius: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Phone fontSize="small" color="action" sx={{ mr: 1 }} />
                  <Typography variant="body2">{doctor.phone}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Email fontSize="small" color="action" sx={{ mr: 1 }} />
                  <Typography variant="body2">{doctor.email}</Typography>
                </Box>
              </Box>
            )}
          </Box>
        </CardContent>
      </StyledCard>
    </Grid>
  );
};

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [specialtyFilter, setSpecialtyFilter] = useState('All');

  const specialties = ['All', 'Cardiologist', 'Pediatrician', 'Orthopedic', 'Gynecologist', 'Dermatologist'];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.speciality.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = specialtyFilter === 'All' || doctor.speciality === specialtyFilter;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 600, color: '#1976d2' }}>
          Find Doctors in Balaghat
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
          Book appointments or consult online with top doctors near you
        </Typography>
        
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search doctors by name or speciality..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
            sx: { borderRadius: 4, maxWidth: 600, mx: 'auto' }
          }}
          sx={{ mb: 3 }}
        />
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center', mb: 4 }}>
          {specialties.map((specialty) => (
            <Chip
              key={specialty}
              label={specialty}
              onClick={() => setSpecialtyFilter(specialty)}
              color={specialty === specialtyFilter ? 'primary' : 'default'}
              variant={specialty === specialtyFilter ? 'filled' : 'outlined'}
              clickable
            />
          ))}
        </Box>
      </Box>
      
      <Grid container spacing={3}>
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))
        ) : (
          <Box sx={{ width: '100%', textAlign: 'center', py: 4 }}>
            <Typography variant="h6" color="text.secondary">
              No doctors found matching your criteria
            </Typography>
          </Box>
        )}
      </Grid>
    </Container>
  );
};

export default Doctors;
