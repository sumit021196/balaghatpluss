import React, { useState } from 'react';
import { 
  Container, Typography, Grid, Card, CardContent, 
  Button, Box, Chip, TextField, InputAdornment, Tabs, Tab,
  Dialog, DialogTitle, DialogContent, DialogActions, IconButton
} from '@mui/material';
import { 
  Search as SearchIcon,
  Work as WorkIcon,
  Business as BusinessIcon,
  AttachMoney as MoneyIcon,
  LocationOn as LocationIcon,
  AccessTime as TimeIcon,
  Close as CloseIcon,
  Add as AddIcon,
  Star as StarIcon,
  StarBorder as StarBorderIcon,
  BusinessCenter as BriefcaseIcon,
  Store as ShopIcon,
  LocalHospital as HospitalIcon,
  Build as ConstructionIcon,
  LocalShipping as DeliveryIcon,
  Restaurant as RestaurantIcon,
  School as SchoolIcon,
  Home as HomeIcon
} from '@mui/icons-material';

// Sample job categories
const jobCategories = [
  { id: 'all', label: 'All Jobs', icon: <WorkIcon /> },
  { id: 'retail', label: 'Retail', icon: <ShopIcon /> },
  { id: 'hospitality', label: 'Hospitality', icon: <RestaurantIcon /> },
  { id: 'healthcare', label: 'Healthcare', icon: <HospitalIcon /> },
  { id: 'construction', label: 'Construction', icon: <ConstructionIcon /> },
  { id: 'delivery', label: 'Delivery', icon: <DeliveryIcon /> },
  { id: 'education', label: 'Education', icon: <SchoolIcon /> },
  { id: 'domestic', label: 'Domestic Help', icon: <HomeIcon /> },
];

// Sample jobs data
const jobsData = [
  {
    id: 1,
    title: 'Shop Assistant',
    company: 'Balaghat Supermart',
    type: 'Full-time',
    category: 'retail',
    location: 'Balaghat City',
    salary: '₹8,000 - ₹12,000/month',
    posted: '2 days ago',
    description: 'Looking for a shop assistant to manage customer inquiries, handle billing, and maintain store cleanliness.',
    requirements: ['10th pass', 'Basic math skills', 'Good communication'],
    isPremium: true
  },
  {
    id: 2,
    title: 'Hospital Ward Boy',
    company: 'City Hospital',
    type: 'Full-time',
    category: 'healthcare',
    location: 'Civil Lines',
    salary: '₹10,000 - ₹15,000/month',
    posted: '1 week ago',
    description: 'Assisting nurses and doctors with patient care and hospital maintenance.',
    requirements: ['12th pass', 'Physically fit', 'Compassionate'],
    isPremium: false
  },
  {
    id: 3,
    title: 'Construction Helper',
    company: 'Shivam Builders',
    type: 'Daily Wage',
    category: 'construction',
    location: 'Waraseoni Road',
    salary: '₹600 - ₹800/day',
    posted: '3 days ago',
    description: 'Assisting in construction work including material handling and site cleaning.',
    requirements: ['Physical stamina', 'No experience needed', 'Safety conscious'],
    isPremium: false
  },
  {
    id: 4,
    title: 'Food Delivery Partner',
    company: 'QuickEats',
    type: 'Part-time',
    category: 'delivery',
    location: 'Balaghat',
    salary: '₹15,000 - ₹25,000/month',
    posted: '1 day ago',
    description: 'Deliver food orders to customers in and around Balaghat.',
    requirements: ['Own vehicle', 'Smartphone', 'Valid license'],
    isPremium: true
  },
  {
    id: 5,
    title: 'Domestic Helper',
    company: 'HomeCare Services',
    type: 'Full-time',
    category: 'domestic',
    location: 'Balaghat',
    salary: '₹6,000 - ₹9,000/month',
    posted: '5 days ago',
    description: 'House cleaning, dish washing, and basic household chores.',
    requirements: ['No experience needed', 'Trustworthy'],
    isPremium: false
  }
];

