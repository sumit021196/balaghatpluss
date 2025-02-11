import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './ResponsiveAppBar';
import Footer from './components/Footer';
import SearchBar from "./SearchBar";
import BlogPage from './BlogPage'; 
import SelectActionCard from './RecipeReviewCard';
import IconLabelGrid from './IconLabelGrid';
import LabelBottomNavigation from './LabelBottomNavigation';
import CategoryDetailPage from './CategoryDetailPage';
import AddBlog from './AddBlog'
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
                  <SelectActionCard />
                </>
              }
            />
            <Route path="/category/:categoryName" element={<CategoryDetailPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/add-blog" element={<AddBlog />} />
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
