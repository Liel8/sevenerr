// import React, { useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { loadGig } from '../store/actions/gig.actions';
// import { addOrder } from '../store/actions/orders.actions';
// import { useLocation } from "react-router-dom"


// export function PaymentPage() {

//   const { gigId } = useParams()
//   const gig= useSelector(state => state.gigModule.gig)
//   const user = useSelector(state => state.userModule.user) || { _id: 'u101' }
//   const navigate  = useNavigate()

//   const location = useLocation()
//   const selectedPackage = location.state?.selectedPackage

//   useEffect(() => {
//     if (gigId) {
//       loadGig(gigId)
//         .catch(err => console.error('Failed loading gig', err))}
//   }, [gigId])

  
// if (!gig || !gig._id) return (
//   <div className="loading-wrapper">
//     <img className="loading-gif" src="/icons/loading.gif" alt="Loading..." />
//   </div>
// )


//   const basePrice = selectedPackage?.price || gig.price
//   const priceWithTax = +(basePrice * 1.18).toFixed(2)
//   const packageName = selectedPackage?.title || 'Basic'
//   const packagePrice = +(priceWithTax + 16.40).toFixed(2)
//   const daysToMake = selectedPackage?.delivery
//   ? parseInt(selectedPackage.delivery.match(/\d+/)?.[0])
//   : gig.daysToMake || 3

// async function onConfirmPay() {
//   if (!user || !user._id) {
//     console.error('User not logged in – cannot place order')
//     return
//   }

//   const newOrder = {
//     buyer: {
//       _id: user._id,
//       fullname: user.fullname
//     },
//     seller: {
//       _id: gig.owner._id,
//       fullname: gig.owner.fullname
//     },
//     gig: {
//       _id: gig._id,
//       title: gig.title,
//       imgUrl: Array.isArray(gig.imgUrl) ? gig.imgUrl[0] : gig.imgUrl
//     },
//     title: gig.title,
//     packagePrice: packagePrice,
//     daysToMake,
//     createdAt: Date.now(),
//     status: 'accepted'
//   }

//   try {
//     await addOrder(newOrder)
//     navigate('/orders')
//   } catch (err) {
//     console.error('Could not place order', err)
//   }
// }



//     return (
//         <section className="payment-page">
//         <section className="payment-container">
//             <section className="billing-info-wrapper payment-methods-wrapper">
//             <header className="billing-info-header payment-methods-header">
//                 <span>Payment Options</span>
//             </header>

//             <section className="payments-option">
//                 <label>
//                     <span>Credit & Debit Cards</span>
//                     <img src="/public/img/credit-cards.jpg" alt="credit-cards" />
//                 </label>
//             </section>

            
//             <form className="credit-card-details-wrapper">
//                 <article className="credit-card-details">
//                 <div className="card card-number">
//                     <label>
//                     <span>Card number</span>
//                     </label>
//                     <label className="credit-card-input-wrapper">
//                         <img src="/public/icons/credit-card-icon.svg" alt="credit-card-icon" className="card-logo" fill= '#95979d' />
//                         <input className="input" type="text" defaultValue="5326 1000 2000 3000" />
//                         <img src="/public/icons/locker-icon.svg" alt="locker icon" className="locker-icon" />
//                     </label>
//                 </div>

//                 <div className="card">
//                 <div className="expiration-date">
//                     <label>
//                     <span>Expiration date</span>
//                     </label>
//                     <input type="text" className="input" defaultValue="12/30" />
//                 </div>
//                 <div className="security-code">
//                     <label>
//                     <span>Security code </span>
//                     {/* <svg width="16" height="16" viewBox="0 0 16 16" fill= '#95979d' xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8 1.6C4.46538 1.6 1.6 4.46538 1.6 8C1.6 11.5346 4.46538 14.4 8 14.4C11.5346 14.4 14.4 11.5346 14.4 8C14.4 4.46538 11.5346 1.6 8 1.6ZM0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8ZM7.04923 5.61744C6.86818 5.86891 6.8 6.19469 6.8 6.4H5.2C5.2 5.93865 5.33182 5.26443 5.75077 4.68256C6.19909 4.05989 6.93926 3.6 8 3.6C9.33919 3.6 10.3019 4.38025 10.6388 5.39495C10.9694 6.39102 10.6738 7.57898 9.64376 8.26564C9.07519 8.64469 8.94028 8.83688 8.88532 8.96514C8.81377 9.13208 8.8 9.34506 8.8 10H7.2C7.2 9.97079 7.19996 9.94146 7.19992 9.91203C7.19922 9.39218 7.19847 8.83935 7.41468 8.33486C7.65972 7.76312 8.12481 7.35531 8.75624 6.93436C9.13828 6.67966 9.24261 6.26763 9.12025 5.89903C9.00408 5.54907 8.66081 5.2 8 5.2C7.46074 5.2 7.20091 5.40677 7.04923 5.61744ZM8.8 10.8V12.4H7.2V10.8H8.8Z"></path></svg> */}
//                     </label>
//                     <input type="text" className="input" defaultValue="123" />
//                 </div>
//                 </div>

