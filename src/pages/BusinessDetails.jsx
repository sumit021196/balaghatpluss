import React from 'react';
import { useParams } from 'react-router-dom';

const BusinessDetails = () => {
  const { businessId } = useParams();
  const business = {
    id: businessId,
    name: "Sample Business",
    description: "This is a detailed description of the business.",
    address: "123 Main Street, City, Country",
    contact: "+123 456 7890"
  };

  return (
    <div className="business-details">
      <h1>{business.name}</h1>
      <p>{business.description}</p>
      <p><strong>Address:</strong> {business.address}</p>
      <p><strong>Contact:</strong> {business.contact}</p>
    </div>
  );
};

export default BusinessDetails;