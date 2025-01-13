import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const CategoryDetailPage = () => {
  const { categoryName } = useParams();

  const items = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `${categoryName} Item ${i + 1}`,
    description: `Description of ${categoryName} Item ${i + 1}`,
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
            }}
          >
            <CardContent>
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default CategoryDetailPage;
