import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ApartmentIcon from '@mui/icons-material/Apartment';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EngineeringIcon from '@mui/icons-material/Engineering';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ArticleIcon from '@mui/icons-material/Article';
import SchoolIcon from '@mui/icons-material/School';
import BuildIcon from '@mui/icons-material/Build';
import { useNavigate } from 'react-router-dom';

const buttons = [
  { id: 1, name: 'Hospital', icon: <MedicalServicesIcon /> },
  { id: 2, name: 'Food', icon: <FastfoodIcon /> },
  { id: 3, name: 'Grocery', icon: <ShoppingCartIcon /> },
  { id: 4, name: 'Property', icon: <ApartmentIcon /> },
  { id: 5, name: 'Mistry', icon: <EngineeringIcon /> },
  { id: 6, name: 'Transport', icon: <DirectionsBikeIcon /> },
  { id: 7, name: 'Blog', icon: <ArticleIcon /> },
  { id: 8, name: 'Education', icon: <SchoolIcon /> },
  { id: 9, name: 'Repair Services', icon: <BuildIcon /> },
];

export default function IconLabelGrid() {
  const navigate = useNavigate();

  const handleButtonClick = React.useCallback((name) => {
    navigate(name === 'Blog' ? '/blog' : `/category/${name.toLowerCase()}`);
  }, [navigate]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 2,
        padding: 2,
      }}
    >
      {buttons.map((button) => (
        <Box
          key={button.id}
          sx={{
            width: { xs: '30%', sm: '30%', md: '20%' },
            minWidth: '100px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button
            variant="outlined"
            startIcon={button.icon}
            sx={{
              textTransform: 'none',
              width: '100%',
              height: '70px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={() => handleButtonClick(button.name)}
          >
            {button.name}
          </Button>
        </Box>
      ))}
    </Box>
  );
}
