import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
  const { categoryId } = useParams();
  
  const businesses = categoryId === "health" ? [
    { id: 1, name: "City Hospital", address: "123 Main Road, Balaghat", contact: "+91 12345 67890" },
    { id: 2, name: "Balaghat Clinic", address: "456 Second Street, Balaghat", contact: "+91 98765 43210" },
    { id: 3, name: "HealthCare Center", address: "789 Third Avenue, Balaghat", contact: "+91 11223 33445" },
    { id: 4, name: "LifeLine Hospital", address: "321 Fourth Lane, Balaghat", contact: "+91 99887 77665" }
  ] : [
    { id: 1, name: "Business 1" },
    { id: 2, name: "Business 2" },
    { id: 3, name: "Business 3" }
  ];

  return (
    <div className="category-page">
      <h1>Category: {categoryId}</h1>
      <ul>
        {businesses.map((business) => (
          <li key={business.id}>
            <h2>{business.name}</h2>
            {business.address && <p><strong>Address:</strong> {business.address}</p>}
            {business.contact && <p><strong>Contact:</strong> {business.contact}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CategoryPage;