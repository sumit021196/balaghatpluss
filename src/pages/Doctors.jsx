import React, { useState, Suspense, useMemo } from 'react';
import { 
  Container, Typography, Grid, Card, CardContent, Avatar, 
  Button, Box, Chip, TextField, InputAdornment, useMediaQuery, useTheme, Dialog, DialogTitle, DialogContent, Snackbar, Alert
} from '@mui/material';
import { 
  Search as SearchIcon, LocalHospital, Phone, Email, 
  VideoCall, Star, Work, MedicalServices, LocationOn, AccessTime 
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
const BookingForm = React.lazy(() => import('../components/BookingForm'));
import { useCreateBooking } from '../services/bookings';
import { openWhatsApp } from '../lib/whatsapp';

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
    phone: '7869814754',
    email: 'dr.rajesh@example.com',
    timings: '10 AM - 6 PM',
    fee: '₹500',
    onlineFee: '₹300',
    image: 'https://img.icons8.com/color/96/doctor-male.png',
    about: 'Senior Cardiologist with extensive experience in interventional cardiology.',
    services: ['ECG', 'Echo', 'Angiography', 'Angioplasty']
  },
  {
    id: 2,
    name: 'Dr. Priya Sharma',
    speciality: 'Gynecologist',
    experience: '12 years',
    rating: 4.7,
    hospital: 'Shivam Nursing Home',
    address: 'Gandhi Chowk, Balaghat',
    phone: '9876543211',
    email: 'dr.priya@example.com',
    timings: '9 AM - 5 PM',
    fee: '₹600',
    onlineFee: '₹400',
    image: 'https://img.icons8.com/color/96/doctor-female.png',
    about: 'Expert in high-risk pregnancies and laparoscopic surgeries.',
    services: ['Pregnancy Care', 'Laparoscopy', 'Infertility']
  },
  {
    id: 3,
    name: 'Dr. Amit Patel',
    speciality: 'Pediatrician',
    experience: '10 years',
    rating: 4.9,
    hospital: 'Balaghat Child Care',
    address: 'Medical College Road, Balaghat',
    phone: '9876543212',
    email: 'dr.amit@example.com',
    timings: '11 AM - 8 PM',
    fee: '₹400',
    onlineFee: '₹250',
    image: 'https://img.icons8.com/color/96/doctor-male.png',
    about: 'Specialized in neonatal care and child development.',
    services: ['Child Vaccination', 'Growth Monitoring', 'Nutrition']
  },
  {
    id: 4,
    name: 'Dr. Pradeep Meshram',
    speciality: 'Critical Care Specialist',
    experience: '12 years',
    rating: 4.8,
    hospital: 'Balaghat Critical Care Center',
    address: 'Near Bus Stand, Balaghat',
    phone: '9876543213',
    email: 'dr.pradeep@example.com',
    timings: '10 AM - 7 PM',
    fee: '₹800',
    onlineFee: '₹500',
    image: 'https://img.icons8.com/color/96/doctor-male.png',
    about: 'Expert in handling critical and emergency medical conditions.',
    services: ['ICU Care', 'Emergency Medicine', 'Critical Care']
  },
  {
    id: 5,
    name: 'Dr. Jyoti Borkar',
    speciality: 'General Physician',
    experience: '8 years',
    rating: 4.7,
    hospital: 'City Health Care',
    address: 'Gandhi Road, Balaghat',
    phone: '9876543214',
    email: 'dr.jyoti@example.com',
    timings: '9:30 AM - 6 PM',
    fee: '₹500',
    onlineFee: '₹300',
    image: 'https://img.icons8.com/color/96/doctor-female.png',
    about: 'Providing comprehensive primary healthcare services for all ages.',
    services: ['General Checkup', 'Fever', 'Diabetes', 'Hypertension']
  },
  {
    id: 6,
    name: 'Dr. Virat Thakkar',
    speciality: 'Orthopedic Surgeon',
    experience: '15 years',
    rating: 4.9,
    hospital: 'Balaghat Bone & Joint Care',
    address: 'Civil Lines, Balaghat',
    phone: '9876543215',
    email: 'dr.virat@example.com',
    timings: '11 AM - 8 PM',
    fee: '₹1000',
    onlineFee: '₹600',
    image: 'https://img.icons8.com/color/96/doctor-male.png',
    about: 'Specialized in joint replacement and arthroscopic surgeries.',
    services: ['Joint Replacement', 'Arthroscopy', 'Fracture Care']
  },
  {
    id: 7,
    name: 'Dr. Kedar Shashtri',
    speciality: 'Senior Pediatrician',
    experience: '25 years',
    rating: 4.9,
    hospital: 'Balaghat Children\'s Hospital',
    address: 'Medical College Road, Balaghat',
    phone: '9876543216',
    email: 'dr.kedar@example.com',
    timings: '10 AM - 5 PM',
    fee: '₹700',
    onlineFee: '₹400',
    image: 'https://img.icons8.com/color/96/doctor-male.png',
    about: 'Vast experience in pediatric care and child health management.',
    services: ['Child Health', 'Vaccination', 'Growth Disorders']
  },
  {
    id: 8,
    name: 'Dr. Nilay Shinde',
    speciality: 'Radiologist',
    experience: '10 years',
    rating: 4.8,
    hospital: 'Balaghat Diagnostic Center',
    address: 'Near Railway Station, Balaghat',
    phone: '9876543217',
    email: 'dr.nilay@example.com',
    timings: '9 AM - 5 PM',
    fee: '₹600',
    onlineFee: '₹400',
    image: 'https://img.icons8.com/color/96/doctor-male.png',
    about: 'Expert in diagnostic imaging and radiological procedures.',
    services: ['X-ray', 'MRI', 'CT Scan', 'Ultrasound']
  },
  {
    id: 9,
    name: 'Dr. Shefali Shinde',
    speciality: 'Gynecologist',
    experience: '12 years',
    rating: 4.8,
    hospital: 'Shinde Nursing Home',
    address: 'Gandhi Chowk, Balaghat',
    phone: '9876543218',
    email: 'dr.shefali@example.com',
    timings: '10 AM - 6 PM',
    fee: '₹700',
    onlineFee: '₹500',
    image: 'https://img.icons8.com/color/96/doctor-female.png',
    about: 'Specialized in high-risk pregnancy and laparoscopic gynecology.',
    services: ['Pregnancy Care', 'Laparoscopy', 'Infertility']
  },
  {
    id: 10,
    name: 'Dr. Rohit Marskole',
    speciality: 'Orthopedic Surgeon',
    experience: '2 years',
    rating: 4.5,
    hospital: 'Balaghat Ortho Care',
    address: 'Civil Lines, Balaghat',
    phone: '9876543219',
    email: 'dr.rohit@example.com',
    timings: '11 AM - 7 PM',
    fee: '₹500',
    onlineFee: '₹300',
    image: 'https://img.icons8.com/color/96/doctor-male.png',
    about: 'Young and dynamic orthopedic surgeon with expertise in sports injuries.',
    services: ['Fracture Treatment', 'Sports Injuries', 'Joint Pain']
  },
  {
    id: 10,
    name: 'Dr. Neha Gupta',
    speciality: 'General Physician',
    experience: '9 years',
    rating: 4.5,
    hospital: 'City Health Care',
    address: 'Main Road, Balaghat',
    phone: '9876543215',
    email: 'dr.neha@example.com',
    timings: '8 AM - 4 PM',
    fee: '₹300',
    onlineFee: '₹200',
    image: 'https://img.icons8.com/color/96/doctor-female.png',
    about: 'Expert in general medicine and preventive healthcare.',
    services: ['Health Checkup', 'Diabetes Care', 'Hypertension']
  }
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