//                 <div className="card">
//                     <div className="full-name">
//                     <label>
//                         <span>Cardholder's name</span>
//                     </label>
//                     <input type="text" className="input" defaultValue="Yazan Meray" />
//                     </div>
//                 </div>

//                 <div className="card">
//                     <div className="display-name">
//                     <label>
//                         <span>Card display name <span>(Optional)</span></span>
//                     </label>
//                     <input type="text" className="input" placeholder="e.g. Marketing card" />
//                     </div>
//                 </div>

//                 <div className="save-card-field">
//                     <label className="checkbox-row">
//                         <input
//                         type="checkbox"
//                         defaultChecked
//                         readOnly
//                         />
//                         <span className="checkbox-message">
//                         Save this card for future payments
//                         </span>
//                     </label>
//                 </div>
//                 </article>
//             </form>

//             {/* <section className="payments-option-1">
//                 <label>
//                 <input className="form-check-input radio" type="radio" name="paypal" id="flexRadioDefault1" />
//                 <svg width="83" height="24" viewBox="0 0 83 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.3753 13.9213C31.5461 13.9203 32.678 13.5009 33.5668 12.7388C34.4556 11.9767 35.0428 10.922 35.2224 9.76505C35.6011 7.35337 33.7168 5.24807 31.0468 5.24807H26.7434C26.6627 5.24703 26.5844 5.27521 26.5228 5.32741C26.4612 5.37961 26.4206 5.45232 26.4084 5.53212L24.4905 17.7056C24.4836 17.75 24.4864 17.7955 24.4987 17.8388C24.5109 17.8821 24.5324 17.9222 24.5617 17.9564C24.5909 17.9907 24.6272 18.0181 24.668 18.037C24.7089 18.0559 24.7534 18.0657 24.7984 18.0658H27.0756C27.1561 18.0666 27.2342 18.0383 27.2956 17.9862C27.357 17.934 27.3974 17.8614 27.4096 17.7818L27.9738 14.2058C27.9859 14.126 28.0264 14.0532 28.0878 14.0009C28.1493 13.9487 28.2276 13.9204 28.3083 13.9213H30.3753ZM32.281 9.65531C32.1402 10.5468 31.4512 11.2037 30.1325 11.2037H28.4457L28.957 7.9603H30.6132C31.9776 7.96321 32.4209 8.76775 32.281 9.65774V9.65531ZM45.0886 9.08238H42.9265C42.8458 9.08144 42.7675 9.10965 42.7059 9.16184C42.6444 9.21402 42.6037 9.28666 42.5914 9.36642L42.5215 9.81506C42.5215 9.81506 40.843 7.98215 37.8725 9.22027C36.1682 9.92964 35.3506 11.3955 35.003 12.4685C35.003 12.4685 33.8974 15.7304 36.3964 17.5264C36.3964 17.5264 38.713 19.253 41.3222 17.4196L41.2771 17.7056C41.2701 17.75 41.2728 17.7955 41.285 17.8389C41.2973 17.8822 41.3188 17.9224 41.348 17.9566C41.3773 17.9908 41.4136 18.0183 41.4545 18.0372C41.4954 18.056 41.5399 18.0658 41.5849 18.0658H43.7461C43.8268 18.0669 43.9051 18.0387 43.9667 17.9865C44.0283 17.9343 44.0689 17.8616 44.0811 17.7818L45.3959 9.44265C45.4028 9.39818 45.4001 9.35273 45.3878 9.30943C45.3755 9.26613 45.354 9.22599 45.3248 9.19177C45.2956 9.15755 45.2593 9.13006 45.2184 9.11118C45.1776 9.0923 45.1336 9.08247 45.0886 9.08238ZM41.9097 13.6911C41.8252 14.2721 41.5327 14.8028 41.0866 15.1846C40.6405 15.5664 40.0711 15.7734 39.484 15.7673C39.2541 15.7699 39.0252 15.7363 38.8057 15.6677C37.8735 15.3687 37.3418 14.4723 37.4947 13.5013C37.5794 12.9186 37.8731 12.3867 38.321 12.0046C38.7689 11.6225 39.3405 11.4164 39.9292 11.4246C40.1594 11.4222 40.3886 11.4562 40.608 11.5246C41.5369 11.8228 42.0651 12.7191 41.9122 13.6911H41.9097Z" fill="#003087"></path><path d="M61.504 13.9215C62.6755 13.9212 63.8083 13.5021 64.6979 12.74C65.5875 11.9779 66.1755 10.9228 66.3556 9.76528C66.7338 7.35361 64.8499 5.24831 62.1789 5.24831H57.8771C57.7965 5.24749 57.7183 5.27576 57.6568 5.32793C57.5954 5.3801 57.5548 5.45268 57.5425 5.53235L55.6188 17.7092C55.6078 17.7763 55.6192 17.8451 55.6513 17.905C55.6833 17.965 55.7342 18.0127 55.796 18.0408C55.8369 18.0599 55.8815 18.0698 55.9267 18.0699H58.2043C58.285 18.0707 58.3633 18.0424 58.4247 17.9901C58.4862 17.9379 58.5267 17.8652 58.5389 17.7854L59.1035 14.2094C59.1155 14.1296 59.156 14.0568 59.2175 14.0045C59.279 13.9521 59.3573 13.9239 59.4381 13.9249L61.504 13.9215ZM63.4098 9.65555C63.269 10.547 62.58 11.2039 61.2608 11.2039H59.5745L60.0863 7.96053H61.7424C63.1058 7.96344 63.5501 8.76798 63.4098 9.65798V9.65555ZM76.2169 9.08261H74.0572C73.9766 9.08179 73.8984 9.11006 73.8369 9.16223C73.7755 9.2144 73.7349 9.28698 73.7226 9.36665L73.6517 9.81529C73.6517 9.81529 71.9737 7.98238 69.0032 9.2205C67.2994 9.92988 66.4813 11.3957 66.1332 12.4688C66.1332 12.4688 65.0281 15.7306 67.5267 17.5266C67.5267 17.5266 69.8437 19.2532 72.453 17.4198L72.4078 17.7058C72.3968 17.7729 72.4082 17.8417 72.4402 17.9016C72.4723 17.9616 72.5231 18.0093 72.585 18.0374C72.6258 18.0568 72.6705 18.0665 72.7156 18.0665H74.8768C74.9576 18.0678 75.036 18.0396 75.0976 17.9872C75.1591 17.9349 75.1995 17.862 75.2113 17.782L76.5266 9.44288C76.5331 9.39826 76.5301 9.35278 76.5177 9.30942C76.5053 9.26607 76.4838 9.22584 76.4548 9.19137C76.4256 9.15683 76.3891 9.12917 76.348 9.11037C76.3069 9.09157 76.2621 9.08209 76.2169 9.08261ZM73.0385 13.6913C72.9549 14.2728 72.6627 14.804 72.2164 15.186C71.7701 15.568 71.2002 15.7747 70.6128 15.7675C70.3825 15.7702 70.1533 15.7366 69.9335 15.668C69.0008 15.3689 68.4686 14.4726 68.6216 13.5015C68.706 12.9204 68.9985 12.3896 69.4445 12.0077C69.8906 11.6259 70.4601 11.4187 71.0473 11.4249C71.2779 11.4224 71.5071 11.4559 71.7266 11.5249C72.6651 11.823 73.1949 12.7193 73.0409 13.6913H73.0385Z" fill="#009CDE"></path><path d="M53.0232 9.28892L50.4173 13.6874L49.0952 9.32145C49.0745 9.25217 49.0319 9.19146 48.9737 9.1484C48.9156 9.10535 48.8452 9.08225 48.7728 9.08257H46.4218C46.3813 9.08179 46.3412 9.09086 46.305 9.10899C46.2687 9.12713 46.2374 9.15378 46.2137 9.18668C46.19 9.21958 46.1747 9.25773 46.169 9.29787C46.1633 9.338 46.1674 9.37892 46.181 9.4171L48.5504 16.7711L46.4078 20.2369C46.3836 20.275 46.3701 20.319 46.3688 20.3641C46.3675 20.4093 46.3784 20.454 46.4004 20.4935C46.4224 20.5329 46.4546 20.5658 46.4937 20.5884C46.5327 20.6111 46.5772 20.6229 46.6224 20.6224H49.1554C49.2279 20.6227 49.2992 20.6042 49.3623 20.5686C49.4253 20.533 49.4781 20.4816 49.5152 20.4194L56.1341 9.46954C56.1579 9.43133 56.171 9.38739 56.172 9.34236C56.173 9.29733 56.1618 9.25288 56.1396 9.21367C56.1174 9.17446 56.0851 9.14195 56.046 9.11956C56.007 9.09718 55.9626 9.08574 55.9175 9.08645H53.3854C53.3126 9.0856 53.2409 9.10385 53.1773 9.13938C53.1138 9.1749 53.0607 9.22646 53.0232 9.28892Z" fill="#003087"></path><path d="M78.6487 5.52893L76.725 17.7058C76.714 17.7728 76.7254 17.8417 76.7575 17.9016C76.7895 17.9615 76.8404 18.0093 76.9022 18.0374C76.943 18.0568 76.9877 18.0665 77.0329 18.0665H79.3096C79.3903 18.0675 79.4686 18.0393 79.5301 17.987C79.5916 17.9347 79.6321 17.8618 79.6441 17.782L81.5683 5.60516C81.5755 5.56068 81.5728 5.51517 81.5606 5.47181C81.5483 5.42845 81.5268 5.38829 81.4974 5.35414C81.4681 5.31996 81.4317 5.29252 81.3908 5.27366C81.3499 5.25481 81.3055 5.245 81.2604 5.24489H78.9833C78.9027 5.24407 78.8245 5.27234 78.763 5.32451C78.7016 5.37668 78.661 5.44926 78.6487 5.52893Z" fill="#009CDE"></path><path d="M18.0358 10.8081C17.5473 13.5927 15.2755 15.6975 12.2943 15.6975H10.4017C10.0157 15.6975 9.62675 16.0548 9.56509 16.4501L8.73627 21.7109C8.6882 22.0105 8.54788 22.11 8.24442 22.11H5.20009C4.89226 22.11 4.81943 22.0071 4.86555 21.7036L5.21514 18.0654L1.56097 17.8766C1.25363 17.8766 1.14244 17.7091 1.18614 17.4022L3.67938 1.59304C3.72745 1.29346 3.9139 1.16479 4.21639 1.16479H10.5396C13.5834 1.16479 15.5091 3.21377 15.7445 5.87064C17.5556 7.0942 18.4024 8.72221 18.0363 10.8076L18.0358 10.8081Z" fill="#012169"></path><path d="M6.1415 12.1749L5.21558 18.0659L4.63002 21.7618C4.61914 21.8331 4.62373 21.9058 4.64349 21.9752C4.66324 22.0445 4.69769 22.1087 4.7445 22.1636C4.7913 22.2184 4.84936 22.2625 4.91473 22.2929C4.9801 22.3232 5.05124 22.3392 5.12332 22.3396H8.33856C8.48532 22.3395 8.62721 22.2869 8.73872 22.1915C8.85023 22.0961 8.92406 21.9641 8.94694 21.8191L9.79324 16.4491C9.81622 16.3042 9.8901 16.1723 10.0016 16.0769C10.1131 15.9816 10.2549 15.9292 10.4016 15.929H12.2943C13.7364 15.9272 15.1305 15.4101 16.2251 14.4712C17.3198 13.5323 18.043 12.2331 18.2644 10.8081C18.5922 8.71685 17.54 6.81305 15.7392 5.87256C15.7351 6.09537 15.7156 6.31762 15.6809 6.53775C15.4587 7.96208 14.7352 9.26027 13.6407 10.1985C12.5462 11.1367 11.1528 11.6534 9.71118 11.6553H6.74939C6.60281 11.6554 6.46105 11.7077 6.34962 11.803C6.23819 11.8982 6.16439 12.0301 6.1415 12.1749Z" fill="#009CDE"></path><path d="M5.21528 18.0661H1.47129C1.39905 18.0657 1.32775 18.0498 1.26222 18.0194C1.1967 17.989 1.1385 17.9448 1.09159 17.8899C1.04467 17.835 1.01016 17.7706 0.990385 17.7011C0.970612 17.6316 0.96605 17.5587 0.977008 17.4873L3.49987 1.49169C3.52255 1.34673 3.59626 1.21463 3.70771 1.1192C3.81917 1.02377 3.96104 0.971279 4.10776 0.971191H10.5363C13.5801 0.971191 15.7932 3.18622 15.7413 5.8698C14.9311 5.45184 14.0314 5.23737 13.1199 5.24491H7.76048C7.61371 5.24494 7.47176 5.29733 7.36016 5.39265C7.24855 5.48796 7.17461 5.61996 7.15161 5.76492L6.14169 12.175L5.21528 18.0661Z" fill="#003087"></path></svg>
//                 </label>
//             </section> */}
//             </section>
//         </section>

