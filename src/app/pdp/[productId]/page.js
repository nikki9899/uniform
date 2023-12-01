// components/Pdp.js
"use client"
import React from 'react';
import { fetchPopularSearches } from '@/utils/api';
import Line from '@/components/atoms/horizontal-line';
import ProductDetails from '@/components/molecules/productDetails';
import Tabs from '@/components/atoms/Tabs/tabs';
import Popular from '@/components/molecules/popular';

const Pdp = ({ params: { productId } }) => {
  const heading = 'related products';

  // Use React hooks to manage state
  const [popularSearches, setPopularSearches] = React.useState([]);

  React.useEffect(() => {
    // Fetch data when the component mounts
    fetchPopularSearches()
      .then((data) => setPopularSearches(data))
      .catch((error) => {
        // Handle errors here
        console.error('Error in Pdp component:', error);
      });
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <ProductDetails />
      <Line />
      <Tabs />
      <Line />
      <Popular popularSearches={popularSearches} />
    </div>
  );
};

export default Pdp;

