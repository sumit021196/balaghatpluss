import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Paper, 
  Grid, 
  TextField, 
  Button, 
  Divider,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { 
  Email as EmailIcon, 
  Phone as PhoneIcon, 
  LocationOn as LocationIcon, 
  Send as SendIcon,
  AccessTime as TimeIcon,
  Message as MessageIcon
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

// Styled Components
const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[6],
  },
}));

const ContactInfoItem = ({ icon, title, children }) => (
  <Box sx={{ display: 'flex', mb: 3 }}>
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 48,
      height: 48,
      borderRadius: '50%',
      bgcolor: 'primary.light',
      color: 'primary.contrastText',
      mr: 2,
      flexShrink: 0
    }}>
      {icon}
    </Box>
    <Box>
      <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 0.5 }}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: 500 }}>
        {children}
      </Typography>
    </Box>
  </Box>
);

const ContactUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box textAlign="center" mb={6}>
        <Typography 
          variant="h3" 
          component="h1" 
          sx={{ 
            fontWeight: 'bold', 
            mb: 2,
            color: 'primary.main',
            [theme.breakpoints.down('sm')]: {
              fontSize: '2rem',
            },
          }}
        >
          Contact Us
        </Typography>
        <Typography variant="h6" color="text.secondary" maxWidth="700px" mx="auto">
          We'd love to hear from you! Reach out to us with any questions or feedback.
        </Typography>
      </Box>
      
      <Grid container spacing={4}>
        {/* Contact Information Card */}
        <Grid item xs={12} md={5}>
          <StyledCard elevation={3}>
            <CardHeader 
              title={
                <Typography variant="h5" component="h2" fontWeight="bold">
                  Contact Information
                </Typography>
              }
              subheader="Fill up the form and our team will get back to you within 24 hours."
              sx={{ pb: 1 }}
            />
            <CardContent>
              <ContactInfoItem 
                icon={<LocationIcon />} 
                title="Our Location"
              >
                Balaghat, Madhya Pradesh, India
              </ContactInfoItem>
              
              <ContactInfoItem 
                icon={<PhoneIcon />} 
                title="Phone Number"
              >
                +91 XXXXXXXXXX
              </ContactInfoItem>
              
              <ContactInfoItem 
                icon={<EmailIcon />} 
                title="Email Address"
              >
                admin@balaghatplus.com
              </ContactInfoItem>
              
              <ContactInfoItem 
                icon={<TimeIcon />} 
                title="Working Hours"
              >
                <Box>
                  <Box>Mon - Fri: 9:00 AM - 6:00 PM</Box>
                  <Box>Sat: 10:00 AM - 4:00 PM</Box>
                  <Box>Sun: Closed</Box>
                </Box>
              </ContactInfoItem>
            </CardContent>
            <CardActions sx={{ p: 3, pt: 0 }}>
              <Button 
                startIcon={<MessageIcon />} 
                color="primary"
                href="https://wa.me/91XXXXXXXXXX" 
                target="_blank"
                rel="noopener noreferrer"
                sx={{ textTransform: 'none' }}
              >
                Chat with us on WhatsApp
              </Button>
            </CardActions>
          </StyledCard>
        </Grid>
        
        {/* Contact Form Card */}
        <Grid item xs={12} md={7}>
          <StyledCard elevation={3}>
            <CardHeader 
              title={
                <Typography variant="h5" component="h2" fontWeight="bold">
                  Send us a Message
                </Typography>
              }
              subheader="We'll get back to you as soon as possible."
              sx={{ pb: 1 }}
            />
            <CardContent>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="name"
                      label="Your Name"
                      variant="outlined"
                      size="medium"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="email"
                      label="Your Email"
                      type="email"
                      variant="outlined"
                      size="medium"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="subject"
                      label="Subject"
                      variant="outlined"
                      size="medium"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="message"
                      label="Your Message"
                      variant="outlined"
                      multiline
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button 
                      type="submit"
                      variant="contained" 
                      color="primary" 
                      size="large"
                      startIcon={<SendIcon />}
                      fullWidth={isMobile}
                      sx={{
                        py: 1.5,
                        px: 4,
                        borderRadius: 2,
                        textTransform: 'none',
                        fontWeight: 'bold',
                        fontSize: '1rem',
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
      
      {/* Map Section */}
      <Box mt={8} textAlign="center">
        <Typography variant="h5" component="h2" fontWeight="bold" mb={3}>
          Find Us on Map
        </Typography>
        <Box 
          sx={{
            height: '400px',
            width: '100%',
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: 3,
            '& iframe': {
              width: '100%',
              height: '100%',
              border: 0,
            }
          }}
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.1234567890123!2d80.12345678901234!3d21.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a280b0a00000000%3A0x1234567890abcdef!2sBalaghat%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin" 
            title="Our Location on Map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactUs;
