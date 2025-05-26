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

  return (
    <form onSubmit={onLogin} className="login-form">
      <h1>Create a new account</h1>
      <h2>Already have an account? Sign in</h2>
      <select name="username" onChange={handleChange} required>
        <option value="">Select user</option>
        {users.map(user => (
          <option key={user._id} value={user.username}>{user.fullname}</option>
        ))}
      </select>
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        onChange={handleChange}
        required
      />
      <button className="btn-login">Login</button>
    </form>
  )
}
