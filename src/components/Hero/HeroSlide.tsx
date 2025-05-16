import React from 'react';
import { Link } from 'react-router-dom';

interface HeroSlideProps {
  image: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  overlayOpacity?: number;
}

const HeroSlide: React.FC<HeroSlideProps> = ({
  image, 
  title, 
  subtitle, 
  ctaText, 
  ctaLink,
  overlayOpacity = 50
}) => {
  return (
    <div className="relative h-[600px] w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      
      {/* Overlay */}
      <div 
        className={`absolute inset-0 bg-gray-900`}
        style={{ opacity: overlayOpacity / 100 }}  
      ></div>
      
      {/* Content */}
      <div className="container relative z-10 flex h-full items-center">
        <div className="max-w-2xl text-white">
          <h1 className="mb-4 text-white">{title}</h1>
          <p className="mb-8 text-lg text-gray-100 md:text-xl">{subtitle}</p>
          <Link to={ctaLink} className="btn-accent px-6 py-3 text-base md:text-lg">
            {ctaText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;