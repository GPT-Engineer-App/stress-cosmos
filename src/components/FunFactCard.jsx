import React from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchCatFact = async () => {
  const response = await fetch('https://catfact.ninja/fact');
  if (!response.ok) {
    throw new Error('Failed to fetch cat fact');
  }
  return response.json();
};

const FunFactCard = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['catFact'],
    queryFn: fetchCatFact,
  });

  if (isLoading) return <div className="text-center">Loading fun fact...</div>;
  if (error) return <div className="text-center text-red-500">Error: {error.message}</div>;

  return (
    <div className="bg-yellow-100 rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-2xl font-semibold mb-2">Fun Cat Fact</h3>
      <p className="text-gray-800">{data.fact}</p>
    </div>
  );
};

export default FunFactCard;