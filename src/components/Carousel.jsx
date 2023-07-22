import React, { useState, useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";

// import photo1 from '../assets/group1.png';
import photo1 from '../assets/group2.png';
import photo2 from '../assets/group2.png';
import photo3 from '../assets/group2.png';
// import photo3 from '../assets/group3.png';
import bg from '../assets/bg.jpg';

const images = [photo1, photo2, photo3];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    // Disable scrolling when the carousel is mounted
    document.body.style.overflow = "hidden";

    // Enable scrolling when the carousel is unmounted
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    const autoPlay = setInterval(() => {
      handleNext();
    }, 3000); // 3 seconds autoplay interval

    return () => clearInterval(autoPlay);
  }, []);

  return (
    <Box
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        // height: "100%", // Adjust this height if needed
      }}
    >
      <Grid
      xs={12} md={12} lg={12}
        container
        alignItems="center"
        justifyContent="center"
        height="100%" 
       width="100%" 
      >
        <Grid item xs={12} md={12} >
          <Box
            sx={{
              width: "85%", // Set the carousel width to 100% of the parent container
              height: "80%", // Adjust the height for the carousel content
              borderRadius: "10px",
              position: "relative",
              top:"25px",
              overflow: "hidden",
              left:"120px"
            }}
          >
                 <Typography
              sx={{
                position:"relative",
                top: "30px",
                left: "150px",
                right: "150px",
                color: "white",
                zIndex: 1,
                textAlign: "justify",
                textAlignLast:"center",
                wordWrap: "break-word",
                fontWeight:"300",
              }}
              variant="h5"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste consequatur eveniet corporis obcaecati commodi, explicabo
              Lorem ipsum dolor ipsum
            </Typography>
            <img
              src={images[activeIndex]}
              alt={`Image ${activeIndex + 1}`}
              style={{
                width: "90%",
                // height: "90%",
                position:"relative",
                top:"0"
                 // objectFit: "cover", 
                // top:"75px",
                // Make the image responsive by maintaining its aspect ratio and covering the entire container
                
                // maxWidth: "100%",
                
                // Ensure the image width does not exceed the container width
              }}
            />
       
          </Box>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" 
      sx={{
        display: { xs: "flex", sm: "flex", md: "flex" }, // Show on xs and sm screens, hide on md and larger screens
      }}

      marginBottom="20px">
        {images.map((img, index) => (
          <Box
            key={index}
            sx={{
              height: "10px", 
              width: "10px", 
              borderRadius: "50%",
              backgroundColor: index === activeIndex ? "black" : "gray",
              cursor: "pointer",
              margin: "5px",
              position:"relative",
              zIndex:"9999"
            }}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default Carousel;
