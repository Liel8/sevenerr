import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { loadGigs } from '../store/actions/gig.actions'
import { logout } from '../store/actions/user.actions'
import { SubHeader } from './SubHeader'
import { HeroSection } from './HeroSection'
import { DropdownBtn } from './DropDownBtn'
import { PaymentHeader } from './PaymentHeader'
import { gigService } from '../services/gig/gig.service.local'
import { OrdersDropdown } from './OrdersDropdown'



export function AppHeader() {
  const [selectedDropDownBtn, setSelectedDropDownBtn] = useState(null)
  const user = useSelector(storeState => storeState.userModule.user)
  const [showHeaderSearch, setShowHeaderSearch] = useState(true)
  const orders = useSelector(state => state.orderModule.orders) || []

  const navigate = useNavigate()
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const isPaymentPage = location.pathname.includes('/payment')

  useEffect(() => {
    if (!isHomePage) {
      setShowHeaderSearch(true)
      return
    }
  
    const threshold = 400
  
    const checkScrollPosition = () => {
      const scrollY = window.scrollY
      setShowHeaderSearch(scrollY > threshold)
    }
  
    // בדיקה ראשונית מיידית
    checkScrollPosition()
  
    // האזנה לאירועי גלילה
    window.addEventListener('scroll', checkScrollPosition)
    return () => window.removeEventListener('scroll', checkScrollPosition)
  }, [isHomePage])
  
  
  function useDebouncedValue(value, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(timeout)
  }, [value, delay])

  return debouncedValue
}

  const [localGigs, setLocalGigs] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const debouncedSearchTerm = useDebouncedValue(searchTerm, 300)  

  useEffect(() => {
    gigService.query().then(setLocalGigs)
  }, [])

  useEffect(() => {
    const txt = debouncedSearchTerm.trim().toLowerCase()
    if (!txt) return setSuggestions([])

    const filtered = localGigs.filter(gig => {
      const words = gig.title.toLowerCase().split(' ')
      return words.some(word => word.includes(txt))
    }).slice(0, 5)

    setSuggestions(filtered)
  }, [debouncedSearchTerm, localGigs])
  

  function onSearch(ev) {
    ev.preventDefault()
    const qs = searchTerm.trim() ? { txt: searchTerm.trim() } : {}
    navigate({ pathname: '/gigs', search: new URLSearchParams(qs).toString() })
    setSearchTerm('')
    setSuggestions([])
  }

  async function onLogout() {
    try {
      await logout()
      navigate('/', { replace: true })
    } catch (err) {
      console.error('Logout failed:', err) // אפשר למחוק אם לא צריך
    }
  }


  if (isPaymentPage) return <PaymentHeader />
  
  return (
    <>
      <section className={`main-layout full header-container${isHomePage ? ' sticky' : ''}`}>
        <header className="app-header">
          <div className="logo-container">
            <Link className="logo" to="/">
              sevenerr<span className="dot" />
            </Link>
          </div>

          {showHeaderSearch && (
            <div className="searchbar-container" style={{ position: 'relative' }}>
              <form className="search-bar-filter-form" onSubmit={onSearch}>
                <input
                  name="txt"
                  type="text"
                  className="search-bar"
                  placeholder="What service are you looking for today?"
                  value={searchTerm}
                  onChange={ev => setSearchTerm(ev.target.value)}
                />
                <button
                  type="submit"
                  className="btn fa-solid search-icon size=lg"
                  aria-label="Search"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="m15.89 14.653-3.793-3.794a.37.37 0 0 0-.266-.109h-.412A6.499 6.499 0 0 0 6.5 0C2.91 0 0 2.91 0 6.5a6.499 6.499 0 0 0 10.75 4.919v.412c0 .1.04.194.11.266l3.793 3.794a.375.375 0 0 0 .531 0l.707-.707a.375.375 0 0 0 0-.53ZM6.5 11.5c-2.763 0-5-2.238-5-5 0-2.763 2.237-5 5-5 2.762 0 5 2.237 5 5 0 2.762-2.238 5-5 5Z" />
                  </svg>
                </button>
              </form>

              {suggestions.length > 0 && (
                <ul className="search-suggestions">
                  {suggestions.map(gig => {
                    const txt = debouncedSearchTerm.toLowerCase()
                    const words = gig.title.split(' ')
                    const lowerWords = gig.title.toLowerCase().split(' ')
                    const matchIndex = lowerWords.findIndex(word => word.includes(txt))

                    let highlightedTitle = gig.title

                    if (matchIndex !== -1) {
                      const start = Math.max(0, matchIndex - 3)
                      const end = Math.min(words.length, matchIndex + 4)
                      const snippet = words.slice(start, end).map(word => {
                        if (word.toLowerCase().includes(txt)) {
                          return word.replace(
                            new RegExp(txt, 'i'),
                            `<span class="highlight">$&</span>`
                          )
                        }
                        return word
                      }).join(' ')
                      highlightedTitle = snippet
                    }

                    return (
                      <li
                        key={gig._id}
                        onClick={() => {
                          navigate(`/gig/${gig._id}`, { state: { gig } })
                          setSearchTerm('')
                          setSuggestions([])
                        }}
                        dangerouslySetInnerHTML={{ __html: highlightedTitle }}
                      />
                    )
                  })}
                </ul>
              )}
            </div>
          )}


          {/* <nav className="links-container">
            <Link className="btn" to="/gigs">Explore</Link>
            <Link className="btn login" to="/login">Login</Link>

            <span className="user-info">
              <DropdownBtn
                selectedBtn={selectedDropDownBtn}
                setSelectedBtn={setSelectedDropDownBtn}
                icon={
                  <img
                    className="profile-btn"
                    src={user.imgUrl || defaultUserImg}
                    onError={e => e.currentTarget.src = defaultUserImg}
                    alt="User avatar"
                  />
                }
              >
                <NavLink to={`user/${user._id}`}>Profile</NavLink>
                {user.isSeller ? (
                  <NavLink to="/gigs/add">Add a gig</NavLink>
                ) : (
                  <NavLink to={`user/${user._id}`}>Become a seller</NavLink>
                )}
                <span onClick={onLogout}>Logout</span>
              </DropdownBtn>
            </span>

            <Link className="btn join" to="/join">Join</Link>
          </nav> */}
          <nav className="links-container">
            <Link className="btn" to="/gigs">Explore</Link>

            {!user && (
              <>
                <Link className="btn login" to="/login">Login</Link>
                <Link className="btn join" to="/login/signup">Join</Link>
              </>
            )}

            {user && (
              <>
                <OrdersDropdown
                  selectedBtn={selectedDropDownBtn}
                  setSelectedBtn={setSelectedDropDownBtn}
                />
                <span className="user-info">
                  <DropdownBtn
                    selectedBtn={selectedDropDownBtn}
                    setSelectedBtn={setSelectedDropDownBtn}
                    onLogout={onLogout}
                    icon={
                      <img
                        className="profile-btn"
                        src={user.imgUrl || defaultUserImg}
                        onError={e => e.currentTarget.src = defaultUserImg}
                        alt="User avatar"
                      />
                    }
                  />
                </span>
              </>
            )}
          </nav>
        </header>
      </section>

      {isHomePage && <HeroSection />}
      <SubHeader />
    </>
  )
}

