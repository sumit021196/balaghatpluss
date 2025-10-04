import React, { useState } from 'react';
import { 
  Container, Typography, Box, Grid, Paper, TextField, Button, 
  Card, CardContent, CardMedia, Rating, Divider, IconButton,
  Dialog, DialogTitle, DialogContent, DialogActions, useTheme
} from '@mui/material';
import { 
  LocationOn, DirectionsCar, Event, AccessTime, 
  ArrowBack, CheckCircle, Info, LocalTaxi, TwoWheeler, 
  AirlineSeatReclineNormal, SupportAgent
} from '@mui/icons-material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { format, parse } from 'date-fns';

// Sample car data
const availableCars = [
  {
    id: 1,
    name: 'Maruti Swift Dzire',
    type: 'Sedan',
    image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/110233/swift-dzire-exterior-right-front-three-quarter-3.jpeg',
    rating: 4.5,
    pricePerKm: 15,
    minFare: 100,
    seats: 4,
    ac: true,
    available: 5
  },
  {
    id: 2,
    name: 'Hyundai Creta',
    type: 'SUV',
    image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/404929/creta-exterior-right-front-three-quarter-75.jpeg',
    rating: 4.7,
    pricePerKm: 20,
    minFare: 150,
    seats: 5,
    ac: true,
    available: 3
  },
  {
    id: 3,
    name: 'Bajaj RE Auto',
    type: 'Auto Rickshaw',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/12/GS/QR/XP/13505300/bajaj-re-auto-rickshaw.jpg',
    rating: 4.2,
    pricePerKm: 12,
    minFare: 50,
    seats: 3,
    ac: false,
    available: 8
  },
  {
    id: 4,
    name: 'Honda Activa',
    type: 'Scooter',
    image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/40401/activa-6g-right-front-three-quarter-3.jpeg',
    rating: 4.6,
    pricePerKm: 8,
    minFare: 30,
    seats: 2,
    ac: false,
    available: 12
  }
];

const popularDestinations = [
  'Balaghat Bus Stand', 'Balaghat Railway Station', 'Lanji', 'Waraseoni',
  'Baihar', 'Katangi', 'Kirnapur', 'Lalbarra', 'Khairlanji', 'Paraswada'
];

