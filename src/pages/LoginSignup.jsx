// src/pages/LoginSignup.jsx
import { Outlet, useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export function LoginSignup() {
  const navigate = useNavigate()

  // במקום navigate(-1), ננווט ישירות אל "/" (או כל יעד אחר שתבחרי)
  function onClose() {
    navigate('/')
  }

  // אם תגמרי להגדיר CSS שונה, כדאי לוודא שה-overlay מחזיק את כל המסך
  function handleOverlayClick(ev) {
    // אם הקליק ב־overlay עצמו (ולא בכל הילדים), נסגור
    if (ev.target.classList.contains('login-modal-overlay')) {
      onClose()
    }
  }

  // אפשר למנוע קליקים בתוך המודל מלצאת ל־section אם תרצי:
  function stopModalClick(ev) {
    ev.stopPropagation()
  }

  return (
    <section className="login-modal-overlay" onClick={handleOverlayClick}>
      <div className="login-modal" onClick={stopModalClick}>
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
          {/* <nav className="auth-nav">
            <NavLink to="." end className={({ isActive }) => isActive ? 'active' : ''}>
              Login
            </NavLink>
            <NavLink to="signup" className={({ isActive }) => isActive ? 'active' : ''}>
              Signup
            </NavLink>
          </nav> */}
          <Outlet />
        </div>
      </div>
    </section>
  )
}
