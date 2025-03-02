import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, AppBar, Toolbar, Typography, Button, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconLabelGrid from './IconLabelGrid';
import LabelBottomNavigation from './LabelBottomNavigation';
import CategoryDetailPage from './CategoryDetailPage';
import BlogPage from './BlogPage';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Top AppBar */}
        <AppBar position="static" sx={{ backgroundColor: '#fff', boxShadow: 'none' }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#000' }}>
              <span style={{ color: '#4285f4' }}>Balaghat</span>
              <span style={{ color: '#ea4335' }}>Plus</span>
            </Typography>
            <Button color="inherit" sx={{ color: '#4285f4' }}>Advertise</Button>
            <NotificationsIcon sx={{ color: '#666', mx: 1 }} />
            <AccountCircleIcon sx={{ color: '#666' }} />
          </Toolbar>
        </AppBar>

        {/* Search Bar */}
        <Box sx={{ p: 2, maxWidth: 600, margin: '0 auto' }}>
          <Paper
            component="form"
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              border: '1px solid #ddd',
              borderRadius: '8px'
            }}
          >
            <SearchIcon sx={{ p: 1, color: '#666' }} />
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search for services in Balaghat"
            />
            <MicIcon sx={{ p: 1, color: '#4285f4' }} />
          </Paper>
        </Box>

        {/* Main Content */}
        <Box sx={{ pb: 7 }}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <IconLabelGrid />
                  {/* Advertisement Banner */}
                  <Box
                    sx={{
                      p: 2,
                      mx: 2,
                      my: 3,
                      borderRadius: 2,
                      backgroundColor: '#f0f7ff',
                      textAlign: 'center'
                    }}
                  >
                    <Typography variant="h6" sx={{ color: '#1a73e8', mb: 1 }}>
                      Connect with
                    </Typography>
                    <Typography variant="h5" sx={{ color: '#1a73e8', fontWeight: 'bold', mb: 1 }}>
                      50,000+ Customers
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: '#666' }}>
                      on BalaghatPlus
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        mt: 2,
                        backgroundColor: '#1a73e8',
                        '&:hover': {
                          backgroundColor: '#1557b0'
                        }
                      }}
                    >
                      List your business for FREE
                    </Button>
                  </Box>
                </>
              }
            />
            <Route path="/category/:categoryName" element={<CategoryDetailPage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </Box>

        {/* Bottom Navigation */}
        <LabelBottomNavigation />
      </div>
    </Router>
  );
}

export default App;
