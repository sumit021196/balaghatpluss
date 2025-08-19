import React from 'react';
import { Container, Typography, Box, Paper, Grid, TextField, Button, Divider } from '@mui/material';
import { Email, Phone, LocationOn, Send } from '@mui/icons-material';

const ContactUs = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4, pb: 12 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
          Contact Us
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>Get in Touch</Typography>
            
            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationOn color="primary" sx={{ mr: 2 }} />
                <Box>
                  <Typography variant="subtitle2" color="textSecondary">Address</Typography>
                  <Typography>Balaghat, Madhya Pradesh, India</Typography>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Phone color="primary" sx={{ mr: 2 }} />
                <Box>
                  <Typography variant="subtitle2" color="textSecondary">Phone</Typography>
                  <Typography>+91 XXXXXXXXXX</Typography>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Email color="primary" sx={{ mr: 2 }} />
                <Box>
                  <Typography variant="subtitle2" color="textSecondary">Email</Typography>
                  <Typography>admin@balaghatplus.com</Typography>
                </Box>
              </Box>
            </Box>
            
            <Divider sx={{ my: 3 }} />
            
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 'medium', mb: 2 }}>Business Hours</Typography>
              <Typography>Monday - Friday: 9:00 AM - 6:00 PM</Typography>
              <Typography>Saturday: 10:00 AM - 4:00 PM</Typography>
              <Typography>Sunday: Closed</Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>Send us a Message</Typography>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your Email"
                    variant="outlined"
                    size="small"
                    type="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Subject"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Your Message"
                    variant="outlined"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    startIcon={<Send />}
                    sx={{ mt: 1 }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ContactUs;
