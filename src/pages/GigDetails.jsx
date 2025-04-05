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
    <section className="gig-details-container"> 
     <article className="bread-crumbs">
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
      <div className="gig-main">
        <h1>{gig.title}</h1>
        <img src={gig.imgUrl} alt={gig.title} className="gig-main-img" />
        <p className="gig-description">{gig.description}</p>
        <ReviewIndex reviews={gig.reviews || []} />
      </div>

      <GigPurchaseSidebar gig={gig} />
    </section>
  )
}




// // import { useEffect } from 'react'
// // import { useParams } from 'react-router-dom'
// // import { useSelector } from 'react-redux'
// // import { Link } from 'react-router-dom'

// // import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
// // import { loadGig, addGigMsg } from '../store/actions/gig.actions'


// // export function GigDetails() {

// //   const {gigId} = useParams()
// //   const gig = useSelector(storeState => storeState.gigModule.gig)

// //   useEffect(() => {
// //     loadGig(gigId)
// //   }, [gigId])

// //   async function onAddGigMsg(gigId) {
// //     try {
// //         await addGigMsg(gigId, 'bla bla ' + parseInt(Math.random()*10))
// //         showSuccessMsg(`Gig msg added`)
// //     } catch (err) {
// //         showErrorMsg('Cannot add gig msg')
// //     }        

// // }

// //   return (
// //     <section className="gig-details">
// //       <Link to="/gig">Back to list</Link>
// //       <h1>Gig Details</h1>
// //       {gig && <div>
// //         <h3>{gig.title}</h3>
// //         <h4>${gig.price}</h4>
// //         <pre> {JSON.stringify(gig, null, 2)} </pre>
// //       </div>
// //       }
// //       <button onClick={() => { onAddGigMsg(gig._id) }}>Add gig msg</button>

// //     </section>
// //   )
// // }










// import { useEffect } from 'react'
// import { useParams, Link } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'
// import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
// import { loadGig, addGigMsg } from '../store/actions/gig.actions'

// export function GigDetails() {
//   const { gigId } = useParams()
//   const dispatch = useDispatch()
//   const gig = useSelector(storeState => storeState.gigModule.gig)

//   // קריאה ישירה לפעולת loadGig, אשר מבצעת את ה-dispatch הפנימי
//   useEffect(() => {
//     if (gigId) {
//       loadGig(gigId)
//     }
//   }, [gigId])

//   async function onAddGigMsg(gigId) {
//     try {
//       await addGigMsg(gigId, 'bla bla ' + parseInt(Math.random() * 10))
//       showSuccessMsg(`Gig msg added`)
//     } catch (err) {
//       showErrorMsg('Cannot add gig msg')
//     }
//   }

//   return (
//     <section className="gig-details full main-layout">
//       <article className="bread-crumbs">
//         <a className="home" href="/">
//           <img
//             className="home-icon"
//             src="/icons/house-icon.svg"
//             alt="Home"
//             title="Go to homepage"
//           />
//         </a>
//         <span className="divider">/</span>
//         <a title="Category" href="/gig">
//         {gig?.category}
//         </a>
//       </article>

//       <section className="cta-container">
//         <div className="package-options flex">
//           <button className="package selected">Basic</button>
//           <button className="package">Standard</button>
//           <button className="package">Premium</button>
//         </div>
//         <article className="call-to-action">
//           <figure className="preview-container"></figure>
//           <section className="package-heading">
//             <h2 className="price">
//               <span className="price-font">{gig?.price}$</span>
//             </h2>
//           </section>
//           <h3 className="package-desc">
//             <span className="package">Bronze </span>
//             1 logo design, High Quality Mock-up, Logo Transparency
//           </h3>
//           <span className="days-container">
//             <img
//               className="icon clock"
//               src="/assets/time-dc3d893c.svg"
//               alt="clock-icon"
//             />
//             <h3>4 Days Delivery</h3>
//           </span>
//           <ul className="feature-list">
//             <span className="feature-container">
//               <img
//                 className="icon check"
//                 src="/assets/check-9e9ebecb.svg"
//                 alt="check-icon"
//               />
//               1 concept included
//             </span>
//             <span className="feature-container">
//               <img
//                 className="icon check"
//                 src="/assets/check-9e9ebecb.svg"
//                 alt="check-icon"
//               />
//               Logo transparency
//             </span>
//           </ul>
//           <a className="btn continue">
//             Continue
//             <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
//           </a>
//           <div className="compare">
//             <a className="compare-link">Compare packages</a>
//           </div>
//         </article>
//       </section>

