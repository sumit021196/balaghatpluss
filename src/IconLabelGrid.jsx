import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SendIcon from '@mui/icons-material/Send';
import HomeIcon from '@mui/icons-material/Home';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';


const buttons = [
  { id: 1, name: 'Hospital',icon: <MedicalServicesIcon /> },
  { id: 2, name: 'Food', icon: <FastfoodIcon /> },
  { id: 3, name: 'Geocery', icon: <ShoppingCartIcon /> },
  { id: 4, name: 'Upload', icon: <CloudUploadIcon /> },
  { id: 5, name: 'Send', icon: <SendIcon /> },
  { id: 6, name: 'Home', icon: <HomeIcon /> },
];

export default function IconLabelGrid() {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        {buttons.map((button) => (
          <Grid item xs={2} sm={4} md={4} key={button.id}>
            <Button
              variant="outlined"
              startIcon={button.icon}
              fullWidth
              sx={{ textTransform: 'none' }} // Optional: keeps text in normal case
            >
              {button.name}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
