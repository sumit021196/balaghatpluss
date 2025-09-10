import React, { useState } from 'react';
import { 
  Container, Typography, Box, Grid, Paper, 
  Card, CardContent, CardMedia, Button, Divider, 
  List, ListItem, ListItemText, ListItemIcon, Avatar
} from '@mui/material';
import { 
  Gavel, Description, AccountBalance, 
  ContactPhone, Schedule, LocationOn, 
  ArrowForward, Scale, Balance, Receipt, 
  Work, FamilyRestroom, HomeWork
} from '@mui/icons-material';

const legalServices = [
  {
    id: 1,
    title: 'Property & Real Estate',
    description: 'Legal assistance for property registration, documentation, and disputes.',
    icon: <HomeWork color="primary" fontSize="large" />,
    services: [
      'Property Registration',
      'Lease Agreements',
      'Property Title Verification',
      'Land Dispute Resolution'
    ]
  },
  {
    id: 2,
    title: 'Family Law',
    description: 'Legal support for family matters including marriage, divorce, and custody.',
    icon: <FamilyRestroom color="primary" fontSize="large" />,
    services: [
      'Divorce & Separation',
      'Child Custody',
      'Alimony & Maintenance',
      'Domestic Violence Cases'
    ]
  },
  {
    id: 3,
    title: 'Criminal Law',
    description: 'Expert legal defense and consultation for criminal cases.',
    icon: <Gavel color="primary" fontSize="large" />,
    services: [
      'Bail & Anticipatory Bail',
      'Criminal Appeals',
      'Cheque Bounce Cases',
      'Cyber Crime Cases'
    ]
  },
  {
    id: 4,
    title: 'Documentation',
    description: 'Professional assistance for all legal documentation needs.',
    icon: <Description color="primary" fontSize="large" />,
    services: [
      'Affidavits',
      'Agreements & Contracts',
      'Will & Succession',
      'Power of Attorney'
    ]
  }
];

const popularLawyers = [
  {
    id: 1,
    name: 'Adv. Rajesh Sharma',
    specialization: 'Property & Family Law',
    experience: '15 years',
    rating: 4.8,
    cases: '500+',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 2,
    name: 'Adv. Priya Verma',
    specialization: 'Criminal Law',
    experience: '10 years',
    rating: 4.9,
    cases: '300+',
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: 3,
    name: 'Adv. Amit Patel',
    specialization: 'Documentation & Contracts',
    experience: '12 years',
    rating: 4.7,
    cases: '450+',
    image: 'https://randomuser.me/api/portraits/men/67.jpg'
  }
];

const Legal = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Hero Section */}
      <Box textAlign="center" mb={6}>
        <Gavel sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
        <Typography variant="h3" component="h1" gutterBottom>
          Legal Services in Balaghat
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Expert legal consultation and services for all your needs
        </Typography>
      </Box>

      {/* Services Grid */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4, mb: 2 }}>
        Our Legal Services
      </Typography>
      <Grid container spacing={3} mb={6}>
        {legalServices.map((service) => (
          <Grid item xs={12} sm={6} md={3} key={service.id}>
            <Card 
              elevation={3} 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 6
                }
              }}
            >
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Box sx={{ mb: 2 }}>{service.icon}</Box>
                <Typography variant="h6" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {service.description}
                </Typography>
                <List dense>
                  {service.services.map((item, index) => (
                    <ListItem key={index} disableGutters>
                      <ListItemIcon sx={{ minWidth: 30 }}>
                        <ArrowForward color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
                <Button 
                  variant="outlined" 
                  fullWidth 
                  sx={{ mt: 'auto' }}
                  onClick={() => setSelectedService(service)}
                >
                  Consult Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Popular Lawyers */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4, mb: 2 }}>
        Top Lawyers in Balaghat
      </Typography>
      <Grid container spacing={3} mb={6}>
        {popularLawyers.map((lawyer) => (
          <Grid item xs={12} sm={6} md={4} key={lawyer.id}>
            <Card elevation={3}>
              <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                  <Avatar 
                    src={lawyer.image} 
                    alt={lawyer.name}
                    sx={{ width: 80, height: 80, mr: 2 }}
                  />
                  <Box>
                    <Typography variant="h6">{lawyer.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {lawyer.specialization}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {lawyer.experience} experience | {lawyer.cases} cases
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex" justifyContent="space-between" mt={2}>
                  <Button variant="outlined" size="small" startIcon={<ContactPhone />}>
                    Contact
                  </Button>
                  <Button variant="contained" size="small" endIcon={<Schedule />}>
                    Book Appointment
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Legal Resources */}
      <Paper elevation={3} sx={{ p: 4, mb: 6, bgcolor: 'primary.light', color: 'white' }}>
        <Typography variant="h5" gutterBottom>
          Legal Resources & Information
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <List>
              <ListItem>
                <ListItemIcon sx={{ color: 'white' }}><AccountBalance /></ListItemIcon>
                <ListItemText 
                  primary="Court Information" 
                  secondary="Find details about local courts in Balaghat" 
                />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ color: 'white' }}><Scale /></ListItemIcon>
                <ListItemText 
                  primary="Legal Aid" 
                  secondary="Free legal aid services information" 
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <List>
              <ListItem>
                <ListItemIcon sx={{ color: 'white' }}><Receipt /></ListItemIcon>
                <ListItemText 
                  primary="Document Templates" 
                  secondary="Download legal document templates" 
                />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ color: 'white' }}><Work /></ListItemIcon>
                <ListItemText 
                  primary="Legal Jobs" 
                  secondary="Find legal job opportunities in Balaghat" 
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Paper>

      {/* Contact Section */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h5" gutterBottom>
          Need Legal Help?
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Contact us for a free initial consultation with our legal experts.
        </Typography>
        <Button 
          variant="contained" 
          size="large" 
          startIcon={<ContactPhone />}
          sx={{ mt: 2 }}
        >
          Call Now: +91 XXXXXXXXXX
        </Button>
      </Box>
    </Container>
  );
};

export default Legal;
