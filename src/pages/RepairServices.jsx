import React, { useState } from 'react';
import { 
  Container, Typography, Grid, Card, CardContent, 
  Button, Box, Chip, TextField, InputAdornment, Tabs, Tab,
  Dialog, DialogTitle, DialogContent, DialogActions, IconButton,
  FormControl, InputLabel, Select, MenuItem, Snackbar, Alert
} from '@mui/material';
import { 
  Search as SearchIcon,
  Build as BuildIcon,
  ElectricBolt as ElectricIcon,
  Plumbing as PlumberIcon,
  AcUnit as ACIcon,
  PhoneAndroid as MobileIcon,
  TwoWheeler as BikeIcon,
  Star as StarIcon,
  Phone as PhoneIcon,
  Close as CloseIcon,
  Business as BusinessIcon,
  Person as PersonIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon
} from '@mui/icons-material';
import BookViaWhatsApp from '../components/BookViaWhatsApp';

// Sample service data
const serviceCategories = [
  { id: 'electrician', label: 'Electrician', icon: <ElectricIcon /> },
  { id: 'plumber', label: 'Plumber', icon: <PlumberIcon /> },
  { id: 'ac', label: 'AC Repair', icon: <ACIcon /> },
  { id: 'mobile', label: 'Mobile Repair', icon: <MobileIcon /> },
  { id: 'bike', label: 'Bike Repair', icon: <BikeIcon /> },
];

// Sample service providers
const serviceProviders = [
  {
    id: 1,
    name: 'A1 Electrician',
    service: 'electrician',
    rating: 4.5,
    reviews: 128,
    price: '₹300 - ₹500',
    experience: '5 years',
    available: true,
    phone: '9876543210',
    location: 'Balaghat City'
  },
  // Add more sample providers...
];

const RepairServices = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openBooking, setOpenBooking] = useState(false);
  const [openVendorForm, setOpenVendorForm] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [vendorForm, setVendorForm] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    service: '',
    experience: '',
    location: ''
  });

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleBookNow = (service) => {
    setSelectedService(service);
    setOpenBooking(true);
  };

  const handleVendorSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Vendor form submitted:', vendorForm);
    setOpenVendorForm(false);
    setSnackbar({
      open: true,
      message: 'Thank you for registering! We will contact you soon.',
      severity: 'success'
    });
    // Reset form
    setVendorForm({
      name: '',
      businessName: '',
      email: '',
      phone: '',
      service: '',
      experience: '',
      location: ''
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const filteredServices = serviceProviders.filter(provider => {
    const matchesSearch = provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         provider.service.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeTab === 'all' || provider.service === activeTab;
    return matchesSearch && matchesCategory;
  });

  return (
    <Container maxWidth="lg" sx={{ py: 4, minHeight: '100vh' }}>
      <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 4 }}>
        Professional Repair Services
      </Typography>
      
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
        <TextField
          placeholder="Search services..."
          variant="outlined"
          size="small"
          value={searchQuery}
          onChange={handleSearch}
          sx={{ 
            width: '100%',
            maxWidth: '600px',
            '& .MuiOutlinedInput-root': {
              borderRadius: '50px',
              backgroundColor: 'background.paper',
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4, overflowX: 'auto' }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
        >
          <Tab label="All Services" value="all" />
          {serviceCategories.map((category) => (
            <Tab 
              key={category.id} 
              label={category.label} 
              value={category.id}
              icon={category.icon}
              iconPosition="start"
            />
          ))}
        </Tabs>
      </Box>

      <Grid container spacing={3}>
        {filteredServices.length > 0 ? (
          filteredServices.map((provider) => (
            <Grid item xs={12} sm={6} md={4} key={provider.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent>
                  <Box display="flex" alignItems="center" mb={1}>
                    <BuildIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h6" component="div">
                      {provider.name}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" mb={1}>
                    <Box display="flex" alignItems="center" mr={2}>
                      <StarIcon color="warning" fontSize="small" />
                      <Typography variant="body2" color="text.secondary" ml={0.5}>
                        {provider.rating} ({provider.reviews})
                      </Typography>
                    </Box>
                    <Chip 
                      label={provider.available ? 'Available Now' : 'Not Available'} 
                      size="small" 
                      color={provider.available ? 'success' : 'default'}
                      variant="outlined"
                    />
                  </Box>
                  <Box display="flex" alignItems="center" mb={1}>
                    <LocationIcon color="action" fontSize="small" sx={{ mr: 1 }} />
                    <Typography variant="body2" color="text.secondary">
                      {provider.location}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" mb={2}>
                    <Typography variant="body2" color="text.primary">
                      <strong>Price:</strong> {provider.price} {provider.priceType && `per ${provider.priceType}`}
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Button 
                      variant="outlined" 
                      startIcon={<PhoneIcon />}
                      href={`tel:${provider.phone}`}
                      size="small"
                    >
                      Call Now
                    </Button>
                    <BookViaWhatsApp
                      buttonLabel="Book Now"
                      buttonProps={{ color: 'primary', size: 'small' }}
                      type="repair_service"
                      targetId={provider.id}
                      targetName={provider.name}
                      targetSpeciality={provider.service}
                      recipientPhone={provider.phone}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Box textAlign="center" py={4}>
              <Typography variant="h6" color="textSecondary">
                No service providers found matching your criteria.
              </Typography>
            </Box>
          </Grid>
        )}
      </Grid>

      <Box mt={6} textAlign="center">
        <Button 
          variant="outlined" 
          color="primary" 
          startIcon={<BusinessIcon />}
          onClick={() => setOpenVendorForm(true)}
          sx={{ mb: 4 }}
        >
          List Your Repair Service
        </Button>
      </Box>

      {/* Booking Dialog */}
      <Dialog open={openBooking} onClose={() => setOpenBooking(false)} maxWidth="sm" fullWidth>
        <DialogTitle>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <span>Book Service</span>
            <IconButton onClick={() => setOpenBooking(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          {selectedService && (
            <Box>
              <Typography variant="h6" gutterBottom>{selectedService.name}</Typography>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                {selectedService.service} • {selectedService.experience} experience
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Price Range:</strong> {selectedService.price}
              </Typography>
              <Box mt={2}>
                <TextField
                  fullWidth
                  label="Your Name"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Phone Number"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Address"
                  margin="normal"
                  multiline
                  rows={3}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Preferred Date & Time"
                  type="datetime-local"
                  margin="normal"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Box>
            </Box>
          )}
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={() => setOpenBooking(false)}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={() => {
            setSnackbar({
              open: true,
              message: 'Booking request sent successfully!',
              severity: 'success'
            });
            setOpenBooking(false);
          }}>
            Confirm Booking
          </Button>
        </DialogActions>
      </Dialog>

      {/* Vendor Registration Dialog */}
      <Dialog open={openVendorForm} onClose={() => setOpenVendorForm(false)} maxWidth="sm" fullWidth>
        <DialogTitle>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <span>Register Your Service</span>
            <IconButton onClick={() => setOpenVendorForm(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <form onSubmit={handleVendorSubmit}>
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Your Name"
                  margin="normal"
                  required
                  value={vendorForm.name}
                  onChange={(e) => setVendorForm({...vendorForm, name: e.target.value})}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Business Name"
                  margin="normal"
                  required
                  value={vendorForm.businessName}
                  onChange={(e) => setVendorForm({...vendorForm, businessName: e.target.value})}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <BusinessIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  margin="normal"
                  required
                  value={vendorForm.email}
                  onChange={(e) => setVendorForm({...vendorForm, email: e.target.value})}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  type="tel"
                  margin="normal"
                  required
                  value={vendorForm.phone}
                  onChange={(e) => setVendorForm({...vendorForm, phone: e.target.value})}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth margin="normal" required>
                  <InputLabel>Service Type</InputLabel>
                  <Select
                    value={vendorForm.service}
                    label="Service Type"
                    onChange={(e) => setVendorForm({...vendorForm, service: e.target.value})}
                    startAdornment={
                      <InputAdornment position="start">
                        <BuildIcon />
                      </InputAdornment>
                    }
                  >
                    {serviceCategories.map((category) => (
                      <MenuItem key={category.id} value={category.id}>
                        {category.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Years of Experience"
                  type="number"
                  margin="normal"
                  required
                  value={vendorForm.experience}
                  onChange={(e) => setVendorForm({...vendorForm, experience: e.target.value})}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">years</InputAdornment>,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Service Areas (comma separated)"
                  margin="normal"
                  required
                  value={vendorForm.location}
                  onChange={(e) => setVendorForm({...vendorForm, location: e.target.value})}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions sx={{ p: 2 }}>
            <Button onClick={() => setOpenVendorForm(false)}>Cancel</Button>
            <Button type="submit" variant="contained" color="primary">
              Submit Application
            </Button>
          </DialogActions>
        </form>
      </Dialog>

      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default RepairServices;
