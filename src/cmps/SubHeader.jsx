import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export function SubHeader() {
  const [isVisible, setIsVisible] = useState(false)
  const triggerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting)
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0,
      }
    )

    if (triggerRef.current) {
      observer.observe(triggerRef.current)
    }

    return () => {
      if (triggerRef.current) {
        observer.unobserve(triggerRef.current)
      }
    }
  }, [])

  return (
    <>
      <div ref={triggerRef}></div>

      {isVisible && (
        <div className="sub-header-container main-layout full animate__animated animate__flipInX">
          <nav className="category-header">
            <button className="nav-btn left hidden">
              <i className="fa-solid fa-chevron-left" aria-hidden="true"></i>
            </button>
            <ul className="categories-container">
              {[
                "Graphics & Design",
                "Programming & Tech",
                "Digital Marketing",
                "Video & Animation",
                "Writing & Translation",
                "Music & Audio",
                "Business",
                "Data",
                "Photography"
              ].map((cat, idx) => (
                <li key={idx}>
                  <Link
                    className="category-link"
                    to={`/gig/${encodeURIComponent(cat)}`}
                    style={{ marginLeft: idx === 0 ? '0vh' : undefined }}
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
            <button className="nav-btn right hidden">
              <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
            </button>
          </nav>
        </div>
      )}
    </>
  )
}



// import React from 'react';
// import { Link } from 'react-router-dom';

// export function SubHeader() {
//   return (
//     <div className="transparent sub-header-container main-layout full animate__animated animate__flipInX">
//       <nav className="category-header">
//         <button className="nav-btn left">
//           <i className="fa-solid fa-chevron-left" aria-hidden="true"></i>
//         </button>
//         <ul className="categories-container">
//           <li>
//             <Link className="category-link" to="/gig" style={{ marginLeft: '0vh' }}>
//               Graphics &amp; Design
//             </Link>
//           </li>
//           <li>
//             <Link className="category-link" to="/gig">
//               Programming &amp; Tech
//             </Link>
//           </li>
//           <li>
//             <Link className="category-link" to="/gig">
//               Digital Marketing
//             </Link>
//           </li>
//           <li>
//             <Link className="category-link" to="/gig">
//               Video &amp; Animation
//             </Link>
//           </li>
//           <li>
//             <Link className="category-link" to="/gig">
//               Writing &amp; Translation
//             </Link>
//           </li>
//           <li>
//             <Link className="category-link" to="/gig">
//               Music &amp; Audio
//             </Link>
//           </li>
//           <li>
//             <Link className="category-link" to="/gig">
//               Business
//             </Link>
//           </li>
//           <li>
//             <Link className="category-link" to="/gig">
//               Data
//             </Link>
//           </li>
//           <li>
//             <Link className="category-link" to="/gig">
//               Photography
//             </Link>
//           </li>
//         </ul>
//         <button className="nav-btn right">
//           <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
//         </button>
//       </nav>
//     </div>
//   );
// }
