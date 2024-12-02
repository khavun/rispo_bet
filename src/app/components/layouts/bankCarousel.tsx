import React, { useState, useEffect } from 'react';
import './css/BankCarousel.css'; // Import the CSS file

const BankCarousel = () => {
  const images = [
    "https://cdn.linkadsku.xyz/bankrp/bca.gif",
    "https://cdn.linkadsku.xyz/bankrp/bni.gif",
    "https://cdn.linkadsku.xyz/bankrp/bri.gif",
    "https://cdn.linkadsku.xyz/bankrp/bsi.gif",
    "https://cdn.linkadsku.xyz/bankrp/cimb.gif",
    "https://cdn.linkadsku.xyz/bankrp/dana.gif",
    "https://cdn.linkadsku.xyz/bankrp/danamon.gif",
    "https://cdn.linkadsku.xyz/bankrp/gopay.gif",
    "https://cdn.linkadsku.xyz/bankrp/linkaja.gif",
    "https://cdn.linkadsku.xyz/bankrp/mandiri.gif",
    "https://cdn.linkadsku.xyz/bankrp/maybank.gif",
    "https://cdn.linkadsku.xyz/bankrp/ovo.gif",
    "https://cdn.linkadsku.xyz/bankrp/panin.gif",
    "https://cdn.linkadsku.xyz/bankrp/permata.gif",
    "https://cdn.linkadsku.xyz/bankrp/qris.gif",
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  // Change the active slide every 2 seconds (adjustable)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className="carousel-container">
      <div
        className="carousel-slide"
        style={{
          transform: `translateX(-${activeSlide * (100 / 4)}%)`, // Adjust to show 4 images
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="carousel-item">
            <img src={image} alt={`Bank Image ${index}`} className="carousel-img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BankCarousel;
