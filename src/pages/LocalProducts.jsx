import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Chip } from '@mui/material';

const LocalProducts = () => {
  // Local products from Balaghat
  const products = [
    {
      id: 1,
      name: 'Kosa Silk Saree',
      price: '₹2,500 - ₹5,000',
      description: 'Handwoven pure Kosa silk saree with traditional Balaghat designs',
      image: '/assets/kosa-silk.webp',
      category: 'Handloom',
      uses: 'Traditional wear, Festivals, Weddings'
    },
    {
      id: 2,
      name: 'Tussar Silk Fabric',
      price: '₹1,500 - ₹3,500 per meter',
      description: 'Pure Tussar silk fabric with natural golden color',
      image: '/assets/tussar-silk.jpg',
      category: 'Textile',
      uses: 'Clothing, Home decor, Accessories'
    },
    {
      id: 3,
      name: 'Dokra Artifacts',
      price: '₹500 - ₹10,000',
      description: 'Handcrafted Dokra metal craft items',
      image: '/assets/dokra-art.jpg',
      category: 'Handicraft',
      uses: 'Home decor, Gifts, Collectibles'
    },
    {
      id: 4,
      name: 'Wild Honey',
      price: '₹600 - ₹1,200 per kg',
      description: 'Pure forest honey collected from Balaghat forests',
      image: '/assets/wild-honey.webp',
      category: 'Food',
      uses: 'Sweetener, Medicine, Cooking'
    },
    {
      id: 5,
      name: 'Tamarind (Imli)',
      price: '₹100 - ₹200 per kg',
      description: 'Organic tamarind from Balaghat',
      image: '/assets/tamarind.webp',
      category: 'Spice',
      uses: 'Cooking, Chutneys, Medicine'
    },
    {
      id: 6,
      name: 'Mahua Products',
      price: '₹300 - ₹1,000',
      description: 'Mahua flowers, oil and other products',
      image: '/assets/mahua.webp',
      category: 'Food',
      uses: 'Cooking, Medicine, Alcohol production'
    },
    {
      id: 7,
      name: 'Bamboo Crafts',
      price: '₹200 - ₹5,000',
      description: 'Handmade bamboo products',
      image: '/assets/bamboo-craft.jpg',
      category: 'Handicraft',
      uses: 'Home decor, Kitchenware, Furniture'
    },
    {
      id: 8,
      name: 'Tendu Leaves',
      price: '₹100 - ₹300 per bundle',
      description: 'High quality Tendu leaves for Bidi making',
      image: '/assets/tendu-leaves.jpg',
      category: 'Forest Product',
      uses: 'Bidi making, Packaging'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mb: 4, color: '#1976d2' }}>
        Local Products of Balaghat
      </Typography>
      
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-4px)' } }}>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                  <Typography gutterBottom variant="h6" component="h2" sx={{ mb: 0, fontWeight: 'bold' }}>
                    {product.name}
                  </Typography>
                  <Chip 
                    label={product.category} 
                    size="small" 
                    color="primary" 
                    variant="outlined"
                    sx={{ fontSize: '0.7rem' }}
                  />
                </Box>
                
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
                  {product.description}
                </Typography>
                
                <Typography variant="body2" color="primary" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Price: {product.price}
                </Typography>
                
                <Typography variant="caption" color="text.secondary" component="div" sx={{ mt: 'auto' }}>
                  <Box component="span" sx={{ fontWeight: 'bold' }}>Uses:</Box> {product.uses}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default LocalProducts;
