// import { useState } from "react";
// import { Link } from "react-router-dom"

// export function GigPurchaseSidebar({ gig }) {
//   const [selectedPackage, setSelectedPackage] = useState("basic");
//   const basePrice = gig.price || 10;
//   const packages = {
//     basic: {
//       title: "SILVER",
//       description: "1 logo design, High Quality Mock-up, Logo Transparency",
//       delivery: "4-Day Delivery",
//       features: [
//         "2 concept included",
//         "Logo transparency",
//         "Printable file",
//         "Include 3D mockup",
//         "Vector file",
//         "Include source file",
//         "Stationery designs",
//         "Include social media kit"
//       ],
//       price: basePrice,
//     },
//     standard: {
//       title: "GOLD",
//       description: "2 HQ logo concepts + 3D Mock up + Logo Transparency + Printable Resolution file",
//       delivery: "5-Day Delivery",
//       features: [
//         "2 concept included",
//         "Logo transparency",
//         "Printable file",
//         "Include 3D mockup",
//         "Vector file",
//         "Include source file",
//         "Stationery designs",
//         "Include social media kit"
//       ],
//       price: Math.round(basePrice*1.3),
//     },
//     premium: {
//       title: "PLATINUM",
//       description: "3 logo concepts + Source File + Social Media Kit + 3D Mockup",
//       delivery: "6-Day Delivery",
//       features: [
//         "2 concept included",
//         "Logo transparency",
//         "Printable file",
//         "Include 3D mockup",
//         "Vector file",
//         "Include source file",
//         "Stationery designs",
//         "Include social media kit"
//       ],
//       price: Math.round(basePrice * 1.3 * 1.5),
//     },
//   };

//   const current = packages[selectedPackage];

//   return (
//     <aside className="gig-purchase">
//       <div className="tabs">
//         {["basic", "standard", "premium"].map((type, idx, arr) => (
//           <div key={type} className="tab-wrapper">
//             <input
//               type="radio"
//               id={`package-tab-${idx}`}
//               name="package-tab-group"
//               checked={selectedPackage === type}
//               onChange={() => setSelectedPackage(type)}
//             />
//             <label
//               htmlFor={`package-tab-${idx}`}
//               className={`tab-label ${selectedPackage === type ? "active" : ""} ${
//                 idx === arr.length - 1 ? "last" : ""
//               }`}
//               role="tab"
//               aria-selected={selectedPackage === type}
//               tabIndex={0}
//             >
//               {type.charAt(0).toUpperCase() + type.slice(1)}
//             </label>
//           </div>
//         ))}
//       </div>


//       <div className="package-options">
//         <div className="title-price">         
//           {/* <h3>{current.title}</h3> */}
//           <div className="price-with-icon">
//             <h2>₪{current.price}</h2>
//             {/* <svg
//               width="16"
//               height="16"
//               viewBox="0 0 14 15"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="#404145"
//             >
//               <g clipPath="url(#info-outline-icon_svg__a)">
//                 <path d="M6.3 4h1.4v1.4H6.3V4Zm0 2.8h1.4V11H6.3V6.8ZM7 .5c-3.864 0-7 3.136-7 7s3.136 7 7 7 7-3.136 7-7-3.136-7-7-7Zm0 12.6a5.607 5.607 0 0 1-5.6-5.6c0-3.087 2.513-5.6 5.6-5.6 3.087 0 5.6 2.513 5.6 5.6 0 3.087-2.513 5.6-5.6 5.6Z" />
//               </g>
//               <defs>
//                 <clipPath id="info-outline-icon_svg__a">
//                   <path transform="translate(0 .5)" d="M0 0h14v14H0z" />
//                 </clipPath>
//               </defs>
//             </svg> */}
//           </div>
//         </div>

//         <p className="description">{current.description}</p>

//         <div className="delivery-wrapper">
//         <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#62646a">
//         <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path><path d="M9 4H7v5h5V7H9V4z"></path></svg>
//          <b className="delivery">{current.delivery}</b>
//         </div>

//         <ul className="features">
//           {current.features.map((feature, i) => (
//             <li key={i} className="feature-item">
//               <span className="check-icon" aria-hidden="true">
//                 <svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
//                   <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"/>
//                 </svg>
//               </span>
//               {feature}
//             </li>
//           ))}
//         </ul>

//         <Link to={`/gig/details/${gig._id}/payment`}
//           state={{ selectedPackage: current }}
//         >
//           <button className="btn-purchase">
//             Continue
//             <span className="arrow-icon" aria-hidden="true">
//               <svg
//                 width="16"
//                 height="16"
//                 viewBox="0 0 16 16"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="white"
//               >
//                 <path d="M9.923 2.969a.643.643 0 0 0-.923 0 .643.643 0 0 0 0 .923l2.804 2.961H1.486a.643.643 0 1 0 0 1.287h10.358l-2.952 3.117a.643.643 0 0 0 .923.923l4.123-4.354a.643.643 0 0 0 0-.923L9.923 2.969Z" />
//               </svg>
//             </span>
//           </button>
//         </Link>
//         {/* <p className="compare-link">Compare packages</p> */}
//         <button className="btn-contact">Contact me</button>
//       </div>
//     </aside>
// )}

import { useState } from "react"
import { Link } from "react-router-dom"

