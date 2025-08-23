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
  borderRadius: 8,
  overflow: 'hidden',
  transition: 'transform 0.2s, box-shadow 0.2s',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.1)',
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
                width: isMobile ? 50 : 60, 
                height: isMobile ? 50 : 60,
                mb: 1,
                mx: 'auto',
                border: '2px solid #1976d2'
              }}
            />
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5, fontSize: '1rem' }}>
              {doctor.name}
            </Typography>
            <Chip 
              icon={<MedicalServices fontSize="small" />} 
              label={doctor.speciality} 
              color="primary" 
              size="small" 
              sx={{ mb: 1 }}
            />
            
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5, mb: 0.5 }}>
              <Star color="warning" fontSize="inherit" sx={{ fontSize: '1rem' }} />
              <Typography variant="caption" sx={{ fontSize: '0.75rem' }}>
                {doctor.rating} • {doctor.experience}
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
              <LocalHospital fontSize="inherit" color="action" sx={{ mr: 0.5, fontSize: '1rem' }} />
              <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
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
            
            <Box sx={{ bgcolor: '#f8f9fa', p: 1.5, borderRadius: 1, mb: 1.5, border: '1px solid #eee' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center' }}>
                  <AccessTime fontSize="inherit" sx={{ mr: 0.5, fontSize: '0.9rem' }} />
                  {doctor.timings}
                </Typography>
                <Typography variant="caption" sx={{ fontWeight: 500, color: '#1976d2' }}>
                  {doctor.fee}
                </Typography>
              </Box>
              <Button 
                variant="contained" 
                fullWidth 
                size="small"
                startIcon={<VideoCall sx={{ fontSize: '1rem' }} />}
                onClick={() => window.alert(`Initiating video consultation with ${doctor.name}`)}
                sx={{ 
                  mt: 0.5,
                  py: 0.5,
                  fontSize: '0.75rem',
                  textTransform: 'none',
                  '& .MuiButton-startIcon': {
                    marginRight: '4px',
                    '& > *': {
                      fontSize: '1rem'
                    }
                  }
                }}
              >
                Video {doctor.onlineFee}
              </Button>
            </Box>
            
            <Button 
              variant="outlined" 
              fullWidth 
              size="small"
              onClick={() => setShowContact(!showContact)}
              sx={{ 
                mt: 0.5, 
                py: 0.5,
                fontSize: '0.75rem',
                textTransform: 'none'
              }}
            >
              {showContact ? 'Hide Contact' : 'Contact'}
            </Button>
            
            {showContact && (
              <Box sx={{ mt: 1, p: 1.5, bgcolor: '#f8f9fa', borderRadius: 1, border: '1px solid #eee' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                  <Phone fontSize="inherit" color="action" sx={{ mr: 0.5, fontSize: '0.9rem' }} />
                  <Typography variant="caption">{doctor.phone}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Email fontSize="inherit" color="action" sx={{ mr: 0.5, fontSize: '0.9rem' }} />
                  <Typography variant="caption" sx={{ wordBreak: 'break-word' }}>{doctor.email}</Typography>
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
    <Container maxWidth="lg" sx={{ py: 2 }}>
      <Box sx={{ mb: 3, textAlign: 'center' }}>
        
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
            sx: { 
              borderRadius: 2, 
              maxWidth: 500, 
              mx: 'auto',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderRadius: 2,
                },
              },
              '& .MuiInputBase-input': {
                py: 1,
                fontSize: '0.9rem'
              },
              '& .MuiInputAdornment-root': {
                mr: 1
              }
            }
          }}
          sx={{ mb: 3 }}
        />
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, justifyContent: 'center', mb: 3 }}>
          {specialties.map((specialty) => (
            <Chip
              key={specialty}
              label={specialty}
              onClick={() => setSpecialtyFilter(specialty)}
              color={specialty === specialtyFilter ? 'primary' : 'default'}
              variant={specialty === specialtyFilter ? 'filled' : 'outlined'}
              size="small"
              clickable
              sx={{ 
                '& .MuiChip-label': {
                  px: 1,
                  fontSize: '0.75rem'
                },
                height: '28px'
              }}
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
