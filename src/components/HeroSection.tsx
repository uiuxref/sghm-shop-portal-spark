
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Facebook, Instagram, Youtube, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import TiktokIcon from './icons/TiktokIcon';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 overflow-hidden">
      {/* Abstract shapes background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full bg-purple-500/20 blur-3xl -top-20 -right-20 animate-float"></div>
        <div className="absolute w-96 h-96 rounded-full bg-blue-500/20 blur-3xl bottom-10 -left-20 animate-float-delayed"></div>
        <div className="absolute w-64 h-64 rounded-full bg-indigo-600/20 blur-3xl top-1/2 left-1/3 animate-pulse"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 py-12 md:py-24 flex items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Logo animation wrapper */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-4"
          >
            <div className="inline-block relative">
              <Sparkles className="absolute -top-6 -right-6 text-yellow-300 w-6 h-6 animate-sparkle" />
              <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
                SGHM.SHOP
              </h1>
            </div>
          </motion.div>
          
          {/* Tagline animation */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl md:text-2xl text-purple-100 font-light mb-8"
          >
            Just a designer exploring new ideas!
          </motion.p>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-medium py-6 px-8 rounded-full text-lg flex items-center gap-2 shadow-lg shadow-purple-900/30"
              onClick={() => window.open('https://www.redbubble.com/people/Shubhikaa/shop', '_blank')}
            >
              Shop on Redbubble 
              <ArrowRight className="ml-1 animate-bounce-horizontal" />
            </Button>
          </motion.div>
          
          {/* Social Media Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-12 flex items-center justify-center gap-6"
          >
            {[
              { icon: <Instagram size={24} />, name: "Instagram", url: "#" },
              { icon: <Youtube size={24} />, name: "Youtube", url: "https://youtube.com/@sghmshop?si=_-oW3GhHiZ-3Ntbr" },
              { icon: <Facebook size={24} />, name: "Facebook", url: "https://www.facebook.com/share/1QQnFKz7gf/" },
              { icon: <TiktokIcon size={24} />, name: "TikTok", url: "https://www.tiktok.com/@sghm.shop" }
            ].map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full cursor-pointer transition-colors duration-300 backdrop-blur-sm"
                title={social.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + (index * 0.1) }}
              >
                <span className="text-white">{social.icon}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
