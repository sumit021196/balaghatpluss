import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Paper, 
  Box, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  Divider, 
  TextField, 
  Button, 
  Grid 
} from '@mui/material';
import { ExpandMore as ExpandMoreIcon, Send as SendIcon } from '@mui/icons-material';

const faqs = [
  {
    question: 'How do I create an account?',
    answer: 'To create an account, click on the "Sign Up" button on the top right corner of the homepage. Fill in your details including name, email, and create a password. Verify your email address to activate your account.'
  },
  {
    question: 'How do I book a service?',
    answer: 'Browse through the available services, select the one you need, choose your preferred service provider, select a date and time, and proceed to payment. You will receive a confirmation once your booking is confirmed.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept various payment methods including credit/debit cards, UPI, net banking, and popular digital wallets. All transactions are secure and encrypted.'
  },
  {
    question: 'Can I cancel or reschedule a booking?',
    answer: 'Yes, you can cancel or reschedule your booking up to 24 hours before the scheduled time. Go to "My Bookings" in your account, select the booking, and choose to cancel or reschedule.'
  },
  {
    question: 'How do I contact customer support?',
    answer: 'You can reach our customer support team 24/7 through the "Contact Us" section in the app or by emailing support@balaghatplus.com. We typically respond within 2-4 hours.'
  },
  {
    question: 'Are the service providers verified?',
    answer: 'Yes, all our service providers go through a strict verification process including identity verification, background checks, and skill assessments to ensure quality and reliability.'
  },
  {
    question: 'How do I rate and review a service?',
    answer: 'After your service is completed, you will receive a link to rate and review the service. You can also access this through your booking history in the app.'
  }
];

const HelpFAQ = () => {
  const [expanded, setExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="md" sx={{ py: 4, pb: 12 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
          Help & FAQ
        </Typography>
        
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>How can we help you?</Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search for help or browse our FAQs"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ mb: 3 }}
          />
          
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, mt: 4 }}>Frequently Asked Questions</Typography>
          
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <Accordion 
                key={index} 
                expanded={expanded === `panel${index}`} 
                onChange={handleChange(`panel${index}`)}
                elevation={2}
                sx={{ mb: 1, borderRadius: 1, overflow: 'hidden' }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}bh-content`}
                  id={`panel${index}bh-header`}
                  sx={{ bgcolor: expanded === `panel${index}` ? '#f5f5f5' : 'white' }}
                >
                  <Typography sx={{ fontWeight: 'medium' }}>{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="text.secondary">
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))
          ) : (
            <Typography color="text.secondary" sx={{ textAlign: 'center', py: 4 }}>
              No results found for "{searchTerm}". Try different keywords or contact our support team.
            </Typography>
          )}
        </Box>
        
        <Divider sx={{ my: 4 }} />
        
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>Still need help?</Typography>
          <Typography variant="body1" paragraph>
            Can't find what you're looking for? Send us a message and our support team will get back to you as soon as possible.
          </Typography>
          
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <TextField
                fullWidth
                label="Your email"
                variant="outlined"
                size="small"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="How can we help?"
                variant="outlined"
                multiline
                rows={4}
                sx={{ mb: 2 }}
              />
              <Button 
                variant="contained" 
                color="primary" 
                endIcon={<SendIcon />}
              >
                Send Message
              </Button>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ bgcolor: '#f9f9f9', p: 3, borderRadius: 1, height: '100%' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>Contact Information</Typography>
                <Typography variant="body2" paragraph>
                  <strong>Email:</strong> admin@balaghatplus.com
                </Typography>
                <Typography variant="body2" paragraph>
                  <strong>Phone:</strong> +91 XXXXXXXXXX
                </Typography>
                <Typography variant="body2" paragraph>
                  <strong>Business Hours:</strong> 9:00 AM - 9:00 PM (IST), 7 days a week
                </Typography>
                <Typography variant="body2">
                  We typically respond to emails within 2-4 hours during business hours.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default HelpFAQ;
