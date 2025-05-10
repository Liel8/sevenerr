import { Link, NavLink, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { logout } from '../store/actions/user.actions'
import { SubHeader } from './SubHeader'
import { HeroSection } from './HeroSection'


export function AppHeader() {
	const user = useSelector(storeState => storeState.userModule.user)
	const navigate = useNavigate()
	const location = useLocation()
    const isHomePage = location.pathname === '/'

	async function onLogout() {
		try {
			await logout()
			navigate('/')
			showSuccessMsg(`Bye now`)
		} catch (err) {
			showErrorMsg('Cannot logout')
		}
	}

	return (
	<>
		<section className="main-layout full header-container">
		  <header className="app-header">
			<div className="logo-container">
			  <i className="hamburger-icon btn fa-solid fa-bars" aria-hidden="true"></i>
			  <Link className="logo" to="/">
				sevenerr<span className="dot"></span>
			  </Link>
			</div>
			<div className="searchbar-container">
			  <form className="search-bar-filter-form">
				<input
				  name="txt"
				  type="text"
				  className="search-bar"
				  placeholder="What service are you looking for today?"
				  value=""
				  onChange={() => {}}
				/>
				<button className="btn fa-solid search-icon size=lg" aria-hidden="true">
			    	<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="white">
						<path d="m15.89 14.653-3.793-3.794a.37.37 0 0 0-.266-.109h-.412A6.499 6.499 0 0 0 6.5 0C2.91 0 0 2.91 0 6.5a6.499 6.499 0 0 0 10.75 4.919v.412c0 .1.04.194.11.266l3.793 3.794a.375.375 0 0 0 .531 0l.707-.707a.375.375 0 0 0 0-.53ZM6.5 11.5c-2.763 0-5-2.238-5-5 0-2.763 2.237-5 5-5 2.762 0 5 2.237 5 5 0 2.762-2.238 5-5 5Z">
						</path>
					</svg>
				</button>
			  </form>
			</div>
			<nav className="links-container">
			  <Link className="btn" to="/gig">Explore</Link>
			  <Link className="btn login" to="/login">Login</Link>
			  <Link className="btn join" to="/signup">Join</Link>
			</nav>
		  </header>
		</section>
		{isHomePage && <HeroSection />}
		{isHomePage && <SubHeader />}
	</>	
	)
}
	// return (
	// 	<div>
	// 		<section className='visible main-layout full header-container'>	
	// 			<header className='app-header'>
	// 				<div className='logo-container'>
	// 				<i className="hamburger-icon btn fa-solid fa-bars" aria-hidden="true"></i>
	// 				<Link to={'/'} className='logo'>
	// 				severr
	// 				<span className='dot'></span>
	// 				</Link>
	// 				</div>
	// 				<div className="searchbar-container">
	// 					<form className="search-bar-filter-form">
	// 						<input name="txt" type="text" className="search-bar" placeholder="What service are you looking for today?" value={""}/>
	// 						<button className="btn fa-solid search-icon size=lg" aria-hidden="true">	
	// 						</button>
	// 					</form>
	// 				</div>
	// 				<nav className='links-container'>
	// 					<Link to={'/gig'} className='btn'>Explore</Link>
	// 					<Link to={'/gig'} className='btn'>Sign in</Link>
	// 					<Link to={'/gig'} className='btn'>Join</Link>
	// 				</nav>
	// 			</header>
	// 		</section>
	// 	</div>

	// )

