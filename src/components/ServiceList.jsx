import React from 'react';
import { Grid, Box, Typography, TextField, MenuItem, Container } from '@mui/material';
import ServiceCard from './ServiceCard';

const ServiceList = ({ 
  services = [], 
  title = 'Our Services',
  description = 'Browse and book our professional services',
  type,
  categories = [],
  recipientPhone = '1234567890', // Default phone number, should be replaced with actual business number
  ...props 
}) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         service.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Container maxWidth="lg" sx={{ py: 3 }} {...props}>
      <Box textAlign="center" mb={3}>
        <Typography component="h1" gutterBottom sx={{ fontWeight: 800, color: 'primary.main', fontSize: { xs: '1.25rem', sm: '1.75rem' } }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" maxWidth="700px" mx="auto" sx={{ fontSize: { xs: '0.85rem', sm: '1rem' } }}>
          {description}
        </Typography>
      </Box>

      <Box mb={3} display="flex" flexWrap="wrap" gap={1.5} justifyContent="space-between" alignItems="center">
        <TextField
          placeholder="Search"
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ minWidth: 220, flexGrow: 1, maxWidth: 360 }}
          InputProps={{
            startAdornment: <Box component="span" sx={{ mr: 1 }}>🔍</Box>,
          }}
        />
        
        {categories.length > 0 && (
          <TextField
            select
            label="Category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            variant="outlined"
            size="small"
            sx={{ minWidth: 160 }}
          >
            <MenuItem value="all">All Categories</MenuItem>
            {categories.map((category) => (
              <MenuItem key={category.value} value={category.value}>
                {category.label}
              </MenuItem>
            ))}
          </TextField>
        )}
      </Box>

      {filteredServices.length === 0 ? (
        <Box textAlign="center" py={5}>
          <Typography variant="h6" color="text.secondary">
            No services found. Try adjusting your search.
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={{ xs: 1.5, sm: 2.5 }}>
          {filteredServices.map((service) => (
            <Grid item key={service.id} xs={12} sm={6} md={4} lg={3}>
              <ServiceCard 
                {...service}
                type={type}
                recipientPhone={recipientPhone}
                sx={{
                  mx: { xs: 0, sm: 0 },
                }}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default ServiceList;
