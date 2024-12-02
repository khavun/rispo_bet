import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import './css/carousel.css';

export default function Carousel() {
  // Image array with provided URLs
  const images = [
    "https://cdn.linkadsku.xyz/framerp/12d.jpg",
    "https://cdn.linkadsku.xyz/framerp/24d.jpg",
    "https://cdn.linkadsku.xyz/framerp/andorra.jpg",
    "https://cdn.linkadsku.xyz/framerp/vegas.jpg",
    "https://cdn.linkadsku.xyz/framerp/12d.jpg",
    "https://cdn.linkadsku.xyz/framerp/24d.jpg",
    "https://cdn.linkadsku.xyz/framerp/andorra.jpg",
    "https://cdn.linkadsku.xyz/framerp/vegas.jpg", // Add more image URLs as necessary
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % (images.length - 3)); // Adjust for 4 images at once
    }, 2000); // Set interval to 10 seconds

    return () => clearInterval(interval); 
  }, []);

  return (
    <Box
      sx={{
        width: "100%", 
        overflow: "hidden",
        position: "relative",
        margin: "0 auto", 
        marginTop: '10px'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          transform: `translateX(-${activeSlide * (100 / 4)}%)`,
          transition: 'transform 1s ease-in-out', 
        }}
      >
        {images.map((image, index) => (
          <Box key={index}
            sx={{
              flex: '0 0 25%', 
              backgroundColor: 'lightblue', 
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              component="img"
              src={image}
              alt={`Slide ${index + 1}`}
              style={{
                width: '100%',
                height: 'auto', 
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
