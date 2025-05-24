import React, { useState } from 'react';


export function GigSlider({ gig }) {
  if (!gig || !gig.imgUrl || gig.imgUrl.length === 0) {
    return <div>No images available</div>;
  }

  const images = Array.isArray(gig.imgUrl) ? gig.imgUrl : [gig.imgUrl];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="slider">
    {currentIndex > 0 && (
      <span className="arrow prev" onClick={prevSlide}></span>
    )}

      <div className="slides preview">
        <div className="slide-item">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1} of ${images.length}`}
            className="box-image-ratio"
          />
        </div>
      </div>

      <span className="arrow next" onClick={nextSlide}></span>

      <ul className="slider-indicator">
        {images.map((_, index) => (
          <li key={index} className={index === currentIndex ? 'dot active' : 'dot'}></li>
        ))}
      </ul>
    </div>
  );
}

