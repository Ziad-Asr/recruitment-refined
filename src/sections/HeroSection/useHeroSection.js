import { useState, useEffect } from 'react';
import { heroData } from '../../constants/HomePageData';

export const useHeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroData.images.length
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return {
    heroData,
    currentImageIndex
  };
};