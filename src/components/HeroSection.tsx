
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart } from "lucide-react";
import ProductTile from './ProductTile';

const HeroSection = () => {
  const categories = [
    { name: "T-shirts", image: "https://placekitten.com/300/300" },
    { name: "Phone Cases", image: "https://placekitten.com/301/300" },
    { name: "Curtains", image: "https://placekitten.com/302/300" },
    { name: "Accessories", image: "https://placekitten.com/303/300" },
  ];

  return (
    <div className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1513094735237-8f2714d57c13?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          zIndex: -1
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient-overlay" style={{ zIndex: -1 }}></div>
      
      {/* Content Container */}
      <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col h-full">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="lg:w-1/2 text-white z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">SGHM.SHOP</h1>
            <p className="text-xl md:text-2xl mb-6">Custom designed products for your unique style.</p>
            <p className="mb-8 text-lg">Discover t-shirts, phone cases, curtains, and more with original designs.</p>
            
            <Button 
              className="cta-button bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-md text-lg flex items-center gap-2"
              onClick={() => window.open('https://www.redbubble.com/people/Shubhikaa/shop', '_blank')}
            >
              Shop on Redbubble <ArrowRight className="ml-2" />
            </Button>
          </div>
          
          {/* Product Categories */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4 mt-8 lg:mt-0">
            {categories.map((category, index) => (
              <ProductTile 
                key={index} 
                name={category.name} 
                image={category.image} 
              />
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-white text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <ShoppingCart className="h-6 w-6" />
            <p className="text-xl">Hundreds of products available on Redbubble</p>
          </div>
          <p className="text-sm opacity-80">All designs by SGHM.SHOP</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
