import React, { useState } from 'react';
import { 
  Container, Typography, Grid, Card, CardContent, 
  Button, Box, Tabs, Tab, Table, TableBody, 
  TableCell, TableContainer, TableHead, TableRow, Paper,
  Dialog, DialogTitle, DialogContent, DialogActions, TextField
} from '@mui/material';
import { 
  Agriculture as AgricultureIcon,
  LocalOffer as RateIcon,
  ShoppingCart as ShopIcon,
  Build as ToolsIcon,
  AccountBalance as LoanIcon,
  Phone as PhoneIcon,
  Close as CloseIcon
} from '@mui/icons-material';

// Sample data
const marketRates = [
  { id: 1, crop: 'Wheat', minPrice: 2100, maxPrice: 2300, unit: 'Quintal' },
  { id: 2, crop: 'Rice', minPrice: 1800, maxPrice: 2000, unit: 'Quintal' },
  { id: 3, crop: 'Soybean', minPrice: 3500, maxPrice: 3800, unit: 'Quintal' },
];

const products = [
  { id: 1, name: 'Hybrid Wheat Seeds', price: 2500, unit: 'kg', stock: 'In Stock' },
  { id: 2, name: 'Urea Fertilizer', price: 300, unit: '50kg', stock: 'In Stock' },
  { id: 3, name: 'Hand Sprayer', price: 1200, unit: 'piece', stock: 'In Stock' },
];

const equipment = [
  { id: 1, name: 'Tractor', price: 1500, unit: 'day', available: true },
  { id: 2, name: 'Harvester', price: 5000, unit: 'day', available: false },
  { id: 3, name: 'Cultivator', price: 800, unit: 'day', available: true },
];

const loanSchemes = [
  { id: 1, name: 'Kisan Credit Card', interest: '4%', maxAmount: '₹3,00,000' },
  { id: 2, name: 'PM Kisan Samman Nidhi', interest: '0%', maxAmount: '₹6,000/year' },
];

const FarmerServices = () => {
  const [activeTab, setActiveTab] = useState('market');
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleOpenDialog = (item) => {
    setSelectedItem(item);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedItem(null);
    setFormData({ name: '', phone: '', message: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, item: selectedItem });
    handleCloseDialog();
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4, minHeight: '100vh' }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <AgricultureIcon sx={{ fontSize: 60, color: 'success.main', mb: 2 }} />
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          किसान सेवाएं / Farmer Services
        </Typography>
      </Box>
      
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons="auto"
        sx={{ mb: 3 }}
      >
        <Tab label="बाजार भाव / Market Rates" value="market" icon={<RateIcon />} />
        <Tab label="बीज/उर्वरक / Products" value="products" icon={<ShopIcon />} />
        <Tab label="उपकरण किराया / Equipment" value="equipment" icon={<ToolsIcon />} />
        <Tab label="ऋण सहायता / Loans" value="loans" icon={<LoanIcon />} />
      </Tabs>

      {/* Market Rates */}
      {activeTab === 'market' && (
        <TableContainer component={Paper} elevation={3} sx={{ mb: 4, borderRadius: 2 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: 'primary.main' }}>
                <TableCell sx={{ color: 'white' }}>फसल / Crop</TableCell>
                <TableCell align="right" sx={{ color: 'white' }}>न्यूनतम / Min (₹)</TableCell>
                <TableCell align="right" sx={{ color: 'white' }}>अधिकतम / Max (₹)</TableCell>
                <TableCell align="right" sx={{ color: 'white' }}>इकाई / Unit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {marketRates.map((item) => (
                <TableRow key={item.id} hover>
                  <TableCell>{item.crop}</TableCell>
                  <TableCell align="right">₹{item.minPrice.toLocaleString('en-IN')}</TableCell>
                  <TableCell align="right">₹{item.maxPrice.toLocaleString('en-IN')}</TableCell>
                  <TableCell align="right">{item.unit}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Products */}
      {activeTab === 'products' && (
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>{product.name}</Typography>
                  <Typography color="primary" variant="h6" gutterBottom>
                    ₹{product.price} / {product.unit}
                  </Typography>
                  <Button 
                    fullWidth 
                    variant="contained" 
                    onClick={() => handleOpenDialog(product)}
                  >
                    Enquire Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Equipment */}
      {activeTab === 'equipment' && (
        <Grid container spacing={3}>
          {equipment.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card>
                <CardContent>
                  <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography color={item.available ? 'success.main' : 'error'}>
                      {item.available ? 'Available' : 'Booked'}
                    </Typography>
                  </Box>
                  <Typography variant="h6" color="primary" gutterBottom>
                    ₹{item.price} / {item.unit}
                  </Typography>
                  <Button 
                    fullWidth 
                    variant="contained" 
                    disabled={!item.available}
                    onClick={() => handleOpenDialog(item)}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Loans */}
      {activeTab === 'loans' && (
        <Grid container spacing={3}>
          {loanSchemes.map((scheme) => (
            <Grid item xs={12} md={6} key={scheme.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>{scheme.name}</Typography>
                  <Typography>Interest: {scheme.interest}</Typography>
                  <Typography>Max Amount: {scheme.maxAmount}</Typography>
                  <Button 
                    variant="contained" 
                    sx={{ mt: 2 }}
                    onClick={() => handleOpenDialog(scheme)}
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Enquiry Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Enquiry Form</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Your Name"
              fullWidth
              variant="outlined"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
              sx={{ mb: 2 }}
            />
            <TextField
              margin="dense"
              label="Phone Number"
              fullWidth
              variant="outlined"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
              sx={{ mb: 2 }}
            />
            <TextField
              margin="dense"
              label="Message"
              fullWidth
              multiline
              rows={3}
              variant="outlined"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Container>
  );
};

export default FarmerServices;