//       <section className="top-details container full main-layout">
//         <div className="owner-details-container">
//           <h1 className="gig-title">
//             {gig?.title}
//           </h1>
//           <div className="profile-container">
//             <img
//               src={gig?.owner?.imgUrl}
//               alt="owner-img"
//               className="owner-profile-img-meduim"
//             />
//             <div className="owner-details">
//               <div className="user-container">
//                 <h3 className="user-title">Taylor P</h3>
//                 <span className="username">@taylor_paul10</span>
//               </div>
//               <div className="star-wrapper">
//                 <span className="star-svg">
//                   <img
//                     src="/assets/star-grey-4c21a46d.svg"
//                     alt="star-svg"
//                     className="star"
//                   />
//                 </span>
//                 <span className="owner-rate">5</span>
//                 <span className="owner-number-rates">(224)</span>
//                 <span className="divider">|</span>
//                 <span className="queue">10 Orders in Queue</span>
//               </div>
//             </div>
//           </div>
//           <div className="carousel-container">
//             <div className="carousel-root">
//               <div
//                 className="carousel carousel-slider"
//                 style={{ width: '100%' }}
//               >
//                 <button className="prev-btn arrow">
//                   <i className="fa-solid fa-chevron-left" aria-hidden="true"></i>
//                 </button>
//                 <div className="slider-wrapper axis-horizontal">
//                   <ul
//                     className="slider animated"
//                     style={{
//                       transform: 'translate3d(-100%, 0px, 0px)',
//                       transitionDuration: '350ms'
//                     }}
//                   >
//                     <li className="slide">
//                       <img
//                         src="https://res.cloudinary.com/dgsfbxsed/image/upload/v1698674928/taylor-2_uqjv74.webp"
//                         alt="slide"
//                       />
//                     </li>
//                     <li className="slide selected previous">
//                       <img
//                         src="https://res.cloudinary.com/dgsfbxsed/image/upload/v1698674928/taylor-1_nmgnmv.webp"
//                         alt="slide"
//                       />
//                     </li>
//                     <li className="slide">
//                       <img
//                         src="https://res.cloudinary.com/dgsfbxsed/image/upload/v1698674928/taylor-2_uqjv74.webp"
//                         alt="slide"
//                       />
//                     </li>
//                     <li className="slide selected previous">
//                       <img
//                         src="https://res.cloudinary.com/dgsfbxsed/image/upload/v1698674928/taylor-1_nmgnmv.webp"
//                         alt="slide"
//                       />
//                     </li>
//                   </ul>
//                 </div>
//                 <button className="next-btn arrow">
//                   <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
//                 </button>
//               </div>
//               <div className="carousel">
//                 <div className="thumbs-wrapper axis-vertical">
//                   <button
//                     type="button"
//                     className="control-arrow control-prev control-disabled"
//                     aria-label="previous slide / item"
//                   ></button>
//                   <ul
//                     className="thumbs animated"
//                     style={{
//                       transform: 'translate3d(0px, 0px, 0px)',
//                       transitionDuration: '350ms'
//                     }}
//                   >
//                     <li
//                       className="thumb selected"
//                       aria-label="slide item 1"
//                       role="button"
//                       tabIndex="0"
//                       style={{ width: '100px' }}
//                     >
//                       <img
//                         src="https://res.cloudinary.com/dgsfbxsed/image/upload/v1698674928/taylor-1_nmgnmv.webp"
//                         alt="thumb"
//                       />
//                     </li>
//                     <li
//                       className="thumb"
//                       aria-label="slide item 2"
//                       role="button"
//                       tabIndex="0"
//                       style={{ width: '100px' }}
//                     >
//                       <img
//                         src="https://res.cloudinary.com/dgsfbxsed/image/upload/v1698674928/taylor-2_uqjv74.webp"
//                         alt="thumb"
//                       />
//                     </li>
//                   </ul>
//                   <button
//                     type="button"
//                     className="control-arrow control-next control-disabled"
//                     aria-label="next slide / item"
//                   ></button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <div className="about-gig">
//         <h1 className="gig-about-title">About this gig</h1>
//         <p className="gig-description">
//           Captivating, enriched, elaborate and original is what I believe you're
//           looking for. Your business logo deserves to be created by somebody who
//           gets your business. I am professional designer offering high-quality
//           business Logo design services since 2013 and branding solutions to all
//           kind of businesses
//         </p>
//       </div>

