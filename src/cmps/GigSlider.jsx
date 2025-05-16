// import React from "react";
// import Slider from "react-slick";
// import { NextBtn } from "./NextBtn.jsx";
// import { PrevBtn } from "./PrevBtn.jsx";
// import { Link } from "react-router-dom";
// const defaultImg = 'https://res.cloudinary.com/dgsfbxsed/image/upload/v1698663092/defaultGigsImg_vjtk9e.webp'
// const defaultImg2 = 'https://res.cloudinary.com/dgsfbxsed/image/upload/v1698914668/default-img-3_afl2mb.webp'
// const defaultImg3 = 'https://res.cloudinary.com/dgsfbxsed/image/upload/v1698914668/default-img-1_qhfps6.webp'

// export function GigsSlider({ gigs }) {
//   if (!gigs.imgUrl.length) gigs.imgUrl= [defaultImg, defaultImg2, defaultImg3]

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 800,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     prevArrow: <PrevBtn />,
//     nextArrow: <NextBtn />,
//   }


//   return (

//     <div className="img-container">
//       <Slider {...settings}>
//         {gigs.imgUrl.map((imgUrlr, i) => (
//           <Link key={gigs._id} to={`/gigs/${gigs._id}`}>
//             <img className="gigs-img" src={imgUrlr} alt="gigs-img" onError={e => e.currentTarget.src = defaultImg} />
//           </Link>
//         ))}
//       </Slider>
//     </div>


//   )
// }

import React, { useState } from 'react';

export function GigSlider({ gig }) {
  if (!gig || !gig.imgUrl || gig.imgUrl.length === 0) {
    return <div>No images available</div>;  
  }

  const images = Array.isArray(gig.imgUrl) ? gig.imgUrl : [gig.imgUrl];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = (event) => {
    event.stopPropagation()
    setCurrentIndex(prev => (prev + 1) % images.length)
  }
  const prevSlide = (event) => {
    event.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  return (
    <div className="slider">
      <span className="arrow prev" onClick={prevSlide}>‹</span>
      <div className="slides">
        <div className="slide-item">
          <img
            src={images[currentIndex]}
            alt={`gig slide ${currentIndex + 1}`}
            className="box-image-ratio"
          />
        </div>
      </div>
      <span className="arrow next" onClick={nextSlide}>›</span>
      <ul className="slider-indicator">
      {images.map((image, index)=> (
          <li key={index} className={index === currentIndex ? "dot active" : "dot"}></li>
        ))}
      </ul>
    </div>
  );
}


