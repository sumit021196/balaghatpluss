import React from 'react';
import { Container, Typography, Paper, Box, List, ListItem, ListItemText } from '@mui/material';

const TermsConditions = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4, pb: 12 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          Terms & Conditions
        </Typography>
        
        <Box sx={{ mb: 4 }}>
          <Typography variant="body1" paragraph>
            Last Updated: August 19, 2024
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to Balaghat+! These Terms and Conditions outline the rules and regulations for the use of our platform.
          </Typography>
          <Typography variant="body1" paragraph>
            By accessing this platform, we assume you accept these terms and conditions in full. Do not continue to use Balaghat+ if you do not accept all of the terms and conditions stated on this page.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>1. Definitions</Typography>
          <Typography variant="body1" paragraph>
            The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements:
          </Typography>
          <List dense>
            <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 2, ml: 2 }}>
              <ListItemText primary={`'Client', 'You' and 'Your' refers to you, the person using our service and compliant to the Company's terms and conditions.`} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 2, ml: 2 }}>
              <ListItemText primary={`'The Company', 'Ourselves', 'We', 'Our' and 'Us', refers to Balaghat+.`} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 2, ml: 2 }}>
              <ListItemText primary={`'Party', 'Parties', or 'Us', refers to both the Client and ourselves.`} />
            </ListItem>
          </List>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>2. Use License</Typography>
          <Typography variant="body1" paragraph>
            Permission is granted to temporarily access the materials on Balaghat+'s platform for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </Typography>
          <List dense>
            <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 2, ml: 2 }}>
              <ListItemText primary="Modify or copy the materials" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 2, ml: 2 }}>
              <ListItemText primary="Use the materials for any commercial purpose, or for any public display (commercial or non-commercial)" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 2, ml: 2 }}>
              <ListItemText primary="Attempt to reverse engineer any software contained on Balaghat+'s platform" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 2, ml: 2 }}>
              <ListItemText primary="Remove any copyright or other proprietary notations from the materials" />
            </ListItem>
          </List>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>3. User Responsibilities</Typography>
          <Typography variant="body1" paragraph>
            As a user of Balaghat+, you agree to:
          </Typography>
          <List dense>
            <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 2, ml: 2 }}>
              <ListItemText primary="Provide accurate and complete information when creating an account" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 2, ml: 2 }}>
              <ListItemText primary="Maintain the security of your account credentials" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 2, ml: 2 }}>
              <ListItemText primary="Not use the service for any illegal or unauthorized purpose" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 2, ml: 2 }}>
              <ListItemText primary="Comply with all applicable laws and regulations" />
            </ListItem>
          </List>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>4. Service Providers</Typography>
          <Typography variant="body1" paragraph>
            Balaghat+ acts as a platform connecting service providers with customers. We are not responsible for:
          </Typography>
          <List dense>
            <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 2, ml: 2 }}>
              <ListItemText primary="The quality or safety of the services provided by third parties" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 2, ml: 2 }}>
              <ListItemText primary="Any interactions or disputes between users and service providers" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 2, ml: 2 }}>
              <ListItemText primary="The accuracy of service provider profiles, reviews, or ratings" />
            </ListItem>
          </List>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>5. Payments and Refunds</Typography>
          <Typography variant="body1" paragraph>
            All payments made through Balaghat+ are processed through secure payment gateways. We do not store your payment information. Refund policies may vary by service provider and will be clearly stated at the time of booking.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>6. Limitation of Liability</Typography>
          <Typography variant="body1" paragraph>
            In no event shall Balaghat+, nor any of its officers, directors, and employees, be liable for anything arising out of or in any way connected with your use of this platform, whether such liability is under contract, tort, or otherwise.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>7. Changes to Terms</Typography>
          <Typography variant="body1" paragraph>
            We reserve the right to modify these terms at any time. We will provide notice of any changes by posting the new Terms and Conditions on this page. You are advised to review these terms periodically for any changes.
          </Typography>
        </Box>

        <Box sx={{ mt: 4, pt: 2, borderTop: '1px solid #e0e0e0' }}>
          <Typography variant="body1">
            If you have any questions about these Terms & Conditions, please contact us at admin@balaghatplus.com
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default TermsConditions;
