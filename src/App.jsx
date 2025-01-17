import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './ResponsiveAppBar';
import Footer from './components/Footer';
import SearchBar from "./SearchBar";

import RecipeReviewCard from './RecipeReviewCard';
import IconLabelGrid from './IconLabelGrid';
import LabelBottomNavigation from './LabelBottomNavigation';
import CategoryDetailPage from './CategoryDetailPage';

function App() {
  const handleSearch = (query) => {
    console.log("Search query:", query);
    // Add logic for handling search results, e.g., filtering or API calls
  };

  return (
    <Router>
      <div className="App">
        <ResponsiveAppBar />
        <div style={{ padding: '20px' }}>
          {/* Search Bar */}
          <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
            <SearchBar onSearch={handleSearch} />
          </div>

          {/* Routes */}
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <IconLabelGrid />
                  <RecipeReviewCard />
                </>
              }
            />
            <Route path="/category/:categoryName" element={<CategoryDetailPage />} />
          </Routes>
        </div>

        {/* Footer and Bottom Navigation */}
        <Footer />
        <LabelBottomNavigation />
      </div>
    </Router>
  );
}

export default App;
