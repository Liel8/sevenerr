// import { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router'

// import { userService } from '../services/user'
// import { login } from '../store/actions/user.actions'

// export function Login() {
//     const [users, setUsers] = useState([])
//     const [credentials, setCredentials] = useState({ username: '', password: '', fullname: '' })

//     const navigate = useNavigate()

//     useEffect(() => {
//         loadUsers()
//     }, [])

//     async function loadUsers() {
//         const users = await userService.getUsers()
//         setUsers(users)
//     }

//     async function onLogin(ev = null) {
//         if (ev) ev.preventDefault()

//         if (!credentials.username) return
//         await login(credentials)
//         navigate('/')
//     }

//     function handleChange(ev) {
//         const field = ev.target.name
//         const value = ev.target.value
//         setCredentials({ ...credentials, [field]: value })
//     }
    
//     return (
//         <form className="login-form" onSubmit={onLogin}>
//             <select
//                 name="username"
//                 value={credentials.username}
//                 onChange={handleChange}>
//                     <option value="">Select User</option>
//                     {users.map(user => <option key={user._id} value={user.username}>{user.fullname}</option>)}
//             </select>
//             <button>Login</button>
//         </form>
//     )
// }

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userService } from '../services/user'
import { login } from '../store/actions/user.actions'

export function Login() {
  const [users, setUsers] = useState([])
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    userService.getUsers().then(setUsers)
  }, [])

  function handleChange({ target }) {
    const { name, value } = target
    setCredentials(prev => ({ ...prev, [name]: value }))
  }

  async function onLogin(ev) {
    ev.preventDefault()
    await login(credentials)
    navigate('/')
  }
    function handleSubmit(ev) {
    ev.preventDefault()
    // כאן לקרוא לפעולת login
  }

    return (
    <div className="login-wrapper">
        <div className="auth-header">
        <h1 className="main-heading">
            <div className="sub-heading">Sign in to your account</div>
        </h1>
        <p className="auth-switch-msg">
            Don’t have an account? <span className="link" onClick={() => navigate('/login/signup')}>Join here</span>
        </p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-field">
            <label htmlFor="usernameOrEmail">Email or username</label>
            <input
            id="usernameOrEmail"
            name="usernameOrEmail"
            type="text"
            autoComplete="email"
            value={credentials.usernameOrEmail}
            onChange={handleChange}
            required
            />
        </div>

        <div className="form-field">
            <label htmlFor="password">Password</label>
            <div className="password-input-wrapper">
            <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                value={credentials.password}
                onChange={handleChange}
                required
            />
                <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(prev => !prev)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                {showPassword ? (
                    // עין פתוחה – מצב "הצג סיסמה"
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#404145" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15.064.936a.75.75 0 0 1 0 1.061l-2.196 2.196c.27.239.52.483.75.723a14.8 14.8 0 0 1 2 2.654l.028.05.008.014.003.004v.002s.001.001-.657.36l.658.36-.001.002-.003.004-.008.015a7 7 0 0 1-.133.227 14.815 14.815 0 0 1-1.896 2.476c-1.274 1.335-3.209 2.8-5.617 2.8-1.392 0-2.625-.49-3.664-1.16l-2.34 2.34a.75.75 0 1 1-1.06-1.06l2.196-2.197q-.405-.36-.75-.722a14.8 14.8 0 0 1-2-2.654l-.029-.05-.008-.015-.002-.004-.001-.002L1 8C.34 7.641.342 7.64.342 7.64v-.002l.003-.004.008-.014a6 6 0 0 1 .133-.228 14.802 14.802 0 0 1 1.896-2.476c1.275-1.335 3.21-2.8 5.618-2.8 1.391 0 2.625.49 3.664 1.16l2.339-2.34a.75.75 0 0 1 1.06 0m-4.49 3.43C9.79 3.91 8.926 3.616 8 3.616c-1.792 0-3.357 1.103-4.533 2.335a13.3 13.3 0 0 0-1.593 2.05q.1.162.249.379a13.3 13.3 0 0 0 1.344 1.669q.343.36.728.696zm-5.148 7.268c.783.455 1.648.75 2.574.75 1.791 0 3.357-1.103 4.532-2.335A13.3 13.3 0 0 0 14.126 8a13.31 13.31 0 0 0-1.594-2.049q-.342-.36-.727-.695zM1 8l-.658-.36a.75.75 0 0 0 0 .72zm14 0 .658.36a.75.75 0 0 0 0-.719zM8 5.95A2.05 2.05 0 0 0 5.95 8a.75.75 0 1 1-1.5 0A3.55 3.55 0 0 1 8 4.45a.75.75 0 1 1 0 1.5m2.8 1.3a.75.75 0 0 1 .75.75A3.55 3.55 0 0 1 8 11.55a.75.75 0 0 1 0-1.5A2.05 2.05 0 0 0 10.05 8a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></path>
                </svg>
                ) : (
                    // עין עם קו – מצב "הסתר סיסמה"
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#404145" viewBox="0 0 16 12">
                    <path fill-rule="evenodd" d="M1.874 6q.101.163.249.38c.312.457.767 1.064 1.345 1.669C4.643 9.28 6.208 10.383 8 10.383s3.357-1.102 4.533-2.334A13.3 13.3 0 0 0 14.126 6a13.312 13.312 0 0 0-1.594-2.049C11.358 2.72 9.793 1.617 8 1.617S4.643 2.719 3.468 3.95A13.3 13.3 0 0 0 1.874 6M15 6l.658-.36-.001-.002-.002-.004-.008-.014-.029-.05-.104-.178a14.79 14.79 0 0 0-1.896-2.476C12.343 1.58 10.407.116 8 .116s-4.343 1.465-5.618 2.8a14.8 14.8 0 0 0-2 2.654l-.029.05-.008.014-.002.004v.002L1 6l-.658-.36a.75.75 0 0 0 0 .72L1 6c-.658.36-.659.359-.658.36l.001.002.002.004.008.015a5 5 0 0 0 .134.227 14.804 14.804 0 0 0 1.896 2.476c1.274 1.335 3.209 2.8 5.617 2.8s4.343-1.465 5.618-2.8a14.8 14.8 0 0 0 2-2.654l.029-.05.008-.014.002-.004V6.36zm0 0 .658.36a.75.75 0 0 0 0-.72zM8 4.417a1.583 1.583 0 1 0 0 3.166 1.583 1.583 0 0 0 0-3.166M4.917 6a3.083 3.083 0 1 1 6.166 0 3.083 3.083 0 0 1-6.166 0" clip-rule="evenodd"></path>
                    </svg>
                )}
                </button>

            </div>
        </div>

        <div className="forgot-password">
            <span onClick={() => navigate('/forgot')}>Forgot password?</span>
        </div>

        <button type="submit" className="btn-login">Sign In</button>
        </form>
    </div>
  )

//   return (
//     <form onSubmit={onLogin} className="login-form">
//       <h1>Sign in to your account</h1>
//       <h2>Already have an account? Sign in</h2>
//       <select name="username" onChange={handleChange} required>
//         <option value="">Select user</option>
//         {users.map(user => (
//           <option key={user._id} value={user.username}>{user.fullname}</option>
//         ))}
//       </select>
//       <input
//         type="password"
//         name="password"
//         placeholder="Enter password"
//         onChange={handleChange}
//         required
//       />
//       <button className="btn-login">Login</button>
//     </form>
//   )
}
