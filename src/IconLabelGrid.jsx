import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ApartmentIcon from '@mui/icons-material/Apartment';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EngineeringIcon from '@mui/icons-material/Engineering';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

const buttons = [
  { id: 1, name: 'Hospital', icon: <MedicalServicesIcon /> },
  { id: 2, name: 'Food', icon: <FastfoodIcon /> },
  { id: 3, name: 'Grocery', icon: <ShoppingCartIcon /> },
  { id: 4, name: 'Property', icon: <ApartmentIcon /> },
  { id: 5, name: 'Local Mistry', icon: <EngineeringIcon /> },
  { id: 6, name: 'Transport', icon: <DirectionsBikeIcon /> },
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
              sx={{ textTransform: 'none' }}
            >
              {button.name}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