//         <div className="side-content fit-col-xs-12 fit-col-md-5">
//             <section className="order-details-container gig">
//             <span className="gig">
//                 <header className="order-details-header">
//                     <span className="image-container">
//                         <img className="order-image" src={gig.imgUrl && gig.imgUrl.length > 0 ? gig.imgUrl[0] : '/path/to/default-image.jpg'}alt="gig image" />
//                     </span>
//                     <div>
//                         <h3 className="order-title">{gig.title}</h3>
//                     </div>
//                 </header>
//                 <article className="order-details-general">
//                     <span className="order-details-general-title">{selectedPackage?.title || 'Basic'}</span>
//                     <div className="quantity-price-container">
//                         <span className="price order-details-general-price">₪{selectedPackage?.price || gig.price}</span>
//                     </div>
//                 </article>
//                 <ul className="order-details-items-container">
//                     {selectedPackage?.features?.map((feature, i) => (
//                         <li
//                         className={`order-details-item ${feature.included ? '' : 'disabled'}`}
//                         key={i}
//                         >
//                         <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M13.6202 2.6083L5.4001 10.8284L2.37973 7.80805C2.23329 7.66161 1.99585 7.66161 1.84939 7.80805L0.96551 8.69193C0.819073 8.83836 0.819073 9.0758 0.96551 9.22227L5.13492 13.3917C5.28135 13.5381 5.51879 13.5381 5.66526 13.3917L15.0344 4.02252C15.1809 3.87608 15.1809 3.63865 15.0344 3.49218L14.1505 2.6083C14.0041 2.46186 13.7667 2.46186 13.6202 2.6083Z"></path>
//                         </svg>
//                         {feature.text}
//                         </li>
//                     ))}
//                 </ul>
//             </span>
//             </section>

