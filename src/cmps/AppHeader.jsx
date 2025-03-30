import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { logout } from '../store/actions/user.actions'

export function AppHeader() {
	const user = useSelector(storeState => storeState.userModule.user)
	const navigate = useNavigate()

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
		<section className="visible main-layout full header-container">
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
				<button className="btn fa-solid search-icon size=lg" aria-hidden="true"></button>
			  </form>
			</div>
			<nav className="links-container">
			  <Link className="btn" to="/gig">Explore</Link>
			  <Link className="btn login" to="/login">Login</Link>
			  <Link className="btn join" to="/signup">Join</Link>
			</nav>
		  </header>
		</section>
	  );

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
}