export function GigPurchaseSidebar({ gig }) {
  const [selectedPackage, setSelectedPackage] = useState("basic")
  const basePrice = gig.price || 10

  function buildGigPackagesByCategory(category, basePrice) {
    const featuresByCategory = {
      'Graphics & Design': [
        "2 concepts included", "High resolution file", "Logo transparency", "Vector file",
        "Printable file", "Include source file", "Commercial use", "Include social media kit"
      ],
      'Programming & Tech': [
        "Custom code", "Responsive design", "Bug fixing", "API integration",
        "Source code included", "Database setup", "Deployment support", "Documentation included"
      ],
      'Digital Marketing': [
        "SEO optimization", "Social media strategy", "Ad campaign setup", "Keyword research",
        "Analytics report", "Audience targeting", "Content plan", "Competitive analysis"
      ],
      'Video & Animation': [
        "1080p HD quality", "Custom animation", "Voice-over included", "Script writing",
        "Background music", "Sound effects", "Revisions included", "Transparent background"
      ],
      'Writing & Translation': [
        "Grammatical proofreading", "SEO keywords", "Plagiarism-free content", "Research included",
        "Translation accuracy", "Tone adaptation", "Native-level writing", "Editable document"
      ],
      'Music & Audio': [
        "High quality WAV/MP3", "Voice-over included", "Background music", "Noise reduction",
        "Mixing and mastering", "Custom composition", "Sound effects", "Commercial rights"
      ],
      'Business': [
        "Market research", "Business plan writing", "Pitch deck design", "SWOT analysis",
        "Financial projection", "Competitive analysis", "Editable reports", "Presentation slides"
      ],
      'Data': [
        "Data cleaning", "Visualization charts", "Excel reports", "SQL analysis",
        "Dashboard creation", "Data scraping", "Statistical summary", "Predictive modeling"
      ],
      'Photography': [
        "High resolution images", "Color correction", "Background removal", "Photo retouching",
        "Image resizing", "Lighting adjustments", "Photo montage", "Raw files included"
      ]
    }

    const features = featuresByCategory[category] || []
    const includedFeatures = {
      basic: [0, 1, 2],
      standard: [0, 1, 2, 3, 4, 6],
      premium: 'all'
    }

    const mapFeatures = (pkg) => {
      return features.map((text, idx) => {
        const isIncluded = includedFeatures[pkg] === 'all' || includedFeatures[pkg].includes(idx)
        return { text, included: isIncluded }
      })
    }

    return {
      basic: {
        title: "Basic",
        description: "Basic plan for essential delivery",
        delivery: "2-Day Delivery",
        price: basePrice,
        features: mapFeatures('basic')
      },
      standard: {
        title: "Standard",
        description: "Standard plan with more value and features",
        delivery: "4-Day Delivery",
        price: Math.round(basePrice * 1.3),
        features: mapFeatures('standard')
      },
      premium: {
        title: "Premium",
        description: "All features included in the premium plan",
        delivery: "6-Day Delivery",
        price: Math.round(basePrice * 1.3 * 1.5),
        features: mapFeatures('premium')
      }
    }
  }

  const packages = buildGigPackagesByCategory(gig.category, basePrice)
  const current = packages[selectedPackage]
  console.log(current.features);
  return (
    <aside className="gig-purchase">
      <div className="tabs">
        {["basic", "standard", "premium"].map((type, idx, arr) => (
          <div key={type} className="tab-wrapper">
            <input
              type="radio"
              id={`package-tab-${idx}`}
              name="package-tab-group"
              checked={selectedPackage === type}
              onChange={() => setSelectedPackage(type)}
            />
            <label
              htmlFor={`package-tab-${idx}`}
              className={`tab-label ${selectedPackage === type ? "active" : ""} ${idx === arr.length - 1 ? "last" : ""}`}
              role="tab"
              aria-selected={selectedPackage === type}
              tabIndex={0}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </label>
          </div>
        ))}
      </div>

      <div className="package-options">
        <div className="title-price">
          <div className="price-with-icon">
            <h2>₪{current.price}</h2>
          </div>
        </div>

        <p className="description">{current.description}</p>

        <div className="delivery-wrapper">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="#62646a">
            <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path>
            <path d="M9 4H7v5h5V7H9V4z"></path>
          </svg>
          <b className="delivery">{current.delivery}</b>
        </div>

        <ul className="features">
          {current.features.map((feature, i) => (
            <li key={i} className={`feature-item ${!feature.included ? 'disabled' : ''}`}>
              <span className="check-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                  <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"/>
                </svg>
              </span>
              {feature.text}
            </li>
          ))}
        </ul>

        <Link to={`/gig/${gig._id}/payment`} state={{ selectedPackage: current }}>
          <button className="btn-purchase">
            Continue
            <span className="arrow-icon" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                <path d="M9.923 2.969a.643.643 0 0 0-.923 0 .643.643 0 0 0 0 .923l2.804 2.961H1.486a.643.643 0 1 0 0 1.287h10.358l-2.952 3.117a.643.643 0 0 0 .923.923l4.123-4.354a.643.643 0 0 0 0-.923L9.923 2.969Z" />
              </svg>
            </span>
          </button>
        </Link>

        <button className="btn-contact">Contact me</button>
      </div>
    </aside>
  )
}