//             <section className="promo-code">
//                 <div className="promo-code-input-hidden">Enter promo code 
//                 {/* <svg width="16" height="16" viewBox="0 0 16 16" fill= '#95979d' xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8 1.6C4.46538 1.6 1.6 4.46538 1.6 8C1.6 11.5346 4.46538 14.4 8 14.4C11.5346 14.4 14.4 11.5346 14.4 8C14.4 4.46538 11.5346 1.6 8 1.6ZM0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8ZM7.04923 5.61744C6.86818 5.86891 6.8 6.19469 6.8 6.4H5.2C5.2 5.93865 5.33182 5.26443 5.75077 4.68256C6.19909 4.05989 6.93926 3.6 8 3.6C9.33919 3.6 10.3019 4.38025 10.6388 5.39495C10.9694 6.39102 10.6738 7.57898 9.64376 8.26564C9.07519 8.64469 8.94028 8.83688 8.88532 8.96514C8.81377 9.13208 8.8 9.34506 8.8 10H7.2C7.2 9.97079 7.19996 9.94146 7.19992 9.91203C7.19922 9.39218 7.19847 8.83935 7.41468 8.33486C7.65972 7.76312 8.12481 7.35531 8.75624 6.93436C9.13828 6.67966 9.24261 6.26763 9.12025 5.89903C9.00408 5.54907 8.66081 5.2 8 5.2C7.46074 5.2 7.20091 5.40677 7.04923 5.61744ZM8.8 10.8V12.4H7.2V10.8H8.8Z"></path></svg> */}
//                 </div>
//             </section>

