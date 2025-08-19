import React from 'react';
import { Container, Typography, Paper, Box, List, ListItem, ListItemText } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4, pb: 12 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          Privacy Policy
        </Typography>
        
        <Box sx={{ mb: 4 }}>
          <Typography variant="body1" paragraph>
            Last Updated: August 19, 2024
          </Typography>
          <Typography variant="body1" paragraph>
            At Balaghat+, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, 
            disclose, and safeguard your information when you use our services.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>1. Information We Collect</Typography>
          <Typography variant="body1" paragraph>
            We may collect personal information that you provide directly to us, including but not limited to:
          </Typography>
          <List dense>
            <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 2, ml: 2 }}>
              <ListItemText primary="Name, email address, and contact information" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 2, ml: 2 }}>
              <ListItemText primary="Demographic information" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 2, ml: 2 }}>
              <ListItemText primary="Location data" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 2, ml: 2 }}>
              <ListItemText primary="Usage data and preferences" />
            </ListItem>
          </List>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>2. How We Use Your Information</Typography>
          <Typography variant="body1" paragraph>
            We may use the information we collect for various purposes, including to:
          </Typography>
          <List dense>
            <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 2, ml: 2 }}>
              <ListItemText primary="Provide, maintain, and improve our services" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 2, ml: 2 }}>
              <ListItemText primary="Process transactions and send related information" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 2, ml: 2 }}>
              <ListItemText primary="Send you technical notices, updates, and support messages" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 2, ml: 2 }}>
              <ListItemText primary="Respond to your comments, questions, and requests" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 2, ml: 2 }}>
              <ListItemText primary="Monitor and analyze trends, usage, and activities" />
            </ListItem>
          </List>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>3. Information Sharing and Disclosure</Typography>
          <Typography variant="body1" paragraph>
            We may share information about you as follows:
          </Typography>
          <List dense>
            <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 2, ml: 2 }}>
              <ListItemText primary="With service providers who perform services on our behalf" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 2, ml: 2 }}>
              <ListItemText primary="When we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 2, ml: 2 }}>
              <ListItemText primary="In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company" />
            </ListItem>
          </List>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>4. Data Security</Typography>
          <Typography variant="body1" paragraph>
            We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>5. Your Choices</Typography>
          <Typography variant="body1" paragraph>
            You may update, correct, or delete information about you at any time by contacting us. You can also opt-out of receiving promotional communications from us by following the unsubscribe instructions provided in those messages.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>6. Changes to This Privacy Policy</Typography>
          <Typography variant="body1" paragraph>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.
          </Typography>
        </Box>

        <Box sx={{ mt: 4, pt: 2, borderTop: '1px solid #e0e0e0' }}>
          <Typography variant="body1">
            If you have any questions about this Privacy Policy, please contact us at admin@balaghatplus.com
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default PrivacyPolicy;
