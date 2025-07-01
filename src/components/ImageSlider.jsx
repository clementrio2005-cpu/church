import React, { useState, useEffect } from "react";

import church1 from '../assets/church1.jpg'
import church2 from '../assets/church2.jpg'

const SimpleCarousel = () => {

  const images = [
    church1, // Replace with your actual image paths
    church2
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change every 2 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div className="w-full h-[300px] md:h-[350px] overflow-hidden rounded-xl">
      <img
        src={images[currentIndex]}
        alt="carousel"
        className="w-full h-full object-cover transition-all duration-700"
      />
    </div>
  );
};

export default SimpleCarousel;
