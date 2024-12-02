import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import './css/slider.css'; 

export default function Slider() {
    const images : { [key: number]: string } = {
        0: "https://cdn.linkadsku.xyz/rupiah/SLIDE%20RP/PASARANBARURP.webp",
        1: "https://cdn.linkadsku.xyz/rupiah/SLIDE%20RP/RP%20BET%20400%20PERAK.webp",
        2: "https://cdn.linkadsku.xyz/rupiah/SLIDE%20RP/MAHJONG%20RP.webp",
        3: "https://cdn.linkadsku.xyz/rupiah/SLIDE%20RP/REVRPTO%20(1).webp",
        4: "https://cdn.linkadsku.xyz/rupiah/SLIDE%20RP/RP%20BULANAN.webp",
        5: "https://object-d001-cloud.cloudstoragesharingservice.com/banner/image/games/promotion/Slide-Banner-Homepage-840x480%20(1).jpg",
        6: "https://landingsplash.xyz/banner/image/banner/photo_2024-01-17_15-12-52.jpg",
        7: "https://object-d001-cloud.cloudstoragesharingservice.com/banner/image/games/promotion/Slide-Banner-Homepage-840x480.jpg",
        8: "https://landingsplash.xyz/banner/image/promotion/Slide-Banner-Homepage-840x480.jpg",
        9: "https://landingsplash.xyz/banner/image/promotion/IDNTOTOSYD.jpg",
        10: "https://landingsplash.xyz/banner/image/promotion/IDNTOTTOHK.jpg",
    };

    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % Object.keys(images).length);
        }, 10000); 

        return () => clearInterval(interval); 
    }, []);

    

    return (
        <Box
            sx={{
                width: "100%", 
                maxWidth: "840px", 
                height: "auto", 
                aspectRatio: "840 / 482", 
                overflow: "hidden",
                position: "relative",
                margin: "0 auto", 
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    transform: `translateX(-${activeSlide * 100}%)`,
                    transition: 'transform 0s linear',
                }}
                >
                {[...Array(Object.keys(images).length)].map((_, index) => (
                    <Box key={index}
                        sx={{
                            flex: '0 0 100%',
                            backgroundColor: index % 2 === 0 ? 'lightblue' : 'lightgreen',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        >
                        <Box
                            component="img"
                            src={images[index]}
                            alt={`Slide ${index + 1}`}
                            style={{
                            width: '100%',
                            height: 'auto', 
                            }}
                        />
                    </Box>
                ))}
            </Box>
            <Box className="border-bottom" sx={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "5px", backgroundColor: '#e5bd38' }} />
        </Box>
    );
}
