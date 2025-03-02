import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ResponsiveAppBar from './ResponsiveAppBar';
import LabelBottomNavigation from './LabelBottomNavigation';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import BusinessDetails from './pages/BusinessDetails';

// Create a theme instance
const theme = createTheme({
  palette: {
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
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div style={{ paddingBottom: '56px' }}> {/* Space for bottom navigation */}
          <ResponsiveAppBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:id" element={<CategoryPage />} />
            <Route path="/business/:id" element={<BusinessDetails />} />
            <Route path="/leads" element={<div>Leads Page</div>} />
            <Route path="/b2b" element={<div>B2B Page</div>} />
            <Route path="/pay" element={<div>Payment Page</div>} />
            <Route path="/news" element={<div>News Page</div>} />
            <Route path="/more" element={<div>More Options</div>} />
          </Routes>
          <LabelBottomNavigation />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
