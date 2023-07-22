// Block.jsx
import React from "react";
import "./Block.css"; // Create a CSS file for styling the slide content

const Block = (props) => {
      console.log(props);
  return (
    <div className="block-container">
      {/* Use the backdrop_path field as the background image */}
      {props.backdrop_path && (
        <div
          className="backdrop-image"
          style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${props.backdrop_path})` }}
        >
          <div className="content">
            <h2>{props.title}</h2>
            <p>{props.overview}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Block;
