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

  const handleLogout = () => {
    closeDropdown()
    onLogout()
  }

  return (
    <div className={`dropdown-btn${isOpen ? ' open' : ''}`} ref={dropdownRef}>
      <div className="dropdown-icon" onClick={toggleDropdown}>
        {icon}
      </div>

      {isOpen && (
        <div className="dropdown-menu">
          <NavLink
            className="link highlight"
            to="/user/profile"
            onClick={closeDropdown}
          >
            Profile
          </NavLink>
          <span className="link logout" onClick={handleLogout}>
            Logout
          </span>
        </div>
      )}
    </div>
  )
}
