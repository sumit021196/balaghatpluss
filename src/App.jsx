// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from'./ResponsiveAppBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import BusinessDetails from './pages/BusinessDetails';
import RecipeReviewCard from './RecipeReviewCard';
import IconLabelGrid from './IconLabelGrid'; 
import LabelBottomNavigation  from './LabelBottomNavigation'


function App() {
  return (
    <Router>
     
      <div className="App">
      <ResponsiveAppBar/>
      <IconLabelGrid/>
       <RecipeReviewCard/>
     
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/business/:businessId" element={<BusinessDetails />} />
        </Routes>
        <Footer />
        <LabelBottomNavigation/>
      </div>
    
    </Router>
  );
}

export default App;
