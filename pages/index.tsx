import React from 'react';
import Card from '../components/common/card';
import Button from '../components/common/button';

const Home = () => {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Welcome to ALX Listing App</h1>
      
      <Card
        title="Beautiful Beach House"
        description="Enjoy a relaxing stay by the sea."
        imageUrl="/assets/sample-property.jpg" // Place a sample image in public/assets
      />
      
      <div className="mt-4">
        <Button onClick={() => alert('Booked!')}>Book Now</Button>
      </div>
    </main>
  );
};

export default Home;
