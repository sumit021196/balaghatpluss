import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Drawer, IconButton, CircularProgress, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ResponsiveAppBar from './ResponsiveAppBar';
import LabelBottomNavigation from './LabelBottomNavigation';
import Sidebar from './Sidebar';
// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'));
const CategoryPage = lazy(() => import('./pages/CategoryPage'));
const BusinessDetails = lazy(() => import('./pages/BusinessDetails'));
const B2B = lazy(() => import('./pages/B2B'));
const Education = lazy(() => import('./pages/Education'));
const Schools = lazy(() => import('./pages/Schools'));
const GovernmentSchemes = lazy(() => import('./pages/GovernmentSchemes'));
const News = lazy(() => import('./pages/News'));
const CarHire = lazy(() => import('./pages/CarHire'));
const LocalProducts = lazy(() => import('./pages/LocalProducts'));
const Doctors = lazy(() => import('./pages/Doctors'));
const HireFire = lazy(() => import('./pages/HireFire'));
const Jobs = lazy(() => import('./pages/Jobs'));
const RepairServices = lazy(() => import('./pages/RepairServices'));
const FarmerServices = lazy(() => import('./pages/FarmerServices'));
const Legal = lazy(() => import('./pages/Legal'));
// More section pages
const MorePage = lazy(() => import('./pages/More'));
const AboutUs = lazy(() => import('./pages/More/AboutUs'));
const ContactUs = lazy(() => import('./pages/More/ContactUs'));
const PrivacyPolicy = lazy(() => import('./pages/More/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/More/TermsConditions'));
const HelpFAQ = lazy(() => import('./pages/More/HelpFAQ'));

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
                <Route path="/schools" element={<Schools />} />
                
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/hire-fire" element={<HireFire />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/repair-services" element={<RepairServices />} />
                <Route path="/farmer-services" element={<FarmerServices />} />
                <Route path="/legal" element={<Legal />} />
                <Route path="/education/schools" element={<Schools />} />
                <Route path="/education/colleges" element={<div>Colleges Page</div>} />
                <Route path="/education/hobbies" element={<div>Hobbies Page</div>} />
                <Route path="/education/coaching" element={<div>Coaching Page</div>} />
                <Route path="/education/vocational-training" element={<div>Vocational Training Page</div>} />
                <Route path="/pay" element={<div>Payment Page</div>} />
                
                {/* More Section Routes */}
                <Route path="/more" element={<MorePage />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsConditions />} />
                <Route path="/help" element={<HelpFAQ />} />
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