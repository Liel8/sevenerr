// import { useState, useEffect } from 'react'
// import { useSelector } from 'react-redux'

// import { loadGigs, addGig, updateGig, removeGig, addGigMsg } from '../store/actions/gig.actions'

// import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
// import { gigService } from '../services/gig'
// import { userService } from '../services/user'
// import { GigList } from '../cmps/GigList'
// import { GigFilter } from '../cmps/GigFilter'

// export function GigIndex() {

//     const [ filterBy, setFilterBy ] = useState(gigService.getDefaultFilter())
//     const gigs = useSelector(storeState => storeState.gigModule.gigs)

//     useEffect(() => {
//         loadGigs(filterBy)
//     }, [filterBy])

//     async function onRemoveGig(gigId) {
//         try {
//             await removeGig(gigId)
//             showSuccessMsg('Gig removed')            
//         } catch (err) {
//             showErrorMsg('Cannot remove gig')
//         }
//     }

//     async function onAddGig() {
//         const gig = gigService.getEmptyGig()
//         gig.vendor = prompt('Vendor?')
//         try {
//             const savedGig = await addGig(gig)
//             showSuccessMsg(`Gig added (id: ${savedGig._id})`)
//         } catch (err) {
//             showErrorMsg('Cannot add gig')
//         }        
//     }

//     async function onUpdateGig(gig) {
//         const speed = +prompt('New speed?', gig.speed)
//         if(speed === 0 || speed === gig.speed) return

//         const gigToSave = { ...gig, speed }
//         try {
//             const savedGig = await updateGig(gigToSave)
//             showSuccessMsg(`Gig updated, new speed: ${savedGig.speed}`)
//         } catch (err) {
//             showErrorMsg('Cannot update gig')
//         }        
//     }

//     return (
//         <section classname="gig-index main-layout full">
//             <article classname="bread-crumbs">
//                 <a classname="home" href="/">
//                 <img classname="home-icon" src="" alt="Home" title="Go to homepage" />
//                 </a>
//                 <span classname="divider">/</span>
//                 <a title="Graphics &amp; Design Category" href="/gig">Graphics &amp; Design</a>
//             </article>
//             <h1 classname="category-header">Graphics &amp; Design</h1>
//             <p classname="category-sub-header">Your brand's visual identity elevated to perfection.</p>
//             <section classname="filter-btns-container full main-layout ">
//                 <section classname="filter-btns">
//                     <div classname="btns-container">
//                         <button classname="filter-btn   ">
//                             Options 
//                             <span classname="icon fa-solid angle-down" aria-hidden="true"></span>
//                         </button>
//                         <button classname="filter-btn   ">
//                             Seller details 
//                             <span classname="icon fa-solid angle-down" aria-hidden="true"></span>
//                         </button>
//                         <button classname="filter-btn   ">
//                             Budget 
//                             <span classname="icon fa-solid angle-down" aria-hidden="true"></span>
//                         </button>
//                         <button classname="filter-btn   ">
//                             Delivery time 
//                             <span classname="icon fa-solid angle-down" aria-hidden="true"></span>
//                         </button>
//                     </div>
//                     <section classname="pills-container"></section>
//                 </section>
//             </section>
//             <div classname="top-of-gigs">
//                 <div classname="number-of-results">30 services available</div>
//                 <label classname="sort-container">
//                     <span classname="sort-title">Sort by:</span>
//                     <span classname="drop-down-btn">Recommended</span>
//                 </label>
//             </div>
//             <section classname="gig-list-wrapper">
//                 <GigList />
//             </section>
//             <ul classname="pagination flex">
//                 <li classname="pagination-arrows first-page disabled">
//                     <i classname="fa-solid fa-arrow-left" aria-hidden="true"></i>
//                 </li>
//                 <li classname="page-number active">
//                     <span>1</span>
//                 </li>
//                 <li classname="page-number ">
//                     <span>2</span>
//                 </li>
//                 <li classname="pagination-arrows last-page ">
//                     <i classname="fa-solid fa-arrow-right" aria-hidden="true"></i>
//                 </li>
//             </ul>
//         </section>

//     )
// }