import React, { useState } from 'react';
import { 
  Container, Typography, Grid, Card, CardContent, 
  Button, Box, Chip, TextField, InputAdornment, Tabs, Tab
} from '@mui/material';
import { 
  Search as SearchIcon,
  Work as WorkIcon,
  Security as SecurityIcon,
  CleaningServices as CleaningIcon,
  DriveEta as DriverIcon,
  Build as PainterIcon,
  Star as StarIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon
} from '@mui/icons-material';

// Sample data
const serviceCategories = [
  { id: 'daily', label: 'Daily Workers', icon: <WorkIcon /> },
  { id: 'security', label: 'Security', icon: <SecurityIcon /> },
  { id: 'maid', label: 'Maid', icon: <CleaningIcon /> },
  { id: 'driver', label: 'Drivers', icon: <DriverIcon /> },
  { id: 'painter', label: 'Painters', icon: <PainterIcon /> },
];

const workersData = {
  daily: [
    {
      id: 1,
      name: 'Ramesh Kumar',
      service: 'Daily Labor',
      rating: 4.5,
      location: 'Balaghat City',
      skills: ['Loading/Unloading', 'Construction', 'Gardening'],
      rate: '₹600 - ₹800/day',
      phone: '98765XXXXX'
    },
  ],
  security: [
    {
      id: 1,
      name: 'Security Solutions',
      service: 'Security Guard Service',
      rating: 4.7,
      location: 'Balaghat',
      rate: '₹15,000 - ₹25,000/month',
      phone: '98765XXXXX'
    },
  ],
  maid: [
    {
      id: 1,
      name: 'Shanti Bai',
      service: 'Full-time Maid',
      rating: 4.8,
      location: 'Bus Stand',
      skills: ['Cooking', 'Cleaning', 'Utensils'],
      rate: '₹8,000 - ₹12,000/month',
      phone: '98765XXXXX'
    },
  ],
  driver: [
    {
      id: 1,
      name: 'Raju Verma',
      service: 'Personal Driver',
      rating: 4.6,
      location: 'Balaghat',
      rate: '₹15,000 - ₹20,000/month',
      phone: '98765XXXXX'
    },
  ],
  painter: [
    {
      id: 1,
      name: 'Shyam Painters',
      service: 'Professional Painting',
      rating: 4.8,
      location: 'Balaghat',
      rate: '₹12 - ₹25/sq.ft',
      phone: '98765XXXXX'
    },
  ]
};

const WorkerCard = ({ worker }) => {
  const [showContact, setShowContact] = useState(false);

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 2 }}>
        <CardContent sx={{ p: 3, flexGrow: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Box sx={{ 
              width: 56, 
              height: 56, 
              bgcolor: '#1976d2', 
              color: 'white',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: 2,
              fontWeight: 'bold',
              fontSize: '1.2rem'
            }}>
              {worker.name.split(' ').map(n => n[0]).join('')}
            </Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>{worker.name}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <StarIcon color="warning" fontSize="small" />
                <Typography variant="body2" sx={{ ml: 0.5 }}>{worker.rating}</Typography>
              </Box>
            </Box>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <LocationIcon color="action" fontSize="small" />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
              {worker.location}
            </Typography>
          </Box>
          
          <Typography variant="subtitle2" color="primary" sx={{ fontWeight: 600, mb: 1 }}>
            {worker.service}
          </Typography>
          
          {worker.skills && (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
              {worker.skills.map((skill, idx) => (
                <Chip key={idx} label={skill} size="small" variant="outlined" color="primary" />
              ))}
            </Box>
          )}
          
          <Box sx={{ 
            backgroundColor: '#f5f5f5', 
            p: 1.5, 
            borderRadius: 2,
            mb: 2,
            textAlign: 'center'
          }}>
            <Typography variant="body2" color="text.secondary">Rate:</Typography>
            <Typography variant="h6" color="primary" sx={{ fontWeight: 600 }}>
              {worker.rate}
            </Typography>
          </Box>
          
          {!showContact ? (
            <Button 
              variant="contained" 
              fullWidth 
              startIcon={<PhoneIcon />}
              onClick={() => setShowContact(true)}
            >
              Show Contact
            </Button>
          ) : (
            <Box sx={{ 
              p: 2, 
              bgcolor: '#e3f2fd', 
              borderRadius: 2,
              textAlign: 'center'
            }}>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                {worker.phone}
              </Typography>
              <Button 
                variant="outlined" 
                size="small" 
                color="primary"
                onClick={() => window.location.href = `tel:${worker.phone}`}
                startIcon={<PhoneIcon />}
              >
                Call Now
              </Button>
            </Box>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};

const HireFire = () => {
  const [activeTab, setActiveTab] = useState('daily');
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredWorkers = workersData[activeTab].filter(worker =>
    worker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    worker.service.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 600, color: '#1976d2' }}>
          Hire & Fire Services
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
          Find reliable workers and service providers in Balaghat
        </Typography>
        
        <TextField
          fullWidth
          variant="outlined"
          placeholder={`Search ${serviceCategories.find(cat => cat.id === activeTab)?.label || 'workers'}...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
            sx: { 
              borderRadius: 4, 
              maxWidth: 600, 
              mx: 'auto',
              mb: 3
            }
          }}
        />
        
        <Tabs
          value={activeTab}
          onChange={(e, newValue) => setActiveTab(newValue)}
          variant="scrollable"
          scrollButtons="auto"
          sx={{ mb: 3 }}
        >
          {serviceCategories.map((category) => (
            <Tab 
              key={category.id} 
              icon={category.icon} 
              label={category.label} 
              value={category.id}
              iconPosition="start"
              sx={{ minHeight: 64 }}
            />
          ))}
        </Tabs>
      </Box>
      
      <Grid container spacing={3}>
        {filteredWorkers.length > 0 ? (
          filteredWorkers.map((worker) => (
            <WorkerCard key={`${worker.id}-${activeTab}`} worker={worker} />
          ))
        ) : (
          <Box sx={{ width: '100%', textAlign: 'center', p: 4 }}>
            <Typography variant="h6" color="text.secondary">
              No workers found matching your search
            </Typography>
          </Box>
        )}
      </Grid>
    </Container>
  );
};

export default HireFire;
