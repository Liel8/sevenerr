import { useNavigate } from 'react-router-dom'

export function GigPreview({ gig }) {
  const navigate = useNavigate()

  // פונקציה שמנווטת לדף פרטי הגיג ומעבירה את הנתונים במידת הצורך
  const handleNavigation = () => {
    navigate(`/gig/details/${gig._id}`, { state: { gig } })
  }

  return (
    <li className="gig-preview">
      {/* לחיצה על תמונת הגיג */}
      <div className="img-container" onClick={handleNavigation} style={{ cursor: 'pointer' }}>
        <img className="gig-img" src={gig.imgUrl} alt={gig.title} />
      </div>

      {/* פרטי הבעלים */}
      <div className="flex owner-details">
        <div className="flex owner-details-1">
          <img
            className="owner-profile-img"
            src={gig.owner?.imgUrl || 'https://example.com/default-profile.jpg'}
            alt={gig.owner?.fullname || 'Unknown'}
          />
          <span className="owner-fullname">{gig.owner?.fullname || 'Unknown'}</span>
          <span className="level-number">{gig.owner?.level || 'N/A'}</span>
        </div>

        {/* דירוג ומחיר */}
        <div className="rating-price">
          <h3 className="owner-gig-title"  onClick={handleNavigation} style={{ cursor: 'pointer' }}>{gig.title}</h3>
          <div className="flex rate-wrapper">
            <span className="owner-rate">{gig.owner?.rate ?? 'No rating'}</span>
          </div>
        </div>

        {/* לחיצה על המחיר */}
        <div className="gig-price" onClick={handleNavigation} style={{ cursor: 'pointer' }}>
          From ${gig.price}
        </div>
      </div>
    </li>
  )
}


        // <li className="gig-preview">
        //     {/* תמונת הגיג */}
        //     <div className="img-container">
        //         <img className="gig-img" src={gig.imgUrl} alt={gig.title} />
        //     </div>

        //     {/* פרטי הבעלים */}
        //     <div className="flex owner-details">
        //         <div className="flex owner-details-1">
        //             <img className="owner-profile-img" src={gig.owner?.imgUrl || 'https://example.com/default-profile.jpg'} alt={gig.owner?.fullname || 'Unknown'} />
        //             <span className="owner-fullname">{gig.owner?.fullname || 'Unknown'}</span>
        //             <span className="level-number">{gig.owner?.level || 'N/A'}</span>
        //         </div>

        //         {/* דירוג ומחיר */}
        //         <div className="rating-price">
        //             <h3 className="owner-gig-title">{gig.title}</h3>
        //             <div className="flex rate-wrapper">
        //                 <span className="owner-rate">{gig.owner?.rate ?? 'No rating'}</span>
        //             </div>
        //         </div>
        //         <span className="gig-price">From ${gig.price}</span>
        //     </div>

           
            {/* <div className="gig-description">
                <p>{gig.about}</p>
            </div> */}

            {/* תגיות
            {gig.tags?.length > 0 && (
                <ul className="tags">
                    {gig.tags.map((tag, index) => (
                        <li key={index} className="tag">{tag}</li>
                    ))}
                </ul>
            )} */}

            {/* ביקורות */}
            {/* {gig.reviews?.length > 0 && (
                <div className="reviews">
                    {gig.reviews.map((review, index) => (
                        <div key={index} className="review">
                            <div className="reviewer-info">
                                <img src={review.flag} alt={review.country} />
                                <span>{review.name} ({review.country})</span>
                            </div>
                            <p>{review.review}</p>
                            <span>{review.reviewedAt}</span>
                        </div>
                    ))}
                </div>
            )} */}
        {/* </li>
    );
} */}



// export function GigPreview({ gig }) {

//     return (
//         <li className="gig-preview">
//             <div className="img-container">
//                 <img className="gig-img" src={gig.imgUrl} alt={gig.title} />
//             </div>

