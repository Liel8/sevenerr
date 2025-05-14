import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { loadGig } from '../store/actions/gig.actions'
import { GigPurchaseSidebar } from '../cmps/GigPurchaseSidebar'
import { ReviewIndex } from './ReviewIndex'

export function GigDetails() {
  const { gigId } = useParams()
  const gig = useSelector(storeState => storeState.gigModule.gig)

  useEffect(() => {
    loadGig(gigId)
  }, [gigId])

  if (!gig) return <div>Loading...</div>

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
        {gig?.category}
        </a>
      </article>

      <section className="top-details container full main-layout"> 
        <div className="owner-details-container-main">
          <h1>{gig.title}</h1>
        <div className="profile-container">
              <img src={gig.owner.imgUrl} alt="owner-img" class="owner-profile-img-meduim"/>
              <div className="owner-details">
                  <div className="user-container">
                      <h3 className="user-title">{gig.owner.fullname}</h3>
                      <span className="username">@{gig.owner.fullname}_10</span>
                  </div>
                  <div className="star-wrapper">
                      <span className="star-svg">
                          <img src="/icons/star-icon.svg" alt="star-svg" className="star"/>
                      </span>
                      <span className="owner-rate">{gig.owner.rate}</span>
                      <span className="owner-number-rates">(224)</span>
                      <span className="divider">|</span>
                      <span className="queue">10 Orders in Queue</span>
                  </div>
              </div>
          </div>
          <img src={gig.imgUrl} alt={gig.title} className="gig-main-img" />
          <h3>About this gig</h3>
          <p className="gig-description">{gig.description}</p>
          <h3>About the seller</h3>
          <div className="profile-container">
              <img src={gig.owner.imgUrl} alt="owner-img" class="owner-profile-img-meduim"/>
              <div className="owner-details">
                  <div className="user-container">
                      <h3 className="user-title">{gig.owner.fullname}</h3>
                      <span className="username">@{gig.owner.fullname}_10</span>
                  </div>
                  <div className="star-wrapper">
                    <p>Happy to work with you</p>
                      <span className="star-svg">
                          <img src="/icons/star-icon.svg" alt="star-svg" className="star"/>
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
