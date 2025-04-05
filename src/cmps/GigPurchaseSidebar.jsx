export function GigPurchaseSidebar({ gig }) {
    return (
      <aside className="gig-purchase">
        <div className="package-options">
          <h2>${gig.price}</h2>
          <p>Includes: 1 concept, logo transparency</p>
          <button className="btn-purchase">Continue</button>
        </div>
      </aside>
    )
  }