// Premium job posting component
const PremiumJobPosting = ({ open, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    type: 'Full-time',
    category: '',
    location: '',
    salary: '',
    description: '',
    requirements: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would handle form submission here
    console.log('Premium job posting:', formData);
    alert('Premium job posted successfully!');
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <span>Post a Premium Job</span>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Job Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                margin="normal"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Company Name"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                margin="normal"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="Job Type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
                margin="normal"
                size="small"
                SelectProps={{ native: true }}
              >
                {['Full-time', 'Part-time', 'Contract', 'Temporary', 'Internship', 'Freelance'].map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="Category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                margin="normal"
                size="small"
                SelectProps={{ native: true }}
              >
                <option value="">Select a category</option>
                {jobCategories.slice(1).map((cat) => (
                  <option key={cat.id} value={cat.id}>{cat.label}</option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                margin="normal"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Salary Range"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                placeholder="e.g., ₹8,000 - ₹12,000/month"
                margin="normal"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Job Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                multiline
                rows={3}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Requirements (comma separated)"
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                placeholder="e.g., 10th pass, Good communication, Basic computer"
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ p: 2, bgcolor: '#fff8e1', borderRadius: 1, mt: 2 }}>
                <Typography variant="subtitle2" color="warning.main" sx={{ display: 'flex', alignItems: 'center' }}>
                  <MoneyIcon fontSize="small" sx={{ mr: 1 }} />
                  Premium Job Posting - ₹499 for 30 days
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Your job will be highlighted and shown to more candidates
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained" color="primary">
            Pay & Post Job
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

const JobCard = ({ job }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Grid item xs={12}>
      <Card 
        variant="outlined" 
        sx={{ 
          borderLeft: job.isPremium ? '4px solid #ffc107' : '4px solid #e0e0e0',
          transition: 'all 0.2s',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }
        }}
      >
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="flex-start">
            <Box>
              <Box display="flex" alignItems="center" mb={1}>
                <Typography variant="h6" component="h2" sx={{ fontWeight: 600, mr: 1 }}>
                  {job.title}
                </Typography>
                {job.isPremium && (
                  <Chip 
                    label="Premium" 
                    size="small" 
                    color="warning" 
                    sx={{ height: 20, fontSize: '0.7rem' }} 
                  />
                )}
              </Box>
              
              <Box display="flex" alignItems="center" flexWrap="wrap" mb={1}>
                <Box display="flex" alignItems="center" mr={2}>
                  <BusinessIcon fontSize="small" color="action" sx={{ mr: 0.5 }} />
                  <Typography variant="body2" color="text.secondary">
                    {job.company}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" mr={2}>
                  <LocationIcon fontSize="small" color="action" sx={{ mr: 0.5 }} />
                  <Typography variant="body2" color="text.secondary">
                    {job.location}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <TimeIcon fontSize="small" color="action" sx={{ mr: 0.5 }} />
                  <Typography variant="caption" color="text.secondary">
                    {job.posted}
                  </Typography>
                </Box>
              </Box>
              
              <Box display="flex" alignItems="center" flexWrap="wrap" mb={1.5}>
                <Chip 
                  label={job.type} 
                  size="small" 
                  variant="outlined" 
                  color="primary"
                  sx={{ mr: 1, mb: 1 }} 
                />
                <Chip 
                  label={job.salary} 
                  size="small" 
                  sx={{ 
                    bgcolor: '#e3f2fd', 
                    color: '#1976d2',
                    fontWeight: 500,
                    mr: 1,
                    mb: 1
                  }} 
                />
              </Box>
              
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {job.description}
              </Typography>
              
              {expanded && (
                <Box mt={2}>
                  <Typography variant="subtitle2" gutterBottom>
                    Requirements:
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, mt: 0, mb: 2 }}>
                    {job.requirements.map((req, idx) => (
                      <li key={idx}>
                        <Typography variant="body2" color="text.secondary">
                          {req}
                        </Typography>
                      </li>
                    ))}
                  </Box>
                </Box>
              )}
              
              <Button 
                size="small" 
                onClick={() => setExpanded(!expanded)}
                sx={{ mt: 1 }}
              >
                {expanded ? 'Show Less' : 'View Details'}
              </Button>
            </Box>
            
            <Box sx={{ ml: 2, textAlign: 'center' }}>
              <Button 
                variant="contained" 
                color="primary" 
                size="small"
                sx={{ mb: 1, minWidth: 120 }}
              >
                Apply Now
              </Button>
              <Typography variant="caption" display="block" color="text.secondary">
                {Math.floor(Math.random() * 15) + 5} applicants
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

const Jobs = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [openPostJob, setOpenPostJob] = useState(false);
  
  const filteredJobs = jobsData.filter(job => {
    const matchesSearch = 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = activeTab === 'all' || job.category === activeTab;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <Container maxWidth="lg" sx={{ py: 4, pb: 12 }}>
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 600, color: '#1976d2' }}>
          Local Jobs in Balaghat
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
          Find daily wage jobs, part-time work, and full-time employment opportunities
        </Typography>
        
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, mb: 3 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search jobs, companies, or keywords..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
              sx: { 
                borderRadius: 4,
                bgcolor: '#fff',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#e0e0e0',
                },
              }
            }}
          />
          <Button 
            variant="contained" 
            color="primary" 
            startIcon={<AddIcon />}
            onClick={() => setOpenPostJob(true)}
            sx={{
              borderRadius: 4,
              textTransform: 'none',
              px: 4,
              whiteSpace: 'nowrap',
              height: '56px',
              boxShadow: '0 4px 12px rgba(25, 118, 210, 0.2)'
            }}
          >
            Post a Job
          </Button>
        </Box>
        
        <Box sx={{ 
          borderBottom: 1, 
          borderColor: 'divider',
          mb: 3,
          overflowX: 'auto',
          '& .MuiTabs-scroller': {
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          },
          '& .MuiTabs-indicator': {
            height: 4,
            borderRadius: '4px 4px 0 0',
          },
          '& .MuiTab-root': {
            textTransform: 'none',
            fontWeight: 500,
            minWidth: 'auto',
            px: 2,
            '&.Mui-selected': {
              color: '#1976d2',
              fontWeight: 600,
            },
          },
        }}>
          <Tabs
            value={activeTab}
            onChange={(e, newValue) => setActiveTab(newValue)}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="job categories"
          >
            {jobCategories.map((category) => (
              <Tab 
                key={category.id} 
                icon={category.icon} 
                label={category.label} 
                value={category.id}
                iconPosition="start"
                sx={{ minHeight: 48 }}
              />
            ))}
          </Tabs>
        </Box>
      </Box>
      
      <Grid container spacing={3}>
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))
        ) : (
          <Box sx={{ 
            width: '100%', 
            textAlign: 'center', 
            p: 4,
            backgroundColor: '#f9f9f9',
            borderRadius: 2,
            mt: 2
          }}>
            <WorkIcon color="disabled" sx={{ fontSize: 60, mb: 2 }} />
            <Typography variant="h6" color="text.secondary" gutterBottom>
              No jobs found
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Try adjusting your search or check back later for new job postings
            </Typography>
          </Box>
        )}
      </Grid>
      
      <PremiumJobPosting 
        open={openPostJob} 
        onClose={() => setOpenPostJob(false)} 
        onSubmit={() => {}}
      />
    </Container>
  );
};

export default Jobs;