//       <div className="user-info">
//         <h1 className="about-seller">About the seller</h1>
//         <section className="user-mini-detail">
//           <div className="owner-img-wrapper flex">
//             <img
//               src="https://res.cloudinary.com/de2rdmsca/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1696177526/cld-sample.jpg"
//               alt="owner-img"
//               className="owner-profile-img-large"
//             />
//             <div className="owner-details mini">
//               <div className="user-info">
//                 <h3 className="gig-title">Taylor P</h3>
//                 <span className="username">@taylor_paul10</span>
//               </div>
//               <p className="user-desc-mini">Happy to work with you</p>
//               <div className="star-wrapper">
//                 <span className="star-svg">
//                   <img
//                     src="/assets/star-grey-4c21a46d.svg"
//                     alt="star-svg"
//                     className="star"
//                   />
//                 </span>
//                 <span className="owner-rate">5</span>
//                 <span className="owner-number-rates">(224)</span>
//               </div>
//             </div>
//           </div>
//           <button className="contact-me">Contact me</button>
//           <div className="owner-description">
//             <ul>
//               <li>
//                 <span>From</span>
//                 <span>Germany</span>
//               </li>
//               <li>
//                 <span>Member since</span>
//                 <span>Oct 2012</span>
//               </li>
//               <li>
//                 <span>Avg. response time</span>
//                 <span>5 hours</span>
//               </li>
//               <li>
//                 <span>Last delivery</span>
//                 <span>about 1 hour</span>
//               </li>
//               <li>
//                 <span>Languages</span>
//                 <span>
//                   <span style={{ display: "inline" }}>English </span>
//                   <span style={{ display: "inline" }}>German </span>
//                 </span>
//               </li>
//             </ul>
//             <article>
//               Are you looking for an expert logo designer to design your logo? If your answer is yes, then I welcome you and you are at the right place.
//             </article>
//           </div>
//         </section>
//       </div>

