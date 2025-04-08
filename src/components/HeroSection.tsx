import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart, Sparkles, Shirt, Phone, Image } from "lucide-react";
import ProductTile from './ProductTile';
import ParticleBackground from './ParticleBackground';

const HeroSection = () => {
  const categories = [
    { name: "T-shirts", image: "https://placekitten.com/300/300", icon: <Shirt className="h-5 w-5 mr-1" /> },
    { name: "Phone Cases", image: "https://placekitten.com/301/300", icon: <Phone className="h-5 w-5 mr-1" /> },
    { name: "Curtains", image: "https://placekitten.com/302/300", icon: <Image className="h-5 w-5 mr-1" /> },
    { name: "Accessories", image: "https://placekitten.com/303/300", icon: <Sparkles className="h-5 w-5 mr-1" /> },
  ];

  return (
    <div className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage: "linear-gradient(to right, #243949 0%, #517fa4 100%)",
          zIndex: -1
        }}
      />
      
      {/* Content Container */}
      <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col h-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="lg:w-1/2 text-white z-10 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">SGHM.SHOP</h1>
            <p className="text-xl md:text-2xl mb-6">Just a designer exploring new ideas!</p>
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
                icon={category.icon}
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
