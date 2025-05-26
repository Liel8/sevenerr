import { useNavigate } from 'react-router-dom'
import { GigSlider } from "./GigSlider";

export function GigPreview({ gig }) {
  const navigate = useNavigate()

  // פונקציה שמנווטת לדף פרטי הגיג ומעבירה את הנתונים במידת הצורך
  const handleNavigation = () => {
    navigate(`/gig/${gig._id}`, { state: { gig } })
  }

  const level = Number(gig.owner?.level) || 0

  return (
    <li className="gig-preview" key={gig._id}>
      <div className="img-container" onClick={handleNavigation} style={{ cursor: 'pointer' }}>
      <button className="like-btn" aria-label="Save to favorites"></button>
        {/* <img className="gig-img" src={gig.imgUrl} alt={gig.title} /> */}
        <GigSlider gig={gig} />
      </div>

      <div className="flex owner-details">
        <div className="flex owner-details-1">
          <div className="owner-info">
            <img
              className="owner-profile-img"
              src={gig.owner?.imgUrl || 'https://example.com/default-profile.jpg'}
              alt={gig.owner?.fullname || 'Unknown'}
            />
            <span className="owner-fullname">{gig.owner?.fullname || 'Unknown'}</span>
          </div>
          <div className="level-container">
            <p className="level-label">Level {level}</p>
            <div className="level-diamonds">
              { [1,2,3].map(n => (
                  <svg
                    key={n}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 10 10"
                    width="10"
                    height="10"
                    fill={n <= level ? 'currentColor' : '#E4E5E7'}
                  >
                    <path d="M4.839.22a.2.2 0 0 1 .322 0l1.942 2.636a.2.2 0 0 0 .043.043L9.782 4.84a.2.2 0 0 1 0 .322L7.146 7.105a.2.2 0 0 0-.043.043L5.161 9.784a.2.2 0 0 1-.322 0L2.897 7.148a.2.2 0 0 0-.043-.043L.218 5.163a.2.2 0 0 1 0-.322l2.636-1.942a.2.2 0 0 0 .043-.043L4.839.221Z"/>
                  </svg>
                ))
              }
            </div>
          </div>
        </div>

        <div className="rating-price">
          <h3 className="owner-gig-title"  onClick={handleNavigation} style={{ cursor: 'pointer' }}>{gig.title}</h3>
          <div className="flex rate-wrapper">
            <svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z">
              </path>
            </svg>
            <span className="owner-rate">{gig.owner?.rate ?? 'No rating'}</span>
            <span className='reviews-count'>({gig.reviews?.length ?? 0})</span>
          </div>
        </div>

        {/* לחיצה על המחיר */}
        <div className="gig-price" onClick={handleNavigation} style={{ cursor: 'pointer' }}>
          From ₪{gig.price}
        </div>
      </div>
    </li>
  )
}


