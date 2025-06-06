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

  const level = Number(gig.owner.level) || 0

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
        <a title="Category" href={`/gigs/${gig.category}`}>
          {gig.category}
        </a>
      </article>

      <section className="top-details container full main-layout">
        <div className="owner-details-container-main">
          <h1>{gig.title}</h1>
          <div className="profile-container">
            <img
              src={gig.owner.imgUrl}
              alt="owner-img"
              className="owner-profile-img-meduim"
            />
            <div className="owner-details">
              <div className="user-container">
                <h3 className="user-title">{gig.owner.fullname}</h3>
                <div className="level-container">
                  <p className="level-label">Level {level}</p>
                  <div className="level-diamonds">
                    {[1,2,3].map(n => (
                      <svg key={n}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 10 10"
                            width="10" height="10"
                            fill={n <= level ? 'currentColor' : '#E4E5E7'}>
                        <path d="M4.839.22a.2.2 0 0 1 .322 0l1.942 2.636a.2.2 0 0 0 .043.043L9.782 4.84a.2.2 0 0 1 0 .322L7.146 7.105a.2.2 0 0 0-.043.043L5.161 9.784a.2.2 0 0 1-.322 0L2.897 7.148a.2.2 0 0 0-.043-.043L.218 5.163a.2.2 0 0 1 0-.322l2.636-1.942a.2.2 0 0 0 .043-.043L4.839.221Z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="queue">10 orders in queue</p>
              </div>
              <div className="star-wrapper">
                {/* <span className="star-svg">
                  <img
                    src="/icons/star-icon.svg"
                    alt="star"
                    className="star"
                  />
                </span> */}
                {Array(Math.round(gig.owner.rate))
                  .fill(null)
                  .map((_, i) => (
                    <img
                      key={i}
                      src="/icons/star-icon.svg"
                      alt="star"
                      className="star"/>
                  ))}
                <span className="owner-rate">{gig.owner.rate}</span>
                <span className="owner-number-rates">({gig.reviews.length} reviews)</span>
                {/* <span className="divider">|</span> */}
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

          <h3>Get to know {gig.owner.fullname}</h3>

          <div className="below-the-fold-experiential-seller-card-order">
            <div className="seller-header">
                <div className="user-profile-image">
                  <img
                    src={gig.owner.imgUrl}
                    alt={gig.owner.fullname}
                    className="profile-pict-img"
                  />
                </div>
                <div className="seller-info-container">
                  <div className="seller-info">
                    <h4 className="seller-name">{gig.owner.fullname}</h4>
                    {/* show “Fiverr’s Choice” if they’re a premium seller */}
                    {/* {gig.owner.level?.includes("premium") && (
                      <span className="seller-badge">sevenerr’s Choice</span>
                    )} */}
                  </div>
                  <div className="seller-rating">
                    <div className="stars">
                      <img src="/icons/star-icon.svg" alt="star" className="star"/>
                    </div>
                      <strong className="rating-score">{gig.owner.rate}</strong>
                      <span className="ratings-count">({gig.reviews.length})</span>
                      <span class="divider">|</span>
                      <div className="level-container">
                        <p className="level-label">Level  {level}</p>
                        <div className="level-diamonds">
                          {[1,2,3].map(n => (
                            <svg key={n}
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 10 10"
                                  width="10" height="10"
                                  fill={n <= level ? 'currentColor' : '#E4E5E7'}>
                              <path d="M4.839.22a.2.2 0 0 1 .322 0l1.942 2.636a.2.2 0 0 0 .043.043L9.782 4.84a.2.2 0 0 1 0 .322L7.146 7.105a.2.2 0 0 0-.043.043L5.161 9.784a.2.2 0 0 1-.322 0L2.897 7.148a.2.2 0 0 0-.043-.043L.218 5.163a.2.2 0 0 1 0-.322l2.636-1.942a.2.2 0 0 0 .043-.043L4.839.221Z"/>
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                </div>
            </div>

              <button className="contact-btn">Contact me</button>
            <div className="seller-card">

              <ul className="user-stats">
                <li>From <strong>{gig.country}</strong></li>
                <li>Member since <strong>Jan 2021</strong></li>
                <li>Avg. response time <strong>1 hour</strong></li>
                <li>Last delivery <strong>about 6 hours</strong></li>
                <li>Languages <strong>English</strong></li>
              </ul>

              <article className="seller-desc">
                <div className="inner">
                  Hi everyone. My name is {gig.owner.fullname} and I am an experienced
                  graphics designer having more than 8 years of experience in design almost
                  every sort of brand. I always focus on quality rather than quantity.
                  My expertise in Logo designing helps me design modern, unique and amazing
                  logos.
                </div>
              </article>
            </div>
          </div>

          <ReviewIndex reviews={gig.reviews || []} />
        </div>
        <GigPurchaseSidebar gig={gig} />
      </section>
    </section>
  )
}

