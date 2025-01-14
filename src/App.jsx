// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './ResponsiveAppBar';
import Footer from './components/Footer';


import RecipeReviewCard from './RecipeReviewCard';
import IconLabelGrid from './IconLabelGrid';
import LabelBottomNavigation from './LabelBottomNavigation'
import CategoryDetailPage from './CategoryDetailPage';



function App() {
  return (
    <Router>

      <div className="App">

        <ResponsiveAppBar />
        <div style={{ padding: '20px' }}>
          <Routes>


            <Route path="/" 
            element={
              <>
           
            <IconLabelGrid />
        <RecipeReviewCard />
        </>
        } />
            <Route path="/category/:categoryName" element={<CategoryDetailPage />} />

          </Routes>
        </div>
      
        <Footer />
        <LabelBottomNavigation />
      </div>

    </Router>
  );
}

export default App;
