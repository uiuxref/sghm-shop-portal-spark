
import React from 'react';

interface ProductTileProps {
  name: string;
  image: string;
}

const ProductTile = ({ name, image }: ProductTileProps) => {
  return (
    <div className="product-tile relative rounded-lg overflow-hidden shadow-lg h-40 md:h-48">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <h3 className="text-white font-bold text-xl">{name}</h3>
      </div>
    </div>
  );
};

export default ProductTile;