//             <section className="summary">
//                 <div className="summary-table">
//                     <div className="table-row fee-row">
//                         <span className="row-title">Service fee
//                         {/* <svg width="16" height="16" viewBox="0 0 16 16" fill= '#95979d' xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8 1.6C4.46538 1.6 1.6 4.46538 1.6 8C1.6 11.5346 4.46538 14.4 8 14.4C11.5346 14.4 14.4 11.5346 14.4 8C14.4 4.46538 11.5346 1.6 8 1.6ZM0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8ZM7.04923 5.61744C6.86818 5.86891 6.8 6.19469 6.8 6.4H5.2C5.2 5.93865 5.33182 5.26443 5.75077 4.68256C6.19909 4.05989 6.93926 3.6 8 3.6C9.33919 3.6 10.3019 4.38025 10.6388 5.39495C10.9694 6.39102 10.6738 7.57898 9.64376 8.26564C9.07519 8.64469 8.94028 8.83688 8.88532 8.96514C8.81377 9.13208 8.8 9.34506 8.8 10H7.2C7.2 9.97079 7.19996 9.94146 7.19992 9.91203C7.19922 9.39218 7.19847 8.83935 7.41468 8.33486C7.65972 7.76312 8.12481 7.35531 8.75624 6.93436C9.13828 6.67966 9.24261 6.26763 9.12025 5.89903C9.00408 5.54907 8.66081 5.2 8 5.2C7.46074 5.2 7.20091 5.40677 7.04923 5.61744ZM8.8 10.8V12.4H7.2V10.8H8.8Z"></path></svg> */}
//                         </span>
//                         <span className="price">₪16.40</span>
//                     </div>
//                         <div className="table-row tax-row">
//                             <span className="row-title">VAT
//                             {/* <svg width="16" height="16" viewBox="0 0 16 16" fill= '#95979d' xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8 1.6C4.46538 1.6 1.6 4.46538 1.6 8C1.6 11.5346 4.46538 14.4 8 14.4C11.5346 14.4 14.4 11.5346 14.4 8C14.4 4.46538 11.5346 1.6 8 1.6ZM0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8ZM7.04923 5.61744C6.86818 5.86891 6.8 6.19469 6.8 6.4H5.2C5.2 5.93865 5.33182 5.26443 5.75077 4.68256C6.19909 4.05989 6.93926 3.6 8 3.6C9.33919 3.6 10.3019 4.38025 10.6388 5.39495C10.9694 6.39102 10.6738 7.57898 9.64376 8.26564C9.07519 8.64469 8.94028 8.83688 8.88532 8.96514C8.81377 9.13208 8.8 9.34506 8.8 10H7.2C7.2 9.97079 7.19996 9.94146 7.19992 9.91203C7.19922 9.39218 7.19847 8.83935 7.41468 8.33486C7.65972 7.76312 8.12481 7.35531 8.75624 6.93436C9.13828 6.67966 9.24261 6.26763 9.12025 5.89903C9.00408 5.54907 8.66081 5.2 8 5.2C7.46074 5.2 7.20091 5.40677 7.04923 5.61744ZM8.8 10.8V12.4H7.2V10.8H8.8Z"></path></svg> */}
//                             </span>
//                             <span className="price">₪{priceWithTax.toFixed(2)}</span>
//                     </div>
//                 </div>
//                 <div className="summary-footer">
//                     <div className="table-row total-price">
//                         <span className="row-title">Total</span>
//                         <span className="price">₪{(priceWithTax+16.40).toFixed(2)}</span>
//                     </div>
//                     <div className="table-row delivery-date">
//                         <span className="row-title">Total delivery time</span>
//                         <span className="date">{daysToMake} days</span>
//                     </div>
//                 </div>

