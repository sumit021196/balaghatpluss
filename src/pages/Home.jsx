import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';


const Home = () => {
  const categories = ["Restaurants", "Shops", "Services", "Health & Wellness"];

  return (

    <div className="home">
     
      <h1>Welcome Plus</h1>
      <p>Explore businesses by category:</p>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
      <DeleteIcon />
    </div>
  );
};

export default Home;