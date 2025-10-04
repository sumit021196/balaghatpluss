import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Drawer, IconButton, CircularProgress, Box, GlobalStyles } from '@mui/material';
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
const CaretakerServices = lazy(() => import('./pages/CaretakerServices'));
// More section pages
const MorePage = lazy(() => import('./pages/More'));
const AboutUs = lazy(() => import('./pages/More/AboutUs'));
const ContactUs = lazy(() => import('./pages/More/ContactUs'));
const PrivacyPolicy = lazy(() => import('./pages/More/PrivacyPolicy').then(module => ({ default: module.default })));
const TermsConditions = lazy(() => import('./pages/More/TermsConditions'));
const HelpFAQ = lazy(() => import('./pages/More/HelpFAQ'));

// Create a modern theme with improved design system
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#4A6CF7',
      light: '#7B91FF',
      dark: '#2D4AE0',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#FF6B6B',
      light: '#FF8E8E',
      dark: '#E04A4A',
    },
    background: {
      default: '#F8FAFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.3,
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.75rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
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

  // Global styles
  const globalStyles = {
    '.MuiButton-root': {
      borderRadius: '8px',
      boxShadow: 'none',
      textTransform: 'none',
      fontWeight: 500,
      padding: '8px 20px',
      '&:hover': {
        boxShadow: '0 4px 12px rgba(74, 108, 247, 0.2)',
      },
    },
    '.MuiCard-root': {
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
      },
    },
    '.MuiAppBar-root': {
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      <Router>
        <Box 
          sx={{
            minHeight: '100vh',
            backgroundColor: 'background.default',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              height: '300px',
              background: 'linear-gradient(135deg, rgba(74, 108, 247, 0.1) 0%, rgba(255, 107, 107, 0.1) 100%)',
              zIndex: -1,
              pointerEvents: 'none',
            },
          }}
        >
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
                <Route path="/car-hire" element={<CarHire />} />
                <Route path="/repair-services" element={<RepairServices />} />
                <Route path="/farmer-services" element={<FarmerServices />} />
                <Route path="/caretaker" element={<CaretakerServices />} />
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
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;