const CarHire = () => {
  const theme = useTheme();
  const FIXED_DISTANCE_KM = 265; // approx Balaghat ↔ Nagpur
  const fixedTrips = [
    { id: 'bal-nag', from: 'Balaghat', to: 'Nagpur', departLabel: 'Departs 8:00 AM', departTime: '08:00 AM' },
    { id: 'nag-bal', from: 'Nagpur', to: 'Balaghat', departLabel: 'Departs 2:00 PM', departTime: '02:00 PM' },
  ];
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [pickupDate, setPickupDate] = useState(new Date());
  const [selectedCar, setSelectedCar] = useState(null);
  const [bookingStep, setBookingStep] = useState(1);
  const [distance, setDistance] = useState(0);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);

  const calculateFare = () => {
    const dist = Math.floor(Math.random() * 30) + 5;
    setDistance(dist);
    return dist;
  };

  const handleSearch = () => {
    if (!pickup || !drop) return;
    calculateFare();
    setBookingStep(2);
  };

  const handleBookNow = (car) => {
    setSelectedCar(car);
    const dist = calculateFare();
    const fare = Math.max(car.minFare, Math.ceil(dist * car.pricePerKm));
    
    setBookingDetails({
      id: `BAL${Math.floor(100000 + Math.random() * 900000)}`,
      car,
      pickup,
      drop,
      date: format(pickupDate, 'PPP'),
      time: format(new Date(), 'hh:mm a'),
      distance: dist,
      totalFare: fare,
      driver: {
        name: `Driver ${Math.floor(10 + Math.random() * 90)}`,
        phone: `+91 ${Math.floor(9000000000 + Math.random() * 999999999).toString().substring(0, 10)}`,
        rating: (4 + Math.random()).toFixed(1),
        image: `https://randomuser.me/api/portraits/men/${Math.floor(1 + Math.random() * 99)}.jpg`
      },
      vehicleNumber: `MP-${String.fromCharCode(65 + Math.floor(Math.random() * 26))}${String.fromCharCode(65 + Math.floor(Math.random() * 26))} ${Math.floor(1000 + Math.random() * 9000)}`
    });
    
    setBookingStep(3);
    setBookingSuccess(true);
  };

  const handleBookFixedTrip = (trip) => {
    const car = availableCars.find(c => c.name.toLowerCase().includes('swift')) || availableCars[0];
    const fare = Math.max(car.minFare, Math.ceil(FIXED_DISTANCE_KM * car.pricePerKm));
    setPickup(trip.from);
    setDrop(trip.to);
    setSelectedCar(car);
    setDistance(FIXED_DISTANCE_KM);
    setBookingDetails({
      id: `BAL${Math.floor(100000 + Math.random() * 900000)}`,
      car,
      pickup: trip.from,
      drop: trip.to,
      date: format(pickupDate, 'PPP'),
      time: trip.departTime,
      distance: FIXED_DISTANCE_KM,
      totalFare: fare,
      driver: {
        name: `Driver ${Math.floor(10 + Math.random() * 90)}`,
        phone: `+91 ${Math.floor(9000000000 + Math.random() * 999999999).toString().substring(0, 10)}`,
        rating: (4 + Math.random()).toFixed(1),
        image: `https://randomuser.me/api/portraits/men/${Math.floor(1 + Math.random() * 99)}.jpg`
      },
      vehicleNumber: `MP-${String.fromCharCode(65 + Math.floor(Math.random() * 26))}${String.fromCharCode(65 + Math.floor(Math.random() * 26))} ${Math.floor(1000 + Math.random() * 9000)}`
    });
    setBookingStep(3);
    setBookingSuccess(true);
  };

  const resetForm = () => {
    setPickup('');
    setDrop('');
    setSelectedCar(null);
    setBookingStep(1);
    setBookingSuccess(false);
  };

  const renderSearchForm = () => (
    <Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Book a Ride in Balaghat
      </Typography>
      
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <TextField
            fullWidth
            label="Pickup Location"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            InputProps={{
              startAdornment: <LocationOn color="primary" sx={{ mr: 1 }} />
            }}
            placeholder="Enter pickup location"
            variant="outlined"
            size="small"
          />
        </Grid>
        
        <Grid item xs={12} md={5}>
          <TextField
            fullWidth
            label="Drop Location"
            value={drop}
            onChange={(e) => setDrop(e.target.value)}
            InputProps={{
              startAdornment: <LocationOn color="error" sx={{ mr: 1 }} />
            }}
            placeholder="Where do you want to go?"
            variant="outlined"
            size="small"
          />
        </Grid>
        
        <Grid item xs={6} md={1}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Date"
              value={pickupDate}
              onChange={(newValue) => setPickupDate(newValue)}
              minDate={new Date()}
              renderInput={(params) => (
                <TextField 
                  {...params} 
                  size="small" 
                  fullWidth 
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: <Event color="action" sx={{ mr: 1 }} />
                  }}
                />
              )}
            />
          </LocalizationProvider>
        </Grid>
        
        
        <Grid item xs={12}>
          <Button 
            variant="contained" 
            color="primary" 
            fullWidth 
            size="large"
            onClick={handleSearch}
            disabled={!pickup || !drop}
            startIcon={<DirectionsCar />}
          >
            Search Rides
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );

  const renderFixedSchedule = () => (
    <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
        Fixed Daily Route: Balaghat ↔ Nagpur
      </Typography>
      <Grid container spacing={2}>
        {fixedTrips.map((t) => (
          <Grid item xs={12} md={6} key={t.id}>
            <Card variant="outlined" sx={{ p: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{t.from} → {t.to}</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
                    <AccessTime fontSize="small" color="action" sx={{ mr: 0.5 }} />
                    <Typography variant="body2" color="text.secondary">{t.departLabel}</Typography>
                  </Box>
                  <Typography variant="caption" color="text.secondary">Vehicle: Maruti Swift Dzire • AC Sedan</Typography>
                </Box>
                <Box sx={{ textAlign: 'right' }}>
                  <Typography variant="subtitle2" color="primary">Approx. {FIXED_DISTANCE_KM} km</Typography>
                  <Button
                    variant="contained"
                    size="small"
                    startIcon={<DirectionsCar />}
                    sx={{ mt: 1 }}
                    onClick={() => handleBookFixedTrip(t)}
                  >
                    Book
                  </Button>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );

  const renderCarSelection = () => {
    console.log('Rendering car selection, availableCars:', availableCars);
    
    if (!availableCars || availableCars.length === 0) {
      return (
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            No cars available for the selected route
          </Typography>
          <Button 
            variant="contained" 
            color="primary"
            onClick={() => setBookingStep(1)}
            startIcon={<ArrowBack />}
          >
            Back to Search
          </Button>
        </Box>
      );
    }

    return (
      <Box>
        <Box sx={{ mb: 3 }}>
          <Button 
            startIcon={<ArrowBack />}
            onClick={() => setBookingStep(1)}
            sx={{ mb: 2 }}
          >
            Back to Search
          </Button>
          <Typography variant="h5" gutterBottom>
            Available Rides
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            {pickup} to {drop} • {format(pickupDate, 'PPP')}
          </Typography>
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            {availableCars.map((car) => (
              <Card 
                key={car.id}
                sx={{
                  mb: 2,
                  p: 2,
                  border: selectedCar?.id === car.id 
                    ? `2px solid ${theme.palette.primary.main}` 
                    : '1px solid #e0e0e0',
                  '&:hover': { boxShadow: 3 },
                }}
              >
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  <Box>
                    <Typography variant="h6">{car.name}</Typography>
                    <Typography variant="body2" color="text.secondary">{car.type}</Typography>
                    <Box display="flex" alignItems="center" mt={1}>
                      <Rating value={car.rating} size="small" readOnly />
                      <Typography variant="body2" sx={{ ml: 1 }}>
                        {car.rating} ({car.seats} seats)
                      </Typography>
                    </Box>
                  </Box>
                  <Box textAlign="right">
                    <Typography variant="h6" color="primary">
                      ₹{car.pricePerKm}/km
                    </Typography>
                    <Button 
                      variant="contained" 
                      color="primary" 
                      size="small"
                      onClick={() => handleBookNow(car)}
                      startIcon={<DirectionsCar />}
                      sx={{ mt: 1 }}
                    >
                      Book Now
                    </Button>
                  </Box>
                </Box>
              </Card>
            ))}
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, borderRadius: 2, position: 'sticky', top: 20 }}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Trip Details
              </Typography>
              <Divider sx={{ my: 2 }} />
              
              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2" color="text.secondary">From:</Typography>
                  <Typography variant="body2" fontWeight="medium">{pickup}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2" color="text.secondary">To:</Typography>
                  <Typography variant="body2" fontWeight="medium">{drop}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2" color="text.secondary">Date & Time:</Typography>
                  <Typography variant="body2" fontWeight="medium">
                    {format(pickupDate, 'PPP')} at {format(new Date(), 'hh:mm a')}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2" color="text.secondary">Distance:</Typography>
                  <Typography variant="body2" fontWeight="medium">{distance} km</Typography>
                </Box>
              </Box>
              
              {selectedCar && (
                <Box sx={{ mt: 3, p: 2, bgcolor: 'action.hover', borderRadius: 1 }}>
                  <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                    {selectedCar.name}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2" color="text.secondary">Fare:</Typography>
                  <Typography variant="body2" fontWeight="medium">
                    ₹{Math.max(selectedCar.minFare, Math.ceil(distance * selectedCar.pricePerKm))}
                  </Typography>
                </Box>
                <Divider sx={{ my: 1 }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body1" fontWeight="bold">Total Amount:</Typography>
                  <Typography variant="body1" fontWeight="bold" color="primary">
                    ₹{Math.max(selectedCar.minFare, Math.ceil(distance * selectedCar.pricePerKm))}
                  </Typography>
                </Box>
              </Box>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
    );
  };

  const renderConfirmation = () => (
    <Box textAlign="center" sx={{ py: 6 }}>
      <CheckCircle color="success" sx={{ fontSize: 80, mb: 2 }} />
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
        Booking Confirmed!
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Your ride has been successfully booked.
      </Typography>
      
      <Paper elevation={3} sx={{ maxWidth: 500, mx: 'auto', p: 3, mt: 4, textAlign: 'left', borderRadius: 2 }}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Booking Details
        </Typography>
        <Divider sx={{ mb: 2 }} />
        
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle2" color="text.secondary">Booking ID</Typography>
          <Typography variant="body1" fontWeight="medium">{bookingDetails?.id}</Typography>
          
          <Box sx={{ display: 'flex', mt: 2, mb: 1 }}>
            <LocationOn color="primary" fontSize="small" sx={{ mt: 0.5 }} />
            <Box sx={{ ml: 1 }}>
              <Typography variant="body2" fontWeight="medium">Pickup</Typography>
              <Typography variant="body2" color="text.secondary">{bookingDetails?.pickup}</Typography>
            </Box>
          </Box>
          
          <Box sx={{ display: 'flex', mb: 2 }}>
            <LocationOn color="error" fontSize="small" sx={{ mt: 0.5 }} />
            <Box sx={{ ml: 1 }}>
              <Typography variant="body2" fontWeight="medium">Drop</Typography>
              <Typography variant="body2" color="text.secondary">{bookingDetails?.drop}</Typography>
            </Box>
          </Box>
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2" color="text.secondary">Date & Time</Typography>
            <Typography variant="body2" fontWeight="medium">
              {bookingDetails?.date}, {bookingDetails?.time}
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2" color="text.secondary">Vehicle</Typography>
            <Typography variant="body2" fontWeight="medium">
              {bookingDetails?.car?.name} ({bookingDetails?.vehicleNumber})
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant="body2" color="text.secondary">Total Amount</Typography>
            <Typography variant="body1" fontWeight="bold" color="primary">
              ₹{bookingDetails?.totalFare}
            </Typography>
          </Box>
          
          <Divider sx={{ my: 2 }} />
          
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
            <Box sx={{ width: 50, height: 50, borderRadius: '50%', overflow: 'hidden', mr: 2 }}>
              <img 
                src={bookingDetails?.driver?.image} 
                alt="Driver" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </Box>
            <Box>
              <Typography variant="subtitle2" fontWeight="medium">
                Your Driver: {bookingDetails?.driver?.name}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Rating value={parseFloat(bookingDetails?.driver?.rating || 0)} size="small" readOnly precision={0.5} />
                <Typography variant="caption" color="text.secondary" sx={{ ml: 0.5 }}>
                  {bookingDetails?.driver?.rating}
                </Typography>
              </Box>
              <Typography variant="body2" color="primary" sx={{ mt: 0.5 }}>
                {bookingDetails?.driver?.phone}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
      
      <Box sx={{ mt: 4 }}>
        <Button 
          variant="contained" 
          color="primary" 
          size="large" 
          onClick={resetForm}
          sx={{ minWidth: 200 }}
        >
          Book Another Ride
        </Button>
      </Box>
      
      <Box sx={{ mt: 4, maxWidth: 500, mx: 'auto', p: 2, bgcolor: 'info.light', borderRadius: 1, textAlign: 'left' }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
          <Info color="info" sx={{ mr: 1, mt: 0.5 }} />
          <Box>
            <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
              Important Information
            </Typography>
            <Typography variant="body2" color="text.secondary">
              • Your driver will arrive at the pickup location 5-10 minutes before the scheduled time.<br />
              • Please keep your phone handy for driver coordination.<br />
              • Face mask is mandatory during the ride.<br />
              • For any queries, call our 24x7 customer support at 1800-123-4567.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );

  // Debug logs
  console.log('Current booking step:', bookingStep);
  console.log('Available cars:', availableCars);
  
  return (
    <Container maxWidth="lg" sx={{ py: 4, pb: 12 }}>
      {bookingStep === 1 && (
        <Box>
          {renderFixedSchedule()}
          {renderSearchForm()}
        </Box>
      )}
      {bookingStep === 2 && renderCarSelection()}
      {bookingStep === 3 && renderConfirmation()}
    </Container>
  );
};

export default CarHire;
