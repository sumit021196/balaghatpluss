import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

const CategoryDetailPage = () => {
  const { categoryName } = useParams();

  const items = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `${categoryName} Item ${i + 1}`,
    description: `Description of ${categoryName} Item ${i + 1}`,
    image: `https://www.mauiaccommodations.com/wp-content/uploads/2016/01/Sunset-300x200.jpg`, // Placeholder image
    rating: Math.round(Math.random() * 5), // Random rating between 0 and 5
  }));

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        {categoryName} - Items
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          justifyContent: 'space-between',
        }}
      >
        {items.map((item) => (
          <Card
            key={item.id}
            sx={{
              flex: '1 1 calc(33.333% - 16px)', // Each card takes ~1/3 width, with a gap adjustment
              minWidth: '250px', // Ensures responsiveness for smaller screens
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image={item.image}
              alt={item.name}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {item.description}
              </Typography>
              <Rating value={item.rating} readOnly />
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default CategoryDetailPage;
