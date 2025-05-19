

import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { GigPurchaseSidebar } from '../cmps/GigPurchaseSidebar'
import { ReviewIndex } from './ReviewIndex'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { useLocation } from 'react-router-dom'

export function GigDetails() {
  const { gigId } = useParams()
  const { state } = useLocation()
  const gig = state?.gig
  if (!gig) return <div>אין נתוני gig להצגה</div>

  // המערך imgUrl מגיע ישר מה-data שלכם
  const images = Array.isArray(gig.imgUrl) && gig.imgUrl.length > 0
    ? gig.imgUrl
    : ['https://www.looper.com/img/gallery/phoebe-buffays-friends-timeline-explained/l-intro-1621661137.jpg']
  const defaultImg = 'https://www.looper.com/img/gallery/phoebe-buffays-friends-timeline-explained/l-intro-1621661137.jpg'

  console.log("####", gig)
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

          
          <div className="carousel-container">
        <Carousel
          infiniteLoop
          showIndicators={false}
          thumbWidth={100}
          showStatus={false}
          renderArrowNext={(onClick, hasNext) =>
            hasNext && (
              <button className="next-btn arrow" onClick={onClick}>
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            )
          }
          renderArrowPrev={(onClick, hasPrev) =>
            hasPrev && (
              <button className="prev-btn arrow" onClick={onClick}>
                <i className="fa-solid fa-chevron-left"></i>
              </button>
            )
          }
        >
          {images.map((src, idx) => (
            <img className='carousel-row-images'
              key={idx}
              src={src}
              alt={`${gig.title}${idx + 1}`}
              onError={e => { e.currentTarget.src = defaultImg }}
            />
          ))}
        </Carousel>
      </div>

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