//       <div className="user-reviews">
//         <section className="reviews">
//           <div>
//             <h1>Reviews</h1>
//             <section className="review-chart">
//               <div className="review-header stars">
//                 <h4>11 reviews for this seller</h4>
//                 <div className="stars">
//                   <img
//                     src="/assets/star-grey-4c21a46d.svg"
//                     alt="star"
//                     className="star"
//                   />
//                   <img
//                     src="/assets/star-grey-4c21a46d.svg"
//                     alt="star"
//                     className="star"
//                   />
//                   <img
//                     src="/assets/star-grey-4c21a46d.svg"
//                     alt="star"
//                     className="star"
//                   />
//                   <img
//                     src="/assets/star-grey-4c21a46d.svg"
//                     alt="star"
//                     className="star"
//                   />
//                   <img
//                     src="/assets/star-grey-4c21a46d.svg"
//                     alt="star"
//                     className="star"
//                   />
//                   <span className="rate padding">4.5</span>
//                 </div>
//               </div>
//               <div className="review-bars-container">
//                 <div className="star-number">5 Stars</div>
//                 <div className="review-rate-bar">
//                   <span className="percent" style={{ width: "81.8182%" }}></span>
//                 </div>
//                 <span>(9)</span>
//               </div>
//               <div className="review-bars-container">
//                 <div className="star-number">4 Stars</div>
//                 <div className="review-rate-bar">
//                   <span className="percent" style={{ width: "9.09091%" }}></span>
//                 </div>
//                 <span>(1)</span>
//               </div>
//               <div className="review-bars-container" style={{ color: "rgb(228, 229, 231)" }}>
//                 <div className="star-number">3 Stars</div>
//                 <div className="review-rate-bar">
//                   <span className="percent" style={{ width: "0%" }}></span>
//                 </div>
//                 <span>(0)</span>
//               </div>
//               <div className="review-bars-container" style={{ color: "rgb(228, 229, 231)" }}>
//                 <div className="star-number">2 Stars</div>
//                 <div className="review-rate-bar">
//                   <span className="percent" style={{ width: "0%" }}></span>
//                 </div>
//                 <span>(0)</span>
//               </div>
//               <div className="review-bars-container">
//                 <div className="star-number">1 Star</div>
//                 <div className="review-rate-bar">
//                   <span className="percent" style={{ width: "9.09091%" }}></span>
//                 </div>
//                 <span>(1)</span>
//               </div>
//             </section>
//             <div className="review-list">
//               <ul>
//                 <li className="review-preview">
//                   <img
//                     src="https://res.cloudinary.com/dgsfbxsed/image/upload/v1699297771/wwalxfxyg1msfp25zack.jpg"
//                     className="seller-img"
//                     alt="seller"
//                   />
//                   <div className="review-detail">
//                     <div className="seller-info">
//                       <h4 className="seller-name">Raz Amsalem</h4>
//                       <div className="country">
//                         <img
//                           className="flag"
//                           alt="flag"
//                           src="https://res.cloudinary.com/dgsfbxsed/image/upload/v1698928453/israel_rtvzid.png"
//                         />
//                         <span>Israel</span>
//                       </div>
//                     </div>
//                     <div className="rate-info">
//                       <div className="stars">
//                         <img
//                           src="/assets/star-grey-4c21a46d.svg"
//                           alt="star"
//                           className="star"
//                         />
//                         <img
//                           src="/assets/star-grey-4c21a46d.svg"
//                           alt="star"
//                           className="star"
//                         />
//                         <img
//                           src="/assets/star-grey-4c21a46d.svg"
//                           alt="star"
//                           className="star"
//                         />
//                         <img
//                           src="/assets/star-grey-4c21a46d.svg"
//                           alt="star"
//                           className="star"
//                         />
//                         <img
//                           src="/assets/star-grey-4c21a46d.svg"
//                           alt="star"
//                           className="star"
//                         />
//                         <span className="rate padding">5</span>
//                       </div>
//                       <span className="divider"></span>
//                       <span>1 years ago</span>
//                     </div>
//                     <article className="long-txt">
//                       <div className="long-text">
//                         <p className="book-desc">Nice</p>
//                       </div>
//                     </article>
//                     <div className="helpful">
//                       <span>Helpful?</span>
//                       <div className="thums" style={{ color: "rgb(34, 35, 37)" }}>
//                         <img
//                           src="/assets/thums-up-07d2fc96.svg"
//                           alt="thumsUpGreen"
//                           id="yes"
//                         />
//                         <span id="yes">Yes</span>
//                       </div>
//                       <div className="thums" style={{ color: "rgb(34, 35, 37)" }}>
//                         <img
//                           src="/assets/thums-down-004a2262.svg"
//                           alt="thumsDown"
//                           id="no"
//                         />
//                         <span id="no">No</span>
//                       </div>
//                     </div>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </section>
//       </div>
//     </section>
//   )
// }
