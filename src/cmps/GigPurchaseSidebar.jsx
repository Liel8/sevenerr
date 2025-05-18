import { useState } from "react";
import { Link } from "react-router-dom"

export function GigPurchaseSidebar({ gig }) {
  const [selectedPackage, setSelectedPackage] = useState("basic");
  const basePrice = gig.price || 10;
  const packages = {
    basic: {
      title: "SILVER",
      description: "1 logo design, High Quality Mock-up, Logo Transparency",
      delivery: "4 Days Delivery",
      features: ["1 concept included", "Logo transparency"],
      price: basePrice,
    },
    standard: {
      title: "GOLD",
      description: "2 HQ logo concepts + 3D Mock up + Logo Transparency + Printable Resolution file",
      delivery: "5 Days Delivery",
      features: [
        "2 concept included",
        "Logo transparency",
        "Printable file",
        "Include 3D mockup",
      ],
      price: Math.round(basePrice*1.3),
    },
    premium: {
      title: "PLATINUM (Recommended)",
      description: "3 logo concepts + Source File + Social Media Kit + 3D Mockup",
      delivery: "6 Days Delivery",
      features: [
        "3 concept included",
        "Logo transparency",
        "Source file",
        "Social media kit",
        "Include 3D mockup",
      ],
      price: Math.round(basePrice * 1.3 * 1.5),
    },
  };

  const current = packages[selectedPackage];

  return (
    <aside className="gig-purchase">
      <div className="tabs">
        {["basic", "standard", "premium"].map((type) => (
          <button
            key={type}
            className={selectedPackage === type ? "active" : ""}
            onClick={() => setSelectedPackage(type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      <div className="package-options">
        <div className="title-price">         
          <h3>{current.title}</h3>
          <h2>₪{current.price}</h2>
        </div>

        <p className="description">{current.description}</p>

        <div className="delivery-wrapper">
        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#62646a">
        <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path><path d="M9 4H7v5h5V7H9V4z"></path></svg>
         <b className="delivery">{current.delivery}</b>
        </div>

        <ul className="features">
          {current.features.map((feature, i) => (
            <li key={i}>✔ {feature}</li>
          ))}
        </ul>

        <Link to={`/gig/details/${gig._id}/payment`}><button className="btn-purchase">Continue</button></Link>
        <p className="compare-link">Compare packages</p>
      </div>
    </aside>
)}


