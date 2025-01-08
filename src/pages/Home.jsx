import React from 'react';

const Home = () => {
  const categories = ["Restaurants", "Shops", "Services", "Health & Wellness"];

  return (

    <div className="home">
     
      <h1>Welcome to the Balaghat Plus</h1>
      <p>Explore businesses by category:</p>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;