import React from "react";
import { Box, Typography, Button, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
  Language, 
  Business, 
  Email, 
  Person, 
  Help, 
  TrendingUp,
  Campaign,
  Receipt,
  Close,
  MonetizationOn,
  Work,
  Settings,
  Security,
  Groups,
  Lightbulb,
  Folder,
  Logout
} from '@mui/icons-material';

const SidebarContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: 360,
  backgroundColor: '#fff',
  height: '100vh',
  overflowY: 'auto',
}));

const ProfileSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

const MenuButton = styled(Button)(({ theme }) => ({
  justifyContent: 'flex-start',
  padding: theme.spacing(1.5, 2),
  textTransform: 'none',
  color: '#333',
  width: '100%',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
  '& .MuiButton-startIcon': {
    marginRight: theme.spacing(2),
    color: '#666',
  },
}));

const ActionChips = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const Chip = styled(Button)(({ theme }) => ({
  borderRadius: '20px',
  textTransform: 'none',
  padding: theme.spacing(0.5, 2),
  borderColor: '#ddd',
  color: '#666',
  '&:hover': {
    borderColor: '#bbb',
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
}));

const Badge = styled(Box)(({ color = 'primary' }) => ({
  padding: '2px 8px',
  borderRadius: '12px',
  fontSize: '12px',
  fontWeight: 500,
  backgroundColor: color === 'primary' ? '#1976d2' : '#f44336',
  color: 'white',
  marginLeft: 'auto',
}));

const Sidebar = ({ onClose }) => {
  return (
    <SidebarContainer>
      <ProfileSection>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6">sumit</Typography>
          <Close onClick={onClose} sx={{ cursor: 'pointer' }} />
        </Box>
        <Typography variant="body2" color="text.secondary">
          Manage profile & settings
        </Typography>
        
        <ActionChips>
          <Chip variant="outlined">Saved</Chip>
          <Chip variant="outlined">Favorites</Chip>
          <Chip variant="outlined">Interests</Chip>
        </ActionChips>

        <Divider />

        <MenuButton
          startIcon={<Language />}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
            <Typography>English</Typography>
            <Typography color="text.secondary" sx={{ fontSize: '0.875rem' }}>Change Language</Typography>
          </Box>
        </MenuButton>

        <MenuButton
          startIcon={<Business />}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
            <Typography>My Business</Typography>
            <Badge color="primary">New</Badge>
          </Box>
        </MenuButton>

        <MenuButton
          startIcon={<Email />}
        >
          <Typography>Leads</Typography>
        </MenuButton>

        <MenuButton
          startIcon={<Person />}
        >
          <Typography>Edit Profile</Typography>
        </MenuButton>

        <MenuButton
          startIcon={<Help />}
        >
          <Typography>Customer Service</Typography>
        </MenuButton>

        <MenuButton
          startIcon={<TrendingUp />}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
            <Typography>List your Business</Typography>
            <Badge color="secondary">Free</Badge>
          </Box>
        </MenuButton>

        <MenuButton
          startIcon={<Campaign />}
        >
          <Typography>Advertise</Typography>
        </MenuButton>

        <MenuButton
          startIcon={<Receipt />}
        >
          <Typography>My Transactions</Typography>
        </MenuButton>

        <MenuButton
          startIcon={<Help />}
        >
          <Typography>Help</Typography>
        </MenuButton>

        <MenuButton
          startIcon={<MonetizationOn />}
        >
          <Typography>Manage Quotes</Typography>
        </MenuButton>

        <MenuButton
          startIcon={<Work />}
        >
          <Typography>We are hiring</Typography>
        </MenuButton>

        <MenuButton
          startIcon={<Settings />}
        >
          <Typography>Settings</Typography>
        </MenuButton>

        <MenuButton
          startIcon={<Security />}
        >
          <Typography>Privacy Policy</Typography>
        </MenuButton>

        <MenuButton
          startIcon={<Groups />}
        >
          <Typography>Investor Relations</Typography>
        </MenuButton>

        <MenuButton
          startIcon={<Lightbulb />}
        >
          <Typography>What's New</Typography>
        </MenuButton>

        <MenuButton
          startIcon={<Folder />}
        >
          <Typography>Others</Typography>
        </MenuButton>

        <MenuButton
          startIcon={<Logout />}
        >
          <Typography>Sign Out</Typography>
        </MenuButton>

      </ProfileSection>
    </SidebarContainer>
  );
};

export default Sidebar;