// import { Outlet } from 'react-router'
// import { NavLink } from 'react-router-dom'

// export function LoginSignup() {
//     return (
//         <div className="login-page">
//             <nav>
//                 <NavLink to=".">Login</NavLink>
//                 <NavLink to="signup">Signup</NavLink>
//             </nav>
//             <Outlet/>
//         </div>
//     )
// }

import { Outlet, useNavigate } from 'react-router-dom'

export function LoginSignup() {
  const navigate = useNavigate()

  function onClose() {
    navigate(-1) // חזרה אחורה או תוכל לעשות navigate('/') אם אתה רוצה סגירה ישירה
  }

  function handleOverlayClick(ev) {
    if (ev.target.classList.contains('login-modal-overlay')) {
      onClose()
    }
  }

  return (
    <section className="login-modal-overlay" onClick={handleOverlayClick}>
      <div className="login-modal">
        <button className="close-btn" onClick={onClose}>×</button>

        <div className="modal-left">
          <h2>Success starts here</h2>
          <ul>
            <li>
                <span className="check-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#fff" viewBox="0 0 16 16">
                        <path d="M14.53 4.53 7 12.06 2.47 7.53l1.06-1.06L7 9.94l6.47-6.47z"></path>
                    </svg>
                </span>
                Over 700 categories
            </li>
            <li>
                <span className="check-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#fff" viewBox="0 0 16 16">
                        <path d="M14.53 4.53 7 12.06 2.47 7.53l1.06-1.06L7 9.94l6.47-6.47z"></path>
                    </svg>
                </span>
                Quality work done faster
            </li>
            <li>
                <span className="check-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#fff" viewBox="0 0 16 16">
                        <path d="M14.53 4.53 7 12.06 2.47 7.53l1.06-1.06L7 9.94l6.47-6.47z"></path>
                    </svg>
                </span>
                Access to talent and businesses across the globe
            </li>
          </ul>
        </div>

        <div className="modal-right">
          <Outlet />
        </div>
      </div>
    </section>
  )
}
