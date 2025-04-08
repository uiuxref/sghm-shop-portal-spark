
import React from 'react';

interface ProductTileProps {
  name: string;
  image: string;
  icon?: React.ReactNode;
}

const ProductTile = ({ name, image, icon }: ProductTileProps) => {
  return (
    <div className="product-tile relative rounded-lg overflow-hidden shadow-lg h-40 md:h-48 group">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="flex items-center">
          {icon}
          <h3 className="text-white font-bold text-xl">{name}</h3>
        </div>
      </div>
      
      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <p className="text-white font-medium">Explore</p>
      </div>
    </div>
  );
};

export default ProductTile;
