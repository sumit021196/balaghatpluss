import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  InputBase,
  Paper,
  Button,
  Card,
  CardMedia,
  CardContent,
  Rating,
  Chip,
  Stack,
  Divider,
  ToggleButtonGroup,
  ToggleButton
} from '@mui/material';
import {
  ArrowBack,
  Search,
  Mic,
  LocationOn,
  Call,
  Share,
  CloudUpload,
  ChevronRight
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const schoolData = [
  {
    id: 1,
    name: 'Paathshala',
    rating: 4.7,
    totalRatings: 88,
    location: 'Bapu Aashram Vivekanand Colony',
    distance: '2.31 km',
    type: ['Kindergarten', 'Primary', 'Upper Primary'],
    images: ['/school1.jpg', '/school2.jpg', '/school3.jpg'],
    tags: ['Top rated'],
  },
  {
    id: 2,
    name: "St. Mary's English Medium School",
    rating: 4.2,
    totalRatings: 93,
    location: 'Dr. Mahajans Hospital Budhi',
    distance: '120 mts',
    type: ['CBSE'],
    images: ['/school4.jpg', '/school5.jpg'],
    tags: ['Popular'],
  },
  {
    id: 3,
    name: 'Shemrock & Shemford School',
    rating: 4.3,
    totalRatings: 50,
    location: 'Dindayalpuram Civil Lines',
    distance: '1.15 km',
    type: ['Kindergarten', 'Primary'],
    images: ['/school6.jpg', '/school7.jpg'],
    tags: ['Trending'],
  }
];

const Schools = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState('relevance');
  const [genderFilter, setGenderFilter] = useState('all');

  return (
    <Box sx={{ pb: 8, bgcolor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Header */}
      <Box sx={{ 
        bgcolor: '#fff', 
        borderBottom: '1px solid #eee',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}>
        <Container maxWidth="md">
          <Box sx={{ py: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
              <IconButton onClick={() => navigate(-1)} size="small">
                <ArrowBack />
              </IconButton>
              <Typography variant="h6" sx={{ fontWeight: 500, color: '#1976d2' }}>JustDial</Typography>
            </Box>

            {/* Search Bar */}
            <Paper
              sx={{
                p: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                border: '1px solid #ddd',
                borderRadius: 2,
                mb: 1
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Schools"
                startAdornment={<Search sx={{ color: '#666', mr: 1 }} />}
              />
              <IconButton sx={{ p: '10px' }}>
                <Mic />
              </IconButton>
            </Paper>

            {/* Location */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#666' }}>
              <LocationOn fontSize="small" />
              <Typography variant="body2">
                Results in "Iti Road Gouli Mohalla" 
                <Button size="small" sx={{ ml: 1, color: '#1976d2' }}>
                  Change
                </Button>
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ mt: 2 }}>
        {/* Get List Banner */}
        <Paper sx={{ 
          p: 2, 
          mb: 2, 
          bgcolor: '#e3f2fd',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: 2
        }}>
          <Box>
            <Typography variant="h6" sx={{ color: '#1976d2', fontWeight: 500 }}>
              Get the List of Top Schools
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We'll send you verified details for free
            </Typography>
          </Box>
          <IconButton sx={{ color: '#1976d2' }}>
            <ChevronRight />
          </IconButton>
        </Paper>

        {/* Filters */}
        <Box sx={{ mb: 2, display: 'flex', gap: 2, overflowX: 'auto', py: 1 }}>
          <ToggleButtonGroup
            value={sortBy}
            exclusive
            onChange={(e, value) => value && setSortBy(value)}
            size="small"
          >
            <ToggleButton value="relevance">Sort by</ToggleButton>
          </ToggleButtonGroup>
          <ToggleButtonGroup
            value={genderFilter}
            exclusive
            onChange={(e, value) => value && setGenderFilter(value)}
            size="small"
          >
            <ToggleButton value="all">Gender Status</ToggleButton>
          </ToggleButtonGroup>
          <Button variant="outlined" size="small">
            Manage
          </Button>
        </Box>

        {/* School List */}
        <Typography variant="h6" sx={{ mb: 2 }}>
          Leading Educational Institutions : Top Schools in Iti Road Gouli Mohalla, Balaghat
        </Typography>

        <Stack spacing={2}>
          {schoolData.map((school) => (
            <Card key={school.id} sx={{ borderRadius: 2 }}>
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={school.images[0]}
                  alt={school.name}
                  sx={{ objectFit: 'cover' }}
                />
                {school.tags.map((tag, index) => (
                  <Chip
                    key={index}
                    label={tag}
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 8,
                      left: 8 + (index * 90),
                      bgcolor: 'rgba(255, 255, 255, 0.9)',
                      fontWeight: 500
                    }}
                  />
                ))}
              </Box>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 500 }}>
                    {school.name}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Rating value={school.rating} precision={0.1} readOnly size="small" />
                    <Typography variant="body2" color="text.secondary">
                      ({school.totalRatings})
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {school.location} - {school.distance}
                </Typography>
                <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                  {school.type.map((type, index) => (
                    <Chip key={index} label={type} size="small" variant="outlined" />
                  ))}
                </Stack>
                <Divider sx={{ mb: 2 }} />
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button
                    variant="contained"
                    startIcon={<Call />}
                    fullWidth
                    sx={{ borderRadius: 2 }}
                  >
                    Call Now
                  </Button>
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{ borderRadius: 2 }}
                  >
                    Send Enquiry
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Stack>

        {/* Upload Photos Section */}
        <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
          <Paper sx={{ 
            flex: 1, 
            p: 3, 
            textAlign: 'center',
            borderRadius: 2,
            bgcolor: '#f8f9fa'
          }}>
            <CloudUpload sx={{ fontSize: 40, color: '#666', mb: 1 }} />
            <Typography>Upload Photos</Typography>
          </Paper>
          <Paper sx={{ 
            flex: 1, 
            p: 3, 
            textAlign: 'center',
            borderRadius: 2,
            bgcolor: '#f8f9fa'
          }}>
            <Share sx={{ fontSize: 40, color: '#666', mb: 1 }} />
            <Typography>Share</Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default Schools; 