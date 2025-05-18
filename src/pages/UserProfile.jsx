import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { loadOrders, updateOrder } from '../store/actions/orders.actions'
import { OrdersTable } from '../cmps/OrdersTable'

export function UserProfile() {
  // Logged-in seller
  const user   = useSelector(state => state.userModule.user)
  // Orders fetched into Redux
  const orders = useSelector(state => state.orderModule.orders)

  // Load orders on mount
  useEffect(() => {
    if (user && user._id) loadOrders(user._id)
  }, [user])

  // Handle status change (seller action)
  function handleStatusChange(updatedOrder) {
    updateOrder(updatedOrder)
  }

  return (
    <section className="details-container">
      <section className="user-details ">
  <div className="user-card">
    <div className="user-profile-info">
      <div className="flex justify-center">
        <div className="user-profile-img">
          <img src={user.imgUrl} alt={user.fullname} />
        </div>
      </div>
      <div className="user-profile-label">
        <div className="username-line flex column align-center">
          <div className="username-info">{user.fullname}</div>
          <div className="secondary-name">@{user.username}</div>
        </div>
      </div>
      <div className="user-stats-desc">
        <ul className="user-stats with-border-top">
          <li className="location info-card-style flex">
            <span>
            <svg width="16" height="16" viewBox="0 0 13 16" xmlns="http://www.w3.org/2000/svg" fill="var(--s5gl5m1l)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.692 1.75A4.383 4.383 0 0 0 2.31 6.133c0 1.837 1.146 3.883 2.414 5.555a23.416 23.416 0 0 0 1.97 2.266l.26-.267a23.416 23.416 0 0 0 1.709-1.999c1.268-1.672 2.414-3.718 2.414-5.555A4.383 4.383 0 0 0 6.692 1.75Zm0 13.25-.504.555-.002-.002-.004-.003-.013-.012-.047-.044-.172-.164a24.896 24.896 0 0 1-2.422-2.735C2.23 10.884.81 8.496.81 6.133a5.883 5.883 0 0 1 11.767 0c0 2.363-1.421 4.75-2.72 6.462a24.896 24.896 0 0 1-2.593 2.899l-.047.044-.013.012-.004.003-.001.001s-.001.001-.506-.554Zm0 0 .506.554a.751.751 0 0 1-1.01 0L6.692 15Zm0-10.45a1.583 1.583 0 1 0 0 3.167 1.583 1.583 0 0 0 0-3.167ZM3.61 6.133a3.083 3.083 0 1 1 6.167 0 3.083 3.083 0 0 1-6.167 0Z"></path></svg>
              From
            </span>
            <b>Israel</b>
          </li>
          <li className="member-since info-card-style flex">
            <span>
            <svg width="16" height="16" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" fill="var(--s5gl5m1l)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 1.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM2.041 12c.165-.466.98-2 4.96-2 3.978 0 4.793 1.534 4.958 2H2.04Zm4.96-3.5C1.546 8.5.5 11.243.5 12.123c0 .879.71 1.377 1.374 1.377h10.252c.663 0 1.374-.498 1.374-1.377 0-.88-1.047-3.623-6.5-3.623Z"></path></svg>
              Member since
            </span>
            <b>Oct 2023</b>
          </li>
          <li className="member-res-time info-card-style flex">
            <span>
            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="var(--s5gl5m1l)">
            <path d="M8 .25A7.749 7.749 0 0 0 .25 8 7.749 7.749 0 0 0 8 15.75 7.749 7.749 0 0 0 15.75 8 7.749 7.749 0 0 0 8 .25Zm0 14A6.248 6.248 0 0 1 1.75 8 6.248 6.248 0 0 1 8 1.75 6.248 6.248 0 0 1 14.25 8 6.248 6.248 0 0 1 8 14.25Zm1.931-3.262L7.278 9.059a.377.377 0 0 1-.153-.303V3.625c0-.206.169-.375.375-.375h1c.206 0 .375.169.375.375v4.428l2.088 1.519a.375.375 0 0 1 .08.525l-.587.81a.378.378 0 0 1-.525.08Z"></path></svg>
              Avg. Response Time
            </span>
            <b>1 hour</b>
          </li>
          <li className="member-res-time info-card-style flex">
            <span>
              <span className="fa-solid fa-paper-plane icon" aria-hidden="true"></span>
              Last Delivery
            </span>
            <b>4 hours</b>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="desc-card">
    <div className="user-profile-desc">
      <div className="user-stats">
        <div className="user-data">
          <div className="header flex">
            <h3 title="Tell us more about yourself. Buyers are also interested in learning about you as a person.">
              Description
            </h3>
          </div>
          <p>Fullstack developer with awesome experience🚀</p>
        </div>
        <div className="user-lang with-border-top">
          <div className="header flex">
            <h3 title="You can make up to four selections.">Languages</h3>
          </div>
          <ul>
            <li>
              <span className="title">English</span> - 
              <span className="sub-title">Fluent</span>
            </li>
            <li>
              <span className="title">Hebrew</span> - 
              <span className="sub-title">Fluent</span>
            </li>
          </ul>
        </div>
        <div className="user-linked with-border-top">
          <div className="header flex">
            <h3>Linked Accounts</h3>
          </div>
          <ul>
            <li>
              <span className="title">
                <span className="fa-brands fa-facebook logo" aria-hidden="true"></span>
                Facebook
              </span>
            </li>
            <li>
              <span className="title">
                <span className="fa-brands fa-google logo" aria-hidden="true"></span>
                Google
              </span>
            </li>
            <li>
              <span className="title">
                <span className="fa-brands fa-twitter logo" aria-hidden="true"></span>
                Twitter
              </span>
            </li>
            <li>
              <span className="title">
                <span className="fa-brands fa-dribbble logo" aria-hidden="true"></span>
                Dribbble
              </span>
            </li>
          </ul>
        </div>
        <div className="user-skills with-border-top">
          <div className="header flex">
            <h3 title="Let your buyers know your skills. Skills gained through your previous jobs, hobbies or even everyday life.">
              Skills
            </h3>
          </div>
          <ul>
            <li><span className="pill">Website design</span></li>
            <li><span className="pill">Shopify marketing</span></li>
            <li><span className="pill">Python</span></li>
            <li><span className="pill">JavaScript</span></li>
            <li><span className="pill">Sales</span></li>
          </ul>
        </div>
        <div className="user-education with-border-top">
          <div className="header flex">
            <h3 title="Describe your educational background. It will help buyers get to know you!">
              Education
            </h3>
          </div>
          <ul>
            <li><span className="title">M.B.A. - Financial Management</span></li>
            <li><span className="empty">Universität Berlin, Germany, Graduated 2017</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
      <section className="orders-column">
        <div className="order-header flex">
          <h1>Manage Orders</h1>
          {/* Seller-specific controls could go here */}
        </div>

        {/* Render the generic OrdersTable in seller mode */}
        <OrdersTable
          orders={orders}
          mode="seller"
          onAction={handleStatusChange}
        />
      </section>
    </section>
  )
}





// export function UserProfile() {

//     return (
//         <section className="details-container">
//             <section className="user-details ">
//                 <div className="user-card">
//                     <div className="user-profile-info">
//                         <div className="flex justify-center">
//                             <div className="user-profile-img">
//                                 <img src="https://res.cloudinary.com/dgsfbxsed/image/upload/v1699297748/mtzz6bvdfzf3xwirw8vo.jpg" alt="user img" />
//                             </div>
//                         </div>
//                         <div className="user-profile-label">
//                             <div className="username-line flex column align-center">
//                                 <div className="username-info">Avici Rabi</div>
//                                 <div className="secondary-name">@avici</div>
//                             </div>
//                         </div>
//                         <div className="user-stats-desc">
//                             <ul className="user-stats with-border-top">
//                                 <li className="location info-card-style flex">
//                                     <span>
//                                     <span className="fa-regular fa-clock icon" aria-hidden="true"></span>
//                                     {/* <svg width="32" height="32">
//                                         <use href="/public/icons/location-sign-icon.svg" />
//                                     </svg> */}
//                                         From
//                                     </span>
//                                     <b>Israel</b>
//                                 </li>
//                                 <li className="member-since info-card-style flex">
//                                     <span>
//                                         <span className="fa-solid fa-user icon" aria-hidden="true"></span>
//                                         Member since
//                                     </span>
//                                     <b>Oct 2023</b>
//                                 </li>
//                                 <li className="member-res-time info-card-style flex">
//                                     <span>
//                                         <span className="fa-regular fa-clock icon" aria-hidden="true"></span>
//                                         Avg. Response Time
//                                     </span>
//                                     <b>1 hour</b>
//                                 </li>
//                                 <li className="member-res-time info-card-style flex">
//                                     <span>
//                                         <span className="fa-solid fa-paper-plane icon" aria-hidden="true"></span>
//                                         Last Delivery
//                                     </span>
//                                     <b>4 hours</b>
//                                 </li> 
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="desc-card">
//                     <div className="user-profile-desc">
//                         <div className="user-stats">
//                             <div className="user-data">
//                                 <div className="header flex">
//                                     <h3 title="Tell us more about yourself. Buyers are also interested in learning about you as a person.">Description</h3>
//                                 </div>
//                                 <p>Fullstack developer with awesome exprience🚀</p>
//                             </div>
//                             <div className="user-lang with-border-top">
//                                 <div className="header flex">
//                                     <h3 title="You can make up to four selections.">Languages</h3>
//                                 </div>
//                                 <ul>
//                                     <li>
//                                         <span className="title">English</span>
//                                         - 
//                                         <span className="sub-title">Fluent</span>
//                                     </li>
//                                     <li>
//                                         <span className="title">Hebrew</span>
//                                         - 
//                                         <span className="sub-title">Fluent</span>
//                                     </li>
//                                 </ul>
//                             </div>
//                             <div className="user-linked with-border-top">
//                                 <div className="header flex">
//                                     <h3>Linked Accounts</h3>
//                                 </div>
//                                 <ul>
//                                     <li>
//                                         <span className="title">
//                                             <span className="fa-brands fa-facebook logo" aria-hidden="true"></span>
//                                             Facebook
//                                         </span>
//                                     </li>
//                                     <li>
//                                         <span className="title">
//                                             <span className="fa-brands fa-google logo" aria-hidden="true"></span>
//                                             Google
//                                         </span>
//                                     </li>
//                                     <li>
//                                         <span className="title">
//                                             <span className="fa-brands fa-twitter logo" aria-hidden="true"></span>
//                                             Twitter
//                                         </span>
//                                     </li>
//                                     <li>
//                                         <span className="title">
//                                             <span className="fa-brands fa-dribbble logo" aria-hidden="true"></span>
//                                             Dribbble
//                                         </span>
//                                     </li>
//                                 </ul>
//                             </div>
//                             <div className="user-skills with-border-top">
//                                 <div className="header flex">
//                                     <h3 title="Let your buyers know your skills. Skills gained through your previous jobs, hobbies or even everyday life.">Skills</h3>
//                                 </div>
//                                 <ul>
//                                     <li>
//                                         <span className="pill">Website design</span>
//                                     </li>
//                                     <li>
//                                         <span className="pill">Shopify marketing</span>
//                                     </li>
//                                     <li>
//                                         <span className="pill">Python</span>
//                                     </li>
//                                     <li>
//                                         <span className="pill">JavaScript</span>
//                                     </li>
//                                     <li>
//                                         <span className="pill">Sales</span>
//                                     </li>
//                                 </ul>
//                             </div>
//                             <div className="user-education with-border-top">
//                                 <div className="header flex">
//                                     <h3 title="Describe your educational background. It will help buyers get to know you!">Education</h3>
//                                 </div>
//                                 <ul>
//                                     <li>
//                                         <span className="title">M.B.A. - Financial Management</span>
//                                     </li>
//                                     <li>
//                                         <span className="empty">Universität Berlin, Germany, Graduated 2017</span>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <section className="orders-column">
//                 <div className="manage-orders">
//                     <div className="order-header flex">
//                         <h1>Manage Orders</h1>
//                         <button className="dash-btn">Dashboard Overview</button>
//                     </div>
//                 </div>

//                 <section className="">
//                     <table className="order-list ">
//                         <thead>
//                             <tr>
//                                 <td>Buyer</td>
//                                 <td>Gig</td>
//                                 <td>Due on</td>
//                                 <td>Total</td>
//                                 <td className="order-status">Status</td>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td>
//                                     <div className="user-with-img">
//                                         <img src="https://res.cloudinary.com/dgsfbxsed/image/upload/v1699302177/p9p0m26jbyb8q6jd7nud.webp" alt="Buyer img" />
//                                         Ciro D
//                                     </div>
//                                 </td>
//                                 <td className="order-title">
//                                     <div className="gig-img flex">
//                                         <div className="long-text">
//                                             <p className="book-desc">I will design a responsive we...  </p>
//                                         </div>
//                                     </div>
//                                 </td>
//                                 <td>Nov 10, 2023</td>
//                                 <td>$69</td>
//                                 <td className="status ">
//                                     <span className="fulfilled-label label "> Fulfilled </span>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     <div className="user-with-img">
//                                         <img src="https://res.cloudinary.com/de2rdmsca/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1696589336/MV5BZDJhYzdkMTUtMTg2MS00ZTM5LWI1OGUtYTY5MzY4NDM3NThjXkEyXkFqcGdeQXVyMjQwMDg0Ng_._V1__okvske.jpg" alt="Buyer img" />
//                                         Liri C
//                                     </div>
//                                 </td>
//                                 <td className="order-title">
//                                     <div className="gig-img flex">
//                                         <div className="long-text">
//                                             <p className="book-desc">I will create a professional ...  </p>
//                                         </div>
//                                     </div>
//                                 </td>
//                                 <td>Nov 9, 2023</td>
//                                 <td>$22</td>
//                                 <td className="status ">
//                                     <span className="fulfilled-label label "> Fulfilled </span>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     <div className="user-with-img">
//                                         <img src="https://res.cloudinary.com/dgsfbxsed/image/upload/v1699444623/lyiwbaiibkqz0vpm1ddj.webp" alt="Buyer img" />
//                                         Jenner P
//                                     </div>
//                                 </td>
//                                 <td className="order-title">
//                                     <div className="gig-img flex">
//                                         <div className="long-text">
//                                             <p className="book-desc">I will create pixel art anima...  </p>
//                                         </div>
//                                     </div>
//                                 </td>
//                                 <td>Nov 12, 2023</td>
//                                 <td>$93</td>
//                                 <td className="status ">
//                                     <span className="fulfilled-label label "> Fulfilled </span>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     <div className="user-with-img">
//                                         <img src="https://res.cloudinary.com/dgsfbxsed/image/upload/v1699297771/wwalxfxyg1msfp25zack.jpg" alt="Buyer img" />
//                                         Raz Amsalem
//                                     </div>
//                                 </td>
//                                 <td className="order-title">
//                                     <div className="gig-img flex">
//                                         <div className="long-text">
//                                             <p className="book-desc">I will create a professional ...  </p>
//                                         </div>
//                                     </div>
//                                 </td>
//                                 <td>Nov 11, 2023</td>
//                                 <td>$40</td>
//                                 <td className="status ">
//                                     <span className="fulfilled-label label "> Fulfilled </span>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     <div className="user-with-img">
//                                         <img src="https://res.cloudinary.com/dgsfbxsed/image/upload/v1699297771/wwalxfxyg1msfp25zack.jpg" alt="Buyer img" />
//                                         Raz Amsalem
//                                     </div>
//                                 </td>
//                                 <td className="order-title">
//                                     <div className="gig-img flex">
//                                         <div className="long-text">
//                                             <p className="book-desc">I will create a professional ...  </p>
//                                         </div>
//                                     </div>
//                                 </td>
//                                 <td>Nov 16, 2023</td>
//                                 <td>$22</td>
//                                 <td className="status ">
//                                     <span className="fulfilled-label label "> Fulfilled </span>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     <div className="user-with-img">
//                                         <img src="https://res.cloudinary.com/dgsfbxsed/image/upload/v1699297760/p3gum8eu8nfdxwptc9bt.jpg" alt="Buyer img" />
//                                         Tzvia I 
//                                     </div>
//                                 </td>
//                                 <td className="order-title">
//                                     <div className="gig-img flex">
//                                         <div className="long-text">
//                                             <p className="book-desc">I will create a professional ...  </p>
//                                         </div>
//                                     </div>
//                                 </td>
//                                 <td>Nov 16, 2023</td>
//                                 <td>$22</td>
//                                 <td className="status ">
//                                     <span className="fulfilled-label label "> Fulfilled </span>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     <div className="user-with-img">
//                                         <img src="https://res.cloudinary.com/dgsfbxsed/image/upload/v1699297760/p3gum8eu8nfdxwptc9bt.jpg" alt="Buyer img" />
//                                         Tzvia I 
//                                     </div>
//                                 </td>
//                                 <td className="order-title">
//                                     <div className="gig-img flex">
//                                         <div className="long-text">
//                                             <p className="book-desc">I will design a responsive we...  </p>
//                                         </div>
//                                     </div>
//                                 </td>
//                                 <td>Mar 23, 2024</td>
//                                 <td>$69</td>
//                                 <td className="status ">
//                                     <span className="fulfilled-label label "> Fulfilled </span>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     <div className="user-with-img">
//                                         <img src="https://res.cloudinary.com/dgsfbxsed/image/upload/v1699297760/p3gum8eu8nfdxwptc9bt.jpg" alt="Buyer img" />
//                                         Tzvia I 
//                                     </div>
//                                 </td>
//                                 <td className="order-title">
//                                     <div className="gig-img flex">
//                                         <div className="long-text">
//                                             <p className="book-desc">I will design a responsive we...  </p>
//                                         </div>
//                                     </div>
//                                 </td>
//                                 <td>Mar 27, 2024</td>
//                                 <td>$104</td>
//                                 <td className="status ">
//                                     <span className="fulfilled-label label "> Fulfilled </span>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     <div className="user-with-img">
//                                         <img src="https://res.cloudinary.com/dgsfbxsed/image/upload/v1699297760/p3gum8eu8nfdxwptc9bt.jpg" alt="Buyer img" />
//                                         Tzvia I 
//                                     </div>
//                                 </td>
//                                 <td className="order-title">
//                                     <div className="gig-img flex">
//                                         <div className="long-text">
//                                             <p className="book-desc">I will design a responsive we...  </p>
//                                         </div>
//                                     </div>
//                                 </td>
//                                 <td>Apr 5, 2024</td>
//                                 <td>$69</td>
//                                 <td className="status ">
//                                     <span className="fulfilled-label label "> Fulfilled </span>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     <div className="user-with-img">
//                                         <img src="https://res.cloudinary.com/dgsfbxsed/image/upload/v1699297760/p3gum8eu8nfdxwptc9bt.jpg" alt="Buyer img" />
//                                         Tzvia I 
//                                     </div>
//                                 </td>
//                                 <td className="order-title">
//                                     <div className="gig-img flex">
//                                         <div className="long-text">
//                                             <p className="book-desc">I will create pixel art anima...  </p>
//                                         </div>
//                                     </div>
//                                 </td>
//                                 <td>Nov 11, 2024</td>
//                                 <td>$104</td>
//                                 <td className="status ">
//                                     <span className="fulfilled-label label "> Fulfilled </span>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     <div className="user-with-img">
//                                         <img src="https://res.cloudinary.com/dgsfbxsed/image/upload/v1699297760/p3gum8eu8nfdxwptc9bt.jpg" alt="Buyer img" />
//                                         Tzvia I 
//                                     </div>
//                                 </td>
//                                 <td className="order-title">
//                                     <div className="gig-img flex">
//                                         <div className="long-text">
//                                             <p className="book-desc">I will create pixel art anima...  </p>
//                                         </div>
//                                     </div>
//                                 </td>
//                                 <td>Jan 19, 2025</td>
//                                 <td>$104</td>
//                                 <td className="status ">
//                                     <span className="rejected-label label "> Rejected </span>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     <div className="user-with-img">
//                                         <img src="https://res.cloudinary.com/dgsfbxsed/image/upload/v1699297760/p3gum8eu8nfdxwptc9bt.jpg" alt="Buyer img" />
//                                         Tzvia I 
//                                     </div>
//                                 </td>
//                                 <td className="order-title">
//                                     <div className="gig-img flex">
//                                         <div className="long-text">
//                                             <p className="book-desc">I will design a responsive we...  </p>
//                                         </div>
//                                     </div>
//                                 </td>
//                                 <td>Feb 3, 2025</td>
//                                 <td>$75</td>
//                                 <td className="status ">
//                                     <span className="rejected-label label "> Rejected </span>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     <div className="user-with-img">
//                                         <img src="https://res.cloudinary.com/dgsfbxsed/image/upload/v1699297760/p3gum8eu8nfdxwptc9bt.jpg" alt="Buyer img" />
//                                         Tzvia I 
//                                     </div>
//                                 </td>
//                                 <td className="order-title">
//                                     <div className="gig-img flex">
//                                         <div className="long-text">
//                                             <p className="book-desc">I will design a responsive we...  </p>
//                                         </div>
//                                     </div>
//                                 </td>
//                                 <td>Feb 3, 2025</td>
//                                 <td>$75</td>
//                                 <td className="status ">
//                                     <span className="fulfilled-label label "> Fulfilled </span>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     <div className="user-with-img">
//                                         <img src="https://res.cloudinary.com/dgsfbxsed/image/upload/v1699297760/p3gum8eu8nfdxwptc9bt.jpg" alt="Buyer img" />
//                                         Tzvia I 
//                                     </div>
//                                 </td>
//                                 <td className="order-title">
//                                     <div className="gig-img flex">
//                                         <div className="long-text">
//                                             <p className="book-desc">I will design a responsive we...  </p>
//                                         </div>
//                                     </div>
//                                 </td>
//                                 <td>Feb 8, 2025</td>
//                                 <td>$75</td>
//                                 <td className="status ">
//                                     <span className="fulfilled-label label "> Fulfilled </span>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     <div className="user-with-img">
//                                         <img src="https://res.cloudinary.com/dgsfbxsed/image/upload/v1699297760/p3gum8eu8nfdxwptc9bt.jpg" alt="Buyer img" />
//                                         Tzvia I 
//                                     </div>
//                                 </td>
//                                 <td className="order-title">
//                                     <div className="gig-img flex">
//                                         <div className="long-text">
//                                             <p className="book-desc">I will create a 2D frame by f...  </p>
//                                         </div>
//                                     </div>
//                                 </td>
//                                 <td>Feb 3, 2025</td>
//                                 <td>$34</td>
//                                 <td className="status ">
//                                     <span className="fulfilled-label label "> Fulfilled </span>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     <div className="user-with-img">
//                                         <img src="https://res.cloudinary.com/dgsfbxsed/image/upload/v1699297760/p3gum8eu8nfdxwptc9bt.jpg" alt="Buyer img" />
//                                         Tzvia I 
//                                     </div>
//                                 </td>
//                                 <td className="order-title">
//                                     <div className="gig-img flex">
//                                         <div className="long-text">
//                                             <p className="book-desc">I will design a responsive we...  </p>
//                                         </div>
//                                     </div>
//                                 </td>
//                                 <td>Mar 29, 2025</td>
//                                 <td>$75</td>
//                                 <td className="status ">
//                                     <span className="fulfilled-label label "> Fulfilled </span>
//                                 </td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </section>
//             </section>
//         </section>
//     )
// }