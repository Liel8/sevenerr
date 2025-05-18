// import React, { useState, useEffect, useRef } from "react";
// import { DropdownMenu } from "./DropdownMenu";


// export function DropdownBtn({ icon = '', children = '', selectedBtn, setSelectedBtn }) {
//     const buttonRef = useRef('')

//     function closeDropdown(event) {
//         if (buttonRef.current && !buttonRef.current.contains(event.target)) {
//             setSelectedBtn(null)
//         }
//     }

//     function toggleSelectBtn() {
//         if (selectedBtn === buttonRef.current) setSelectedBtn(null)
//         else setSelectedBtn(buttonRef.current)
//     }

//     useEffect(() => {
//         document.addEventListener("click", closeDropdown)

//         return () => {
//             document.removeEventListener("click", closeDropdown)
//         }
//     }, [])

//     return (
//         <span className="drop-down-btn" onClick={toggleSelectBtn} ref={buttonRef}>
//             {!icon ?
//                 <i className={`${selectedBtn === buttonRef.current && 'open'} fa-solid fa-circle-chevron-down`}></i> : icon
//             }
//             {selectedBtn === buttonRef.current && <DropdownMenu items={children} isOpen={selectedBtn === buttonRef.current} />}
//         </span>
//     )
// } 

// import { useEffect, useRef, useState } from "react";

// export function DropdownBtn({ icon, children, selectedBtn, setSelectedBtn }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const toggleDropdown = () => {
//     const newState = !isOpen;
//     setIsOpen(newState);
//     setSelectedBtn(newState ? icon : null);
//   };

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//         setSelectedBtn(null);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [dropdownRef]);

//   return (
//     <div className="dropdown-btn" ref={dropdownRef}>
//       <div className="dropdown-icon" onClick={toggleDropdown}>
//         {icon}
//       </div>
//       {isOpen && (
//         <div className="dropdown-menu">
//           {children}
//         </div>
//       )}
//     </div>
//   );
// }

import { useEffect, useRef, useState } from "react"
import { NavLink } from "react-router-dom"

export function DropdownBtn({ icon, selectedBtn, setSelectedBtn, onLogout }) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const toggleDropdown = () => {
    const newState = !isOpen
    setIsOpen(newState)
    setSelectedBtn(newState ? icon : null)
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
        setSelectedBtn(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="dropdown-btn" ref={dropdownRef}>
      <div className="dropdown-icon" onClick={toggleDropdown}>
        {icon}
      </div>

      {isOpen && (
        <div className="dropdown-menu">
          <NavLink className="link highlight" to={`/user/profile`}>Profile</NavLink>
          {/* <NavLink className="link" to="#">Post a project brief</NavLink>
          <NavLink className="link" to="#">Your briefs</NavLink>
          <NavLink className="link highlight" to="#">Refer a friend</NavLink> */}

          {/* <hr />
          <NavLink className="link" to="#">Become a Seller</NavLink>
          <NavLink className="link" to="#">Settings</NavLink>
          <NavLink className="link" to="#">Billing and payments</NavLink>

          <hr />
          <div className="section-header">
            Exclusive features <span className="badge">Fiverr Pro</span>
          </div>
          <NavLink className="link" to="#">Invite your team</NavLink>
          <NavLink className="link" to="#">Let us manage your project</NavLink>
          <NavLink className="link" to="#">Money-back guarantee</NavLink> */}

          {/* <hr />
          <span className="link">English 🌐</span>
          <span className="link">₪ ILS</span>
          <span className="link">Help & support</span>

          <hr /> */}
          <span className="link logout" onClick={onLogout}>Logout</span>
        </div>
      )}
    </div>
  )
}
