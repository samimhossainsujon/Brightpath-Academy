import React, { useState, useEffect, useRef } from 'react';
import HeroSlide from './HeroSlide';

const slides = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Nurturing Young Minds for a Bright Future',
    subtitle: 'At Brightpath Academy, we combine play-based learning with academic excellence to inspire a lifelong love of learning.',
    ctaText: 'Enroll Now',
    ctaLink: '/admissions/enroll',
    overlayOpacity: 60
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/8617636/pexels-photo-8617636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Developing Critical Thinkers and Future Leaders',
    subtitle: 'Our primary school curriculum focuses on core academics while fostering creativity, collaboration, and problem-solving skills.',
    ctaText: 'Explore Primary School',
    ctaLink: '/primary-school',
    overlayOpacity: 60
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/8471995/pexels-photo-8471995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'State-of-the-Art Facilities for Optimal Learning',
    subtitle: 'From our interactive classrooms to outdoor play areas, every space is designed to enhance the educational experience.',
    ctaText: 'View Our Campus',
    ctaLink: '/about/facilities',
    overlayOpacity: 60
  }
];

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);
  
  const startSlideshow = () => {
    intervalRef.current = window.setInterval(() => {
      if (!isPaused) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, 5000);
  };
  
  const stopSlideshow = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };
  
  useEffect(() => {
    startSlideshow();
    
    return () => {
      stopSlideshow();
    };
  }, [isPaused]);
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    stopSlideshow();
    startSlideshow();
  };
  
  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="min-w-full shrink-0">
              <HeroSlide {...slide} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-0 right-0 z-10 flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full border border-white transition-all ${
              currentSlide === index 
                ? 'bg-white' 
                : 'bg-transparent hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Previous/Next Buttons */}
      <button
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/30"
        onClick={() => {
          setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
          stopSlideshow();
          startSlideshow();
        }}
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6"/>
        </svg>
      </button>
      <button
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/30"
        onClick={() => {
          setCurrentSlide((prev) => (prev + 1) % slides.length);
          stopSlideshow();
          startSlideshow();
        }}
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 18 6-6-6-6"/>
        </svg>
      </button>
    </div>
  );
};

export default HeroCarousel;