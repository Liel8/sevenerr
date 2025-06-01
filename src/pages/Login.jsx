import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../store/actions/user.actions'
// מייבאים את שירות המשתמש
import { userService } from '../services/user/user.service.remote'

// מייבאים את העזרים של EVENT BUS להצגת הודעות
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'

export function Login() {
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  function handleChange({ target }) {
    const { name, value } = target
    setCredentials(prev => ({ ...prev, [name]: value }))
  }

  async function onLogin(ev) {
    ev.preventDefault()
    setError(null)
    setLoading(true)
    try {
      // מנסה להתחבר
      // await userService.login(credentials)
      // שולח הודעת הצלחה לפני הניווט
      await login(credentials)
      // showSuccessMsg('You have successfully signed in!')
      // סוגר את המודל על-ידי ניווט ישיר אל "/"
      navigate('/')
    } catch (err) {
      // אם יש שגיאה בהתחברות, מציגים הודעת שגיאה
      showErrorMsg(err.message || 'Invalid credentials')
      setError(err.message || 'Invalid credentials')
      setLoading(false)
    }
  }

  return (
    <div className="login-wrapper">
      <div className="auth-header">
        <h1 className="main-heading">
          <div className="sub-heading">Sign in to your account</div>
        </h1>
        <p className="auth-switch-msg">
          Don’t have an account?{' '}
          <span className="link" onClick={() => navigate('/login/signup')}>
            Join here
          </span>
        </p>
      </div>

      <form className="login-form" onSubmit={onLogin}>
        <div className="form-field">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            value={credentials.username}
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
              {showPassword ? '👁' : '👁‍🗨'}
            </button>
          </div>
        </div>

        <div className="forgot-password">
          <span onClick={() => navigate('/forgot')}>Forgot password?</span>
        </div>

        <button type="submit" className="btn-login" disabled={loading}>
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
    </div>
  )
}
