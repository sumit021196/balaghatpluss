import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Paper, 
  Button,
  IconButton,
  InputBase,
  Divider
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
  Search, 
  ArrowBack,
  Factory,
  Agriculture,
  ElectricBolt,
  Construction,
  DirectionsCar,
  Science,
  Inventory,
  LocalHospital,
  Iron,
  Recycling,
  Checkroom,
  Forest
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const SearchBox = styled(Paper)(({ theme }) => ({
  padding: '6px 16px',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  backgroundColor: '#f8f9fa',
  border: '1px solid #ddd',
  borderRadius: '8px',
}));

const ProfileImage = styled('img')({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  objectFit: 'cover',
});

const CategoryCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  cursor: 'pointer',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(1),
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: theme.shadows[4],
    bgcolor: 'rgba(0, 0, 0, 0.02)',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  backgroundColor: '#f5f5f5',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(1),
  '& .MuiSvgIcon-root': {
    color: theme.palette.primary.main,
    fontSize: '24px',
  },
}));

const categories = [
  { name: 'Industrial Products', icon: <Factory /> },
  { name: 'Food & Agriculture', icon: <Agriculture /> },
  { name: 'Electronics & Electrical', icon: <ElectricBolt /> },
  { name: 'Construction Materials', icon: <Construction /> },
  { name: 'Auto Parts & Accessories', icon: <DirectionsCar /> },
  { name: 'Chemicals & Solvents', icon: <Science /> },
  { name: 'Packaging Materials', icon: <Inventory /> },
  { name: 'Medical & Pharma', icon: <LocalHospital /> },
  { name: 'Metal & Alloys', icon: <Iron /> },
  { name: 'Plastic & Products', icon: <Recycling /> },
  { name: 'Textile & Leather', icon: <Checkroom /> },
  { name: 'Wood & Products', icon: <Forest /> }
];

const B2B = () => {
  const navigate = useNavigate();

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
          <Box sx={{ 
            py: 1.5,
            display: 'flex',
            alignItems: 'center',
            gap: 2
          }}>
            <IconButton onClick={() => navigate(-1)} size="small">
              <ArrowBack />
            </IconButton>
            <Typography variant="h6" sx={{ fontWeight: 500 }}>B2B</Typography>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="md">
        {/* Search Section */}
        <Box sx={{ my: 2 }}>
          <SearchBox elevation={0}>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search for B2B products & services"
            />
            <IconButton type="button" aria-label="search">
              <Search />
            </IconButton>
          </SearchBox>
        </Box>

        {/* Profile Section */}
        <Paper 
          elevation={0}
          sx={{ 
            p: 2, 
            mb: 2, 
            borderRadius: 2,
            border: '1px solid #eee'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <ProfileImage
              src="https://via.placeholder.com/40"
              alt="Profile"
            />
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1" fontWeight="500">sumit</Typography>
              <Typography variant="body2" color="text.secondary">
                Complete your profile to connect with businesses
              </Typography>
            </Box>
          </Box>
        </Paper>

        {/* Categories Grid */}
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>Popular Categories</Typography>
        <Grid container spacing={2}>
          {categories.map((category, index) => (
            <Grid item xs={6} key={index}>
              <CategoryCard elevation={0}>
                <IconWrapper>
                  {category.icon}
                </IconWrapper>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: '#333',
                    fontWeight: 500,
                    lineHeight: 1.3
                  }}
                >
                  {category.name}
                </Typography>
              </CategoryCard>
            </Grid>
          ))}
        </Grid>

        {/* Recent Searches */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>Recent Searches</Typography>
          <Paper 
            elevation={0}
            sx={{ 
              p: 2,
              borderRadius: 2,
              border: '1px solid #eee',
              bgcolor: '#fff'
            }}
          >
            <Typography variant="body2" color="text.secondary">
              No recent searches
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default B2B; 