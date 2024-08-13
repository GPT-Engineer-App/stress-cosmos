import React from 'react';
import CatHero from '../components/CatHero';
import CatInfo from '../components/CatInfo';
import FunFactCard from '../components/FunFactCard';
import CatGallery from '../components/CatGallery';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <CatHero />
      <div className="container mx-auto px-4 py-8">
        <CatInfo />
        <FunFactCard />
        <CatGallery />
      </div>
    </div>
  );
};

export default Index;