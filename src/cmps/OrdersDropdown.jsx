// import { useEffect, useRef, useState } from "react"
// import { useNavigate } from "react-router-dom"
// import { useSelector } from "react-redux"

// export function OrdersDropdown({ selectedBtn, setSelectedBtn }) {
//   const orders = useSelector(state => state.orderModule.orders) || []
//   const dropdownRef = useRef(null)
//   const navigate = useNavigate()
// //   const isOpen = selectedBtn === 'orders'
//   const [isOpen, setIsOpen] = useState(false)

// const toggleDropdown = () => {
//     const newState = !isOpen
//     setIsOpen(newState)
//     setSelectedBtn(newState ? orders : null)
// }


//   const closeDropdown = () => {
//     setIsOpen(false)
//     setSelectedBtn(null)
//   }

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         closeDropdown()
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside)
//     return () => document.removeEventListener("mousedown", handleClickOutside)
//   }, [])

//   return (
//     <div className={`orders-dropdown-btn${isOpen ? ' open' : ''}`} ref={dropdownRef}>
//       <div className="orders-toggle-btn" onClick={toggleDropdown}>
//         <span>Orders</span>
//       </div>

//       {isOpen && (
//         <div className="orders-dropdown">
//           {orders.length > 0 ? (
//             <ul>
//               {orders.slice(0, 5).map(order => (
//                 <li
//                   key={order._id}
//                   className="order-preview-item"
//                   onClick={() => {
//                     navigate(`/gig/${order.gig._id}`, { state: { gig: order.gig } })
//                     closeDropdown()
//                   }}
//                 >
//                   <div className="user-with-img">
//                     <img src={order.gig.imgUrl} alt={order.gig.title} />
//                     <span className="order-title">{order.gig.title}</span>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <div className="no-orders">
//               <div className="empty-orders-state">
//                 <div className="empty-icon-circle">
//                   <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
//                     <path
//                       d="M7 11h26v18c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2V11Zm3 0 2.4 4h15.2l2.4-4"
//                       stroke="#404145"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </div>
//                 <div className="empty-title">No Orders Yet</div>
//                 <div className="empty-subtitle">
//                   Use the search box to find the digital services you need.
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   )
// }

// src/cmps/OrdersDropdown.jsx
import React, { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { ordersService } from "../services/order/orders.service"

export function OrdersDropdown({ selectedBtn, setSelectedBtn }) {
  const dropdownRef = useRef(null)
  const navigate = useNavigate()

  // המשתמש הנוכחי
  const user = useSelector(state => state.userModule.user)

  // רשימת ההזמנות בתור קונה, ממוינת מהחדש לישן
  const [buyerOrders, setBuyerOrders] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (user && user._id) {
      ordersService
        .queryByRole(user._id, "buyer")
        .then(fetched => {
          // מיון מהחדש לישן לפי createdAt
          const sorted = fetched
            .slice()
            .sort((a, b) => b.createdAt - a.createdAt)
          setBuyerOrders(sorted)
        })
        .catch(err => console.error("Cannot load buyer orders", err))
    } else {
      setBuyerOrders([])
      setIsOpen(false)
      setSelectedBtn(null)
    }
  }, [user, setSelectedBtn])

  const toggleDropdown = () => {
    const newState = !isOpen
    setIsOpen(newState)
    setSelectedBtn(newState ? buyerOrders : null)
  }

  const closeDropdown = () => {
    setIsOpen(false)
    setSelectedBtn(null)
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown()
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  if (!user) return null

  return (
    <div
      className={`orders-dropdown-btn${isOpen ? " open" : ""}`}
      ref={dropdownRef}
    >
      <div className="orders-toggle-btn" onClick={toggleDropdown}>
        <span>Orders</span>
      </div>

      {isOpen && (
        <div className="orders-dropdown">
          {buyerOrders.length > 0 ? (
            <ul>
              {buyerOrders.slice(0, 5).map(order => (
                <li
                  key={order._id}
                  className="order-preview-item"
                  onClick={() => {
                    // ניווט לדף ההזמנה (OrderPage) במקום לגיג
                    navigate(`/orders`, { state: { order } })
                    closeDropdown()
                  }}
                >
                  <div className="user-with-img">
                    <img src={order.gig.imgUrl} alt={order.gig.title} />
                    <span className="order-title">{order.gig.title}</span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="no-orders">
              <div className="empty-orders-state">
                <div className="empty-icon-circle">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path
                      d="M7 11h26v18c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2V11Zm3 0 2.4 4h15.2l2.4-4"
                      stroke="#404145"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="empty-title">No Orders Yet</div>
                <div className="empty-subtitle">
                  Use the search box to find the digital services you need.
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
