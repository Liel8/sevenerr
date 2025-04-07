import { useState } from "react";

export function GigPurchaseSidebar({ gig }) {
  const [selectedPackage, setSelectedPackage] = useState("basic");

  const packages = {
    basic: {
      title: "Beginner Package",
      description: "1 logo design, High Quality Mock-up, Logo Transparency",
      delivery: "4 Days Delivery",
      features: ["1 concept included", "Logo transparency"],
      price: 10,
    },
    standard: {
      title: "VIP Package",
      description: "2 HQ logo concepts + 3D Mock up + Logo Transparency + Printable Resolution file",
      delivery: "5 Days Delivery",
      features: [
        "2 concept included",
        "Logo transparency",
        "Printable file",
        "Include 3D mockup",
      ],
      price: 25,
    },
    premium: {
      title: "Premium Package",
      description: "3 logo concepts + Source File + Social Media Kit + 3D Mockup",
      delivery: "6 Days Delivery",
      features: [
        "3 concept included",
        "Logo transparency",
        "Source file",
        "Social media kit",
        "Include 3D mockup",
      ],
      price: 45,
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
        <h2>${current.price}</h2>
        <h3>{current.title}</h3>
        <p className="description">{current.description}</p>

        <div className="delivery">
          <span>🕒</span> <strong>{current.delivery}</strong>
        </div>

        <ul className="features">
          {current.features.map((feature, i) => (
            <li key={i}>✔ {feature}</li>
          ))}
        </ul>

        <button className="btn-purchase">Continue</button>
        <p className="compare-link">Compare packages</p>
      </div>
    </aside>
  );
}