const DoctorCard = React.memo(({ doctor }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const createBooking = useCreateBooking();
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSubmitBooking = async (form) => {
    const payload = {
      type: 'doctor_appointment',
      targetId: doctor.id,
      targetName: doctor.name,
      targetSpeciality: doctor.speciality,
      customerName: form.name,
      customerPhone: form.phone,
      customerEmail: form.email,
      note: form.note,
      preferredTime: form.preferredTime,
    };
    try {
      await createBooking.mutateAsync(payload);
      setSnackbarOpen(true);
    } catch (e) {
      console.error('Supabase insert failed:', e);
      alert('Booking failed');
    }
    const msg = `New Appointment Request\nDoctor: ${doctor.name} (${doctor.speciality})\nPatient: ${form.name}\nPhone: ${form.phone}${form.email ? `\nEmail: ${form.email}` : ''}${form.preferredTime ? `\nPreferred Time: ${form.preferredTime}` : ''}${form.note ? `\nNote: ${form.note}` : ''}`;
    const phoneE164 = `91${doctor.phone}`; // ensure numbers stored without country code
    openWhatsApp({ phoneE164, message: msg });
    setOpenDialog(false);
  };

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
                startIcon={<Phone fontSize="small" />}
                onClick={() => { if (document.activeElement && document.activeElement.blur) { document.activeElement.blur(); } setOpenDialog(true); }}
                sx={{ 
                  mt: 0.5,
                  py: 0.5,
                  fontSize: '0.75rem',
                  textTransform: 'none',
                  backgroundColor: '#25D366',
                  '&:hover': {
                    backgroundColor: '#128C7E',
                  },
                  '& .MuiButton-startIcon': {
                    marginRight: '4px',
                    '& > *': {
                      fontSize: '1rem'
                    }
                  }
                }}
              >
                Book Appointment
              </Button>
              <Dialog open={openDialog} onClose={() => setOpenDialog(false)} fullWidth maxWidth="sm">
                <DialogTitle>Book appointment with {doctor.name}</DialogTitle>
                <DialogContent>
                  <Suspense fallback={null}>
                    <BookingForm
                      defaultValues={{}}
                      submitting={createBooking.isPending}
                      onSubmit={handleSubmitBooking}
                    />
                  </Suspense>
                </DialogContent>
              </Dialog>
              <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={() => setSnackbarOpen(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert onClose={() => setSnackbarOpen(false)} severity="success" variant="filled" sx={{ width: '100%' }}>
                  Booking saved. Opening WhatsApp…
                </Alert>
              </Snackbar>
            </Box>
          </Box>
        </CardContent>
      </StyledCard>
    </Grid>
  );
});

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [specialtyFilter, setSpecialtyFilter] = useState('All');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [visibleCount, setVisibleCount] = useState(6);

  const specialties = ['All', 'Cardiologist', 'Pediatrician', 'Orthopedic', 'Gynecologist', 'Dermatologist'];

  const filteredDoctors = useMemo(() => {
    return doctors.filter(doctor => {
      const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           doctor.speciality.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSpecialty = specialtyFilter === 'All' || doctor.speciality === specialtyFilter;
      return matchesSearch && matchesSpecialty;
    });
  }, [searchTerm, specialtyFilter]);

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
      
      <Grid container spacing={2}>
        {filteredDoctors.length > 0 ? (
          filteredDoctors.slice(0, visibleCount).map((doctor, idx) => (
            <DoctorCard key={`${doctor.id}-${doctor.phone || idx}`} doctor={doctor} />
          ))
        ) : (
          <Box sx={{ width: '100%', textAlign: 'center', py: 4 }}>
            <Typography variant="h6" color="text.secondary">
              No doctors found matching your criteria
            </Typography>
          </Box>
        )}
      </Grid>
      {filteredDoctors.length > visibleCount && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button variant="outlined" size="small" onClick={() => setVisibleCount(c => c + (isMobile ? 6 : 9))} sx={{ textTransform: 'none' }}>
            Show more
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default Doctors;