//             <div className="flex owner-details">
//                 <div className="flex owner-details-1">
//                     <img className="owner-profile-img" src={gig.owner.imgUrl} alt={gig.owner.fullname} />
//                     <span className="owner-fullname">{gig.owner.fullname}</span>
//                     <span className="level-number">{gig.owner.level}</span>
//                 </div>
//                 <div className="rating-price">
//                     <h3 className="owner-gig-title">{gig.title}</h3>
//                     <div className="flex rate-wrapper">
//                         <span className="owner-rate">{gig.owner.rate}</span>
//                     </div>
//                 </div>
//                 <span className="gig-price">From ${gig.price}</span>
//             </div>

//             <div className="gig-description">
//                 <p>{gig.about}</p>
//             </div>

//             <ul className="tags">
//                 {gig.tags.map((tag, index) => (
//                     <li key={index} className="tag">{tag}</li>
//                 ))}
//             </ul>

//             <div className="reviews">
//                 {gig.reviews.map((review, index) => (
//                     <div key={index} className="review">
//                         <div className="reviewer-info">
//                             <img src={review.flag} alt={review.country} />
//                             <span>{review.name} ({review.country})</span>
//                         </div>
//                         <p>{review.review}</p>
//                         <span>{review.reviewedAt}</span>
//                     </div>
//                 ))}
//             </div>
//         </li>
//     );
// }


// export function GigPreview({ gig }) {
//     return (
//         <li className="gig-preview">
//             <div className="img-container">
//                 <div className="slick-slider slick-initialized" dir="ltr">
//                     <button className="gallery-btn prev">
//                         <i className="fa-solid fa-chevron-left" aria-hidden="true"></i>
//                     </button>
//                     <div className="slick-list">
//                         <div className="slick-track">
//                             {gig.imgs.map((img, idx) => (
//                                 <div key={idx} className={`slick-slide ${idx === 0 ? 'slick-active slick-current' : ''}`}>
//                                     <a href={`/gig/${gig._id}`} style={{ width: "100%", display: "inline-block" }}>
//                                         <img className="gig-img" src={img} alt="gig-img" />
//                                     </a>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                     <button className="gallery-btn next">
//                         <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
//                     </button>
//                     <ul className="slick-dots">
//                         {gig.imgs.map((_, idx) => (
//                             <li key={idx} className={idx === 0 ? "slick-active" : ""}>
//                                 <button>{idx + 1}</button>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>

//             <div className="flex owner-details">
//                 <div className="flex owner-details-1">
//                     <img src={gig.owner.imgUrl} alt="profile-img" className="owner-profile-img" />
//                     <span className="owner-fullname">{gig.owner.fullName}</span>
//                     <span className="level-number">{gig.owner.level}</span>
//                 </div>

//                 <div className="rating-price">
//                     <a href={`/gig/${gig._id}`}>
//                         <h3 className="owner-gig-title">{gig.title}</h3>
//                     </a>
//                 </div>

//                 <div className="flex rate-wrapper">
//                     <span className="star-svg">
//                         <svg width="16" height="16" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg">
//                             <path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path>
//                         </svg>
//                     </span>
//                     <span className="owner-rate">{gig.rating}</span>
//                     <span className="owner-number-rates">({gig.reviews})</span>
//                 </div>
//             </div>

//             <span className="gig-price">
//                 <span className="from">From</span>
//                 <span className="price">${gig.price}</span>
//             </span>
//         </li>
//     );
// }


// export function GigPreview({ gig }) {
//     return <article className="preview">
//         <header>
//             <Link to={`/gig/${gig._id}`}>{gig.vendor}</Link>
//         </header>

//         <p>Speed: <span>{gig.speed.toLocaleString()} Km/h</span></p>
//         {gig.owner && <p>Owner: <span>{gig.owner.fullname}</span></p>}
        
//     </article>
// }