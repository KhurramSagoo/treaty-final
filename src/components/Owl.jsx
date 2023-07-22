import React from 'react';
// import OwlCarousel from 'react-owl-carousel2';
// import 'react-owl-carousel2/style.css';
import photo1 from '../assets/group1.png'
import photo2 from '../assets/group2.png'
import photo3 from '../assets/group2.png'

const Owl = () => {
  const options = {
    items: 1,
    nav: true,
    rewind: true,
    autoplay: true,
  };
  const item={
    items:[
      <img src={photo1} alt="The Last of us" />,
      <img src={photo2} alt="The Last of us" />,
      <img src={photo3} alt="The Last of us" />,
    ]
  }

  return (
    <>
      <div className="App">
        {item.items}
      </div>
    </>
  );
}

export default Owl;
