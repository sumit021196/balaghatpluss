import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box, Chip } from '@mui/material';
import BookViaWhatsApp from './BookViaWhatsApp';

const ServiceCard = ({ 
  id,
  title,
  description,
  image,
  price,
  category,
  available = true,
  type,
  recipientPhone,
  speciality,
  buttonLabel = 'Book Now',
  ...props 
}) => {
  return (
    <Card 
      sx={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        boxShadow: { xs: 1, sm: 2 },
        transition: 'transform 0.25s, box-shadow 0.25s',
        '&:hover': {
          transform: { xs: 'none', sm: 'translateY(-4px)' },
          boxShadow: { xs: 2, sm: 4 },
        },
        ...props.sx
      }}
    >
      {image && (
        <CardMedia
          component="img"
          height={{ xs: 120, sm: 160 }}
          image={image}
          alt={title}
          sx={{ objectFit: 'cover', borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
        />
      )}
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: { xs: 1.5, sm: 2 } }}>
        <Box sx={{ mb: 1 }}>
          {category && (
            <Chip 
              label={category} 
              size="small" 
              color="primary" 
              variant="soft"
              sx={{ mb: 0.5, fontSize: '0.68rem', height: 22, borderRadius: 1 }}
            />
          )}
          <Typography gutterBottom component="div" sx={{ fontWeight: 700, fontSize: { xs: '0.95rem', sm: '1.05rem' }, lineHeight: 1.35 }}>
            {title}
          </Typography>
          {description && (
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1.25, fontSize: { xs: '0.8rem', sm: '0.875rem' } }}>
              {description}
            </Typography>
          )}
          {price && (
            <Typography color="primary" sx={{ mt: 'auto', fontWeight: 700, fontSize: { xs: '1rem', sm: '1.1rem' } }}>
              {price}
            </Typography>
          )}
        </Box>
        
        <Box sx={{ mt: 'auto', pt: 1.5 }}>
          <BookViaWhatsApp
            buttonLabel={buttonLabel}
            type={type}
            targetId={id}
            targetName={title}
            targetSpeciality={speciality}
            recipientPhone={recipientPhone}
            buttonProps={{
              variant: 'contained',
              fullWidth: true,
              disabled: !available,
              size: 'small',
              sx: { borderRadius: 1.5, textTransform: 'none', fontWeight: 600, py: 0.75 }
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