//                 <div className="pay-button-component">
//                     <button
//                         className="confirm-pay-button"
//                         onClick={onConfirmPay}>
//                         Confirm &amp; Pay
//                     </button>
//                 </div>
//                 <div className="secure-payment flex flex-center">
//                     <span className="ssl-locker" aria-hidden="true">
//                         <svg width="14" height="16" viewBox="0 0 14 16" fill='#74767e' xmlns="http://www.w3.org/2000/svg"><path d="M12.5 7C12.9062 7 13.25 7.15625 13.5625 7.4375C13.8438 7.75 14 8.09375 14 8.5V14.5C14 14.9375 13.8438 15.2812 13.5625 15.5625C13.25 15.875 12.9062 16 12.5 16H1.5C1.0625 16 0.71875 15.875 0.4375 15.5625C0.125 15.2812 0 14.9375 0 14.5V8.5C0 8.09375 0.125 7.75 0.4375 7.4375C0.71875 7.15625 1.0625 7 1.5 7H2.25V4.75C2.25 3.90625 2.4375 3.125 2.875 2.375C3.3125 1.65625 3.875 1.09375 4.625 0.65625C5.34375 0.21875 6.125 0 7 0C7.84375 0 8.625 0.21875 9.375 0.65625C10.0938 1.09375 10.6562 1.65625 11.0938 2.375C11.5312 3.125 11.75 3.90625 11.75 4.75V7H12.5ZM8.25 12.25V10.75C8.25 10.4062 8.125 10.125 7.875 9.875C7.625 9.625 7.34375 9.5 7 9.5C6.625 9.5 6.34375 9.625 6.09375 9.875C5.84375 10.125 5.75 10.4062 5.75 10.75V12.25C5.75 12.625 5.84375 12.9062 6.09375 13.1562C6.34375 13.4062 6.625 13.5 7 13.5C7.34375 13.5 7.625 13.4062 7.875 13.1562C8.125 12.9062 8.25 12.625 8.25 12.25ZM9.25 7V4.75C9.25 4.125 9.03125 3.59375 8.59375 3.15625C8.15625 2.71875 7.625 2.5 7 2.5C6.375 2.5 5.84375 2.71875 5.40625 3.15625C4.96875 3.59375 4.75 4.125 4.75 4.75V7H9.25Z"></path></svg>
//                     </span>
//                     <span>SSL Secure Payment</span>
//                 </div>
//                 <section className="" role="region">
//                     <section className="currency-section">
//                         <div className="currency-message tbody-6">You will be charged
//                             <span className="price">₪{packagePrice} </span>
//                               Total amount includes currency conversion fees.
//                         </div>
//                     </section>
//                 </section>
//             </section>

//         </div>
//         </section>   
//     )
// }

import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { loadGig } from '../store/actions/gig.actions';
import { addOrder } from '../store/actions/orders.actions';
import { useLocation } from "react-router-dom"


export function PaymentPage() {

  const { gigId } = useParams()
  const gig= useSelector(state => state.gigModule.gig)
  const user = useSelector(state => state.userModule.user) || { _id: 'u101' }
  const navigate  = useNavigate()

  const location = useLocation()
  const selectedPackage = location.state?.selectedPackage

  useEffect(() => {
    if (gigId) {
      loadGig(gigId)
        .catch(err => console.error('Failed loading gig', err))}
  }, [gigId])

  
  if (!gig || !gig._id) return (
    <div className="loading-wrapper">
      <img className="loading-gif" src="/icons/loading.gif" alt="Loading..." />
    </div>
  )


  const basePrice = selectedPackage?.price || gig.price
  const priceWithTax = +(basePrice * 1.18).toFixed(2)
  const packageName = selectedPackage?.title || 'Basic'
  const packagePrice = +(priceWithTax + 16.40).toFixed(2)
  const daysToMake = selectedPackage?.delivery
    ? parseInt(selectedPackage.delivery.match(/\d+/)?.[0])
    : gig.daysToMake || 3

    async function onConfirmPay() {
      console.log('onConfirmPay נקרא, user =', user)
      if (!user?._id) {
        console.log('אין משתמש, מעביר ל-/login')
        navigate('/login', { replace: true })
        return
      }

    const newOrder = {
      buyer: {
        _id: user._id,
        fullname: user.fullname
      },
      seller: {
        _id: gig.owner._id,
        fullname: gig.owner.fullname
      },
      gig: {
        _id: gig._id,
        title: gig.title,
        imgUrl: Array.isArray(gig.imgUrl) ? gig.imgUrl[0] : gig.imgUrl
      },
      title: gig.title,
      packagePrice: packagePrice,
      daysToMake,
      createdAt: Date.now(),
      status: 'accepted'
    }

    // try {
    //   await addOrder(newOrder)
    //   navigate('/orders')
    // } catch (err) {
    //   console.error('Could not place order', err)
    // }
      try {
        await addOrder(newOrder);
        navigate('/orders', { replace: true });
      } catch (err) {
        // ברגע שמקבלים 401, מפנים ל־Login
        if (err.response?.status === 401) {
          navigate('/login', { replace: true });
          return;
        }
        console.error('Could not place order', err);
      }
  }



  return (
    <section className="payment-page">
      <section className="payment-container">
        <section className="billing-info-wrapper payment-methods-wrapper">
          <header className="billing-info-header payment-methods-header">
            <span>Payment Options</span>
          </header>

          <section className="payments-option">
            <label>
              <span>Credit & Debit Cards</span>
              <img src="/img/credit-cards.jpg" alt="credit-cards" />
            </label>
          </section>

          
          <form className="credit-card-details-wrapper">
            <article className="credit-card-details">
              <div className="card card-number">
                <label>
                  <span>Card number</span>
                </label>
                <label className="credit-card-input-wrapper">
                  <img src="/icons/credit-card-icon.svg" alt="credit-card-icon" className="card-logo" fill='#95979d' />
                  <input className="input" type="text" defaultValue="5326 1000 2000 3000" />
                  <img src="/icons/locker-icon.svg" alt="locker icon" className="locker-icon" />
                </label>
              </div>

              <div className="card">
                <div className="expiration-date">
                  <label>
                    <span>Expiration date</span>
                  </label>
                  <input type="text" className="input" defaultValue="12/30" />
                </div>
                <div className="security-code">
                  <label>
                    <span>Security code </span>
                  </label>
                  <input type="text" className="input" defaultValue="123" />
                </div>
              </div>

              <div className="card">
                <div className="full-name">
                  <label>
                    <span>Cardholder's name</span>
                  </label>
                  <input type="text" className="input" defaultValue="Yazan Meray" />
                </div>
              </div>

              <div className="card">
                <div className="display-name">
                  <label>
                    <span>Card display name <span>(Optional)</span></span>
                  </label>
                  <input type="text" className="input" placeholder="e.g. Marketing card" />
                </div>
              </div>

              <div className="save-card-field">
                <label className="checkbox-row">
                  <input
                    type="checkbox"
                    defaultChecked
                    readOnly
                  />
                  <span className="checkbox-message">
                    Save this card for future payments
                  </span>
                </label>
              </div>
            </article>
          </form>
        </section>
      </section>

      <div className="side-content">
        <section className="order-details-container gig">
          <span className="gig">
            <header className="order-details-header">
              <span className="image-container">
                <img className="order-image"
                     src={gig.imgUrl && gig.imgUrl.length > 0 ? gig.imgUrl[0] : '/path/to/default-image.jpg'}
                     alt="gig image" />
              </span>
              <div>
                <h3 className="order-title">{gig.title}</h3>
              </div>
            </header>

            <article className="order-details-general">
              <span className="order-details-general-title">{selectedPackage?.title || 'Basic'}</span>
              <div className="quantity-price-container">
                <span className="price order-details-general-price">₪{selectedPackage?.price || gig.price}</span>
              </div>
            </article>

            <ul className="order-details-items-container">
              {selectedPackage?.features
                ?.filter(feature => feature.included) // מציג רק תכונות כלולות
                .map((feature, i) => (
                  <li className="order-details-item" key={i}>
                    <svg width="16" height="16" viewBox="0 0 16 16">
                      <path d="M13.6202 2.6083L5.4001 10.8284L2.37973 7.80805C2.23329 7.66161 1.99585 7.66161 1.84939 7.80805L0.96551 8.69193C0.819073 8.83836 0.819073 9.0758 0.96551 9.22227L5.13492 13.3917C5.28135 13.5381 5.51879 13.5381 5.66526 13.3917L15.0344 4.02252C15.1809 3.87608 15.1809 3.63865 15.0344 3.49218L14.1505 2.6083C14.0041 2.46186 13.7667 2.46186 13.6202 2.6083Z"></path>
                    </svg>
                    {feature.text}
                  </li>
                ))}

            </ul>
          </span>
        </section>

        <section className="promo-code">
          <div className="promo-code-input-hidden">
            Enter promo code
          </div>
        </section>

        <section className="summary">
          <div className="summary-table">
            <div className="table-row fee-row">
              <span className="row-title">Service fee</span>
              <span className="price">₪16.40</span>
            </div>
            <div className="table-row tax-row">
              <span className="row-title">VAT</span>
              <span className="price">₪{priceWithTax.toFixed(2)}</span>
            </div>
          </div>
          <div className="summary-footer">
            <div className="table-row total-price">
              <span className="row-title">Total</span>
              <span className="price">₪{(priceWithTax+16.40).toFixed(2)}</span>
            </div>
            <div className="table-row delivery-date">
              <span className="row-title">Total delivery time</span>
              <span className="date">{daysToMake} days</span>
            </div>
          </div>

          <div className="pay-button-component">
            <button
              type='button'
              className="confirm-pay-button"
              onClick={onConfirmPay}>
              Confirm &amp; Pay
            </button>
          </div>

          <div className="secure-payment">
            <span className="ssl-locker" aria-hidden="true">
              <svg width="14" height="16" viewBox="0 0 14 16" fill='#74767e' xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 7C12.9062 7 13.25 7.15625 13.5625 7.4375C13.8438 7.75 14 8.09375 14 8.5V14.5C14 14.9375 13.8438 15.2812 13.5625 15.5625C13.25 15.875 12.9062 16 12.5 16H1.5C1.0625 16 0.71875 15.875 0.4375 15.5625C0.125 15.2812 0 14.9375 0 14.5V8.5C0 8.09375 0.125 7.75 0.4375 7.4375C0.71875 7.15625 1.0625 7 1.5 7H2.25V4.75C2.25 3.90625 2.4375 3.125 2.875 2.375C3.3125 1.65625 3.875 1.09375 4.625 0.65625C5.34375 0.21875 6.125 0 7 0C7.84375 0 8.625 0.21875 9.375 0.65625C10.0938 1.09375 10.6562 1.65625 11.0938 2.375C11.5312 3.125 11.75 3.90625 11.75 4.75V7H12.5ZM8.25 12.25V10.75C8.25 10.4062 8.125 10.125 7.875 9.875C7.625 9.625 7.34375 9.5 7 9.5C6.625 9.5 6.34375 9.625 6.09375 9.875C5.84375 10.125 5.75 10.4062 5.75 10.75V12.25C5.75 12.625 5.84375 12.9062 6.09375 13.1562C6.34375 13.4062 6.625 13.5 7 13.5C7.34375 13.5 7.625 13.4062 7.875 13.1562C8.125 12.9062 8.25 12.625 8.25 12.25ZM9.25 7V4.75C9.25 4.125 9.03125 3.59375 8.59375 3.15625C8.15625 2.71875 7.625 2.5 7 2.5C6.375 2.5 5.84375 2.71875 5.40625 3.15625C4.96875 3.59375 4.75 4.125 4.75 4.75V7H9.25Z"></path>
              </svg>
            </span>
            <span>SSL Secure Payment</span>
          </div>

          <section role="region">
            <section className="currency-section">
              <div className="currency-message tbody-6">You will be charged
                <span className="price">₪{packagePrice} </span>
                Total amount includes currency conversion fees.
              </div>
            </section>
          </section>
        </section>
      </div>
    </section>   
  )
}
