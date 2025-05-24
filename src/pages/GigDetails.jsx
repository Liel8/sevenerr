import React, { useState, useRef, useEffect  } from 'react'
import { useParams } from 'react-router-dom'
import { GigPurchaseSidebar } from '../cmps/GigPurchaseSidebar'
import { ReviewIndex } from './ReviewIndex'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { useLocation } from 'react-router-dom'

export function GigDetails() {
  const { gigId } = useParams()
  const { state } = useLocation()
  const gig = state?.gig
  if (!gig) return <div>There are no gigs to show</div>

  const images = Array.isArray(gig.imgUrl) && gig.imgUrl.length > 0
    ? gig.imgUrl
    : ['https://www.looper.com/img/gallery/phoebe-buffays-friends-timeline-explained/l-intro-1621661137.jpg']
  const defaultImg = 'https://www.looper.com/img/gallery/phoebe-buffays-friends-timeline-explained/l-intro-1621661137.jpg'

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };
  
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const thumbsRef = useRef(null);

  return (
    <section className="gig-details main-layout">
      <article className="bread-crumbs full">
        <a className="home" href="/">
          <img
            className="home-icon"
            src="/icons/house-icon.svg"
            alt="Home"
            title="Go to homepage"
          />
        </a>
        <span className="divider">/</span>
        <a title="Category" href="/gig">
          {gig.category}
        </a>
      </article>

      <section className="top-details container full main-layout">
        <div className="owner-details-container-main">
          <h1>{gig.title}</h1>
          {/* פרטי המוכר */}
          <div className="profile-container">
            <img
              src={gig.owner.imgUrl}
              alt="owner-img"
              className="owner-profile-img-meduim"
            />
            <div className="owner-details">
              <div className="user-container">
                <h3 className="user-title">{gig.owner.fullname}</h3>
                <span className="username">@{gig.owner.fullname}_10</span>
              </div>
              <div className="star-wrapper">
                <span className="star-svg">
                  <img
                    src="/icons/star-icon.svg"
                    alt="star"
                    className="star"
                  />
                </span>
                <span className="owner-rate">{gig.owner.rate}</span>
                <span className="owner-number-rates">(224)</span>
                <span className="divider">|</span>
                <span className="queue">10 Orders in Queue</span>
              </div>
            </div>
          </div>

          
          <section className="gig-gallery-component">
            <div className="gallery-slideshow">
              <button className="nav-prev" onClick={handlePrev}></button>
              <button className="nav-next" onClick={handleNext}></button>

              <div className="swipe-events-wrapper">
                <div className="slideshow-component">
                  <div className="slideshow-slide current">
                    <figure className="thumbnail">
                      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="gallery-thumbnails">
              <div className="thumbs-container" ref={thumbsRef}>
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    className={`thumbnail ${idx === currentIndex ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(idx)}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} />
                  </button>
                ))}
              </div>
            </div>

          </section>

          <h3>About this gig</h3>
          <p className="gig-description">{gig.description}</p>

          <h3>About the seller</h3>
          <div className="profile-container">
            <img
              src={gig.owner.imgUrl}
              alt="owner-img"
              className="owner-profile-img-meduim"
            />
            <div className="owner-details">
              <div className="user-container">
                <h3 className="user-title">{gig.owner.fullname}</h3>
                <span className="username">@{gig.owner.fullname}_10</span>
              </div>
              <div className="star-wrapper">
                <p>Happy to work with you</p>
                <span className="star-svg">
                  <img
                    src="/icons/star-icon.svg"
                    alt="star"
                    className="star"
                  />
                </span>
                <span className="owner-rate">{gig.owner.rate}</span>
                <span className="owner-number-rates">(224)</span>
              </div>
            </div>
          </div>
          <ReviewIndex reviews={gig.reviews || []} />
        </div>
        <GigPurchaseSidebar gig={gig} />
      </section>
    </section>
  )
}

