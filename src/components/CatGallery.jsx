import React from 'react';

const catImages = [
  'https://placekitten.com/300/200',
  'https://placekitten.com/301/200',
  'https://placekitten.com/302/200',
  'https://placekitten.com/303/200',
];

const CatGallery = () => {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-semibold mb-4">Cat Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {catImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Cat ${index + 1}`}
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
    </div>
  );
};

export default CatGallery;