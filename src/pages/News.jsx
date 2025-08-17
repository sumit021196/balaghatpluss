import React from 'react';
import { 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  Grid, 
  Box, 
  Divider, 
  Chip,
  useTheme
} from '@mui/material';
import {
  DirectionsCar,
  LocalHospital,
  School,
  WaterDrop,
  ElectricBolt,
  DirectionsRailway,
  Agriculture,
  Factory,
  LocalShipping,
  Park,
  SportsSoccer
} from '@mui/icons-material';

const projects = [
  {
    title: 'New Four-Lane Highway',
    description: 'Construction of a new four-lane highway connecting Balaghat to Jabalpur, reducing travel time by 40%. The project includes 5 major bridges and 12 minor bridges.',
    budget: '₹1,250 Crores',
    timeline: '2023-2026',
    status: 'Under Construction',
    icon: <DirectionsCar />,
    category: 'Infrastructure',
    impact: 'High',
    location: 'Balaghat to Jabalpur Corridor'
  },
  {
    title: 'Super Specialty Hospital',
    description: 'A 300-bed super specialty hospital with cardiology, neurology, and cancer treatment facilities. Will include 10 operation theaters and 50 ICU beds.',
    budget: '₹850 Crores',
    timeline: '2024-2027',
    status: 'Approved',
    icon: <LocalHospital />,
    category: 'Healthcare',
    impact: 'Very High',
    location: 'Balaghat City'
  },
  {
    title: 'Smart City Development',
    description: 'Comprehensive development of Balaghat as a Smart City, including smart traffic management, Wi-Fi hotspots, and e-governance services.',
    budget: '₹2,100 Crores',
    timeline: '2023-2028',
    status: 'Planning Phase',
    icon: <Park />,
    category: 'Urban Development',
    impact: 'Transformational',
    location: 'Balaghat City'
  },
  {
    title: 'Agricultural Research Center',
    description: 'Establishment of an advanced agricultural research center focusing on sustainable farming techniques and high-yield crop varieties suitable for the region.',
    budget: '₹320 Crores',
    timeline: '2024-2026',
    status: 'Approved',
    icon: <Agriculture />,
    category: 'Agriculture',
    impact: 'High',
    location: 'Near Waraseoni Road'
  },
  {
    title: 'Industrial Park',
    description: 'Development of a 500-acre industrial park with special economic zone status, expected to generate 10,000+ jobs in manufacturing and processing sectors.',
    budget: '₹1,800 Crores',
    timeline: '2023-2027',
    status: 'Land Acquisition',
    icon: <Factory />,
    category: 'Industrial Development',
    impact: 'Very High',
    location: 'Baihar Tehsil'
  },
  {
    title: 'Railway Line Expansion',
    description: 'New railway line connecting Balaghat to Gondia with 8 new stations, improving connectivity to major cities in Maharashtra.',
    budget: '₹2,500 Crores',
    timeline: '2024-2028',
    status: 'Approved',
    icon: <DirectionsRailway />,
    category: 'Transport',
    impact: 'High',
    location: 'Balaghat to Gondia'
  },
  {
    title: 'Water Supply Augmentation',
    description: 'Comprehensive water supply project including new water treatment plants and pipeline network to ensure 24x7 water supply to all households.',
    budget: '₹750 Crores',
    timeline: '2023-2025',
    status: 'Under Construction',
    icon: <WaterDrop />,
    category: 'Water Supply',
    impact: 'High',
    location: 'District-wide'
  },
  {
    title: 'Solar Power Plant',
    description: '200 MW solar power plant to provide clean energy and reduce power deficit in the region. Expected to power 300,000+ homes.',
    budget: '₹1,100 Crores',
    timeline: '2023-2025',
    status: 'Under Construction',
    icon: <ElectricBolt />,
    category: 'Energy',
    impact: 'High',
    location: 'Lalbarra'
  },
  {
    title: 'Logistics Hub',
    description: 'Integrated logistics hub with warehousing, cold storage, and transportation facilities to boost local trade and agriculture exports.',
    budget: '₹650 Crores',
    timeline: '2024-2026',
    status: 'Planning Phase',
    icon: <LocalShipping />,
    category: 'Logistics',
    impact: 'Medium',
    location: 'Near National Highway 543'
  },
  {
    title: 'Sports Complex',
    description: 'International-standard sports complex with facilities for athletics, swimming, and indoor games. Will include a 10,000-seat stadium.',
    budget: '₹280 Crores',
    timeline: '2024-2026',
    status: 'Approved',
    icon: <SportsSoccer />,
    category: 'Sports',
    impact: 'Medium',
    location: 'Balaghat City'
  }
];

const ProjectCard = ({ project }) => {
  const theme = useTheme();
  
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'under construction':
        return 'primary';
      case 'approved':
        return 'success';
      case 'planning phase':
        return 'warning';
      case 'land acquisition':
        return 'secondary';
      default:
        return 'default';
    }
  };

  const getImpactColor = (impact) => {
    switch (impact.toLowerCase()) {
      case 'very high':
        return 'error';
      case 'high':
        return 'warning';
      case 'medium':
        return 'info';
      case 'transformational':
        return 'success';
      default:
        return 'default';
    }
  };

  return (
    <Card 
      elevation={3} 
      sx={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: theme.shadows[8]
        }
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Box display="flex" alignItems="center" mb={2}>
          <Box 
            sx={{
              backgroundColor: theme.palette.primary.light,
              color: theme.palette.primary.contrastText,
              width: 50,
              height: 50,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: 2
            }}
          >
            {React.cloneElement(project.icon, { fontSize: 'large' })}
          </Box>
          <Box>
            <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
              {project.title}
            </Typography>
            <Box display="flex" flexWrap="wrap" gap={1} mt={0.5}>
              <Chip 
                label={project.status} 
                size="small" 
                color={getStatusColor(project.status)}
                variant="outlined"
              />
              <Chip 
                label={project.impact} 
                size="small" 
                color={getImpactColor(project.impact)}
                variant="outlined"
              />
              <Chip 
                label={project.category} 
                size="small" 
                variant="outlined"
              />
            </Box>
          </Box>
        </Box>
        
        <Typography variant="body2" color="text.secondary" paragraph>
          {project.description}
        </Typography>
        
        <Divider sx={{ my: 1.5 }} />
        
        <Grid container spacing={2} mt={1}>
          <Grid item xs={6}>
            <Box>
              <Typography variant="caption" color="text.secondary" display="block">
                Budget
              </Typography>
              <Typography variant="subtitle2" fontWeight="medium">
                {project.budget}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Typography variant="caption" color="text.secondary" display="block">
                Timeline
              </Typography>
              <Typography variant="subtitle2" fontWeight="medium">
                {project.timeline}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <Typography variant="caption" color="text.secondary" display="block">
                Location
              </Typography>
              <Typography variant="subtitle2" fontWeight="medium">
                {project.location}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const News = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4, pb: 8 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          Upcoming Development Projects in Balaghat
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Major infrastructure and development initiatives transforming Balaghat district
        </Typography>
      </Box>

      <Box mb={4}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Chip 
              icon={<Box sx={{ width: 12, height: 12, bgcolor: 'primary.main', borderRadius: '50%' }} />} 
              label="Under Construction" 
              variant="outlined" 
              size="small"
            />
          </Grid>
          <Grid item>
            <Chip 
              icon={<Box sx={{ width: 12, height: 12, bgcolor: 'success.main', borderRadius: '50%' }} />} 
              label="Approved" 
              variant="outlined" 
              size="small"
            />
          </Grid>
          <Grid item>
            <Chip 
              icon={<Box sx={{ width: 12, height: 12, bgcolor: 'warning.main', borderRadius: '50%' }} />} 
              label="Planning Phase" 
              variant="outlined" 
              size="small"
            />
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} lg={4} key={index}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default News;
