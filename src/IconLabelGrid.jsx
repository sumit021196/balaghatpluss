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
import ArticleIcon from '@mui/icons-material/Article';
import { useNavigate } from 'react-router-dom';

const buttons = [
  { id: 1, name: 'Hospital', icon: <MedicalServicesIcon /> },
  { id: 2, name: 'Food', icon: <FastfoodIcon /> },
  { id: 3, name: 'Grocery', icon: <ShoppingCartIcon /> },
  { id: 4, name: 'Property', icon: <ApartmentIcon /> },
  { id: 5, name: 'Mistry', icon: <EngineeringIcon /> },
  { id: 6, name: 'Transport', icon: <DirectionsBikeIcon /> },
  { id: 7, name: 'Blog', icon: <ArticleIcon /> },
];

export default function IconLabelGrid() {
  const navigate = useNavigate();

  const handleButtonClick = (name) => {
    navigate(name === 'Blog' ? '/blog' : `/category/${name}`);
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2} justifyContent="center">
        {buttons.map((button) => (
          <Grid item xs={6} sm={4} md={3} key={button.id}>
            <Button
              variant="outlined"
              startIcon={button.icon}
              fullWidth
              sx={{
                textTransform: 'none',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '50px', // Ensures all buttons have the same height
              }}
              onClick={() => handleButtonClick(button.name)}
            >
              {button.name}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
