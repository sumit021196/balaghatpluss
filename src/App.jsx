import React, { useState, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Drawer, IconButton, CircularProgress, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ResponsiveAppBar from './ResponsiveAppBar';
import LabelBottomNavigation from './LabelBottomNavigation';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import BusinessDetails from './pages/BusinessDetails';
import B2B from './pages/B2B';
import Education from './pages/Education';
import Schools from './pages/Schools';
import Sidebar from './Sidebar';
import GovernmentSchemes from './pages/GovernmentSchemes';

// Create a theme instance with improved compatibility
const theme = createTheme({
  palette: {
    background: {
      default: '#ffffff',
    },
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
    },
    secondary: {
      main: '#ff4081',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      'Arial',
      'sans-serif'
    ].join(','),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@media print': {
          '*': {
            colorAdjust: 'exact',
          },
        },
        html: {
          textSizeAdjust: '100%',
        },
      },
    },
  },
});

const LoadingFallback = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <CircularProgress />
  </Box>
);

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event?.type === 'keydown' && (event?.key === 'Tab' || event?.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleClose = () => {
    setDrawerOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div style={{ 
          minHeight: '100vh',
          backgroundColor: '#ffffff',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <ResponsiveAppBar toggleDrawer={toggleDrawer} />
          <IconButton
            color="inherit"
            aria-label="Menu"
            edge="start"
            onClick={toggleDrawer(true)}
            style={{ position: 'absolute', top: 16, left: 16 }}
            title="Open menu"
          >
            <MenuIcon aria-hidden="true" />
          </IconButton>
          <Drawer 
            anchor="left" 
            open={drawerOpen} 
            onClose={handleClose}
            aria-label="Navigation drawer"
          >
            <Sidebar onClose={handleClose} />
          </Drawer>
          <main style={{ flex: 1 }}>
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:id" element={<CategoryPage />} />
                <Route path="/business/:id" element={<BusinessDetails />} />
                <Route path="/government-schemes" element={<GovernmentSchemes />} />
                <Route path="/leads" element={<div>Leads Page</div>} />
                <Route path="/b2b" element={<B2B />} />
                <Route path="/education" element={<Education />} />
                <Route path="/education/schools" element={<Schools />} />
                <Route path="/education/colleges" element={<div>Colleges Page</div>} />
                <Route path="/education/hobbies" element={<div>Hobbies Page</div>} />
                <Route path="/education/coaching" element={<div>Coaching Page</div>} />
                <Route path="/education/vocational-training" element={<div>Vocational Training Page</div>} />
                <Route path="/pay" element={<div>Payment Page</div>} />
                <Route path="/news" element={<div>News Page</div>} />
                <Route path="/more" element={<div>More Options</div>} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
          </main>
          <LabelBottomNavigation />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;