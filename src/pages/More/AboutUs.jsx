import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const AboutUs = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4, pb: 12 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          About Us
        </Typography>
        
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Our Mission</Typography>
          <Typography paragraph>
            At Balaghat+, we are committed to connecting the people of Balaghat with essential services and local businesses, 
            making everyday life more convenient and accessible for everyone in our community.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Who We Are</Typography>
          <Typography paragraph>
            We are a team of passionate individuals dedicated to digitalizing and simplifying access to local services 
            in Balaghat. Our platform bridges the gap between service providers and residents, creating a more 
            connected and efficient community.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Our Vision</Typography>
          <Typography>
            To become the go-to platform for all local service needs in Balaghat, fostering community growth and 
            supporting local businesses through technology and innovation.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default AboutUs;
