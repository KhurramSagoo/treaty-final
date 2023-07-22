// Cat.jsx
import React, { useEffect, useState } from "react";
import Block from "./Block.jsx";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { fetchMovies } from "../Api.js";
import "./Cat.css";

const Cat = () => {
  const settings = {
    items: 1,
    loop: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1200,
    smartSpeed: 500,
    dotClass: "owl-dot",
    dotsClass: "owl-dots",
    dotContainerClass: "owl-dot-container",
  };

  const [loading, setLoading] = useState(true);
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const moviesData = await fetchMovies();
      setMoviesData(moviesData);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="home">
      {loading ? (
        <div className="carousel__skeleton skeleton"></div>
      ) : (
        <OwlCarousel className="owl-theme" {...settings}>
          {moviesData?.slice(0, 15).map((movie) => (
            <Block
              title={movie.title || movie.original_title}
              backdrop_path={movie.backdrop_path}
              overview={movie.overview}
              key={movie.id}
            />
          ))}
        </OwlCarousel>
      )}
    </div>
  );
};

export default Cat;
