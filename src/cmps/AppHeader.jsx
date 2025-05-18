import { Link, NavLink, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { useState } from "react";
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { logout } from '../store/actions/user.actions'
import { SubHeader } from './SubHeader'
import { HeroSection } from './HeroSection'
import { DropdownBtn } from "./DropDownBtn";


export function AppHeader() {
	const [selectedDropDownBtn, setSelectedDropDownBtn] = useState(null);
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
		<section className={`main-layout full header-container${isHomePage ? ' sticky' : ''}`}>
		  <header className="app-header">
			<div className="logo-container">
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

			<span className="user-info">
				<DropdownBtn
				selectedBtn={selectedDropDownBtn}
				setSelectedBtn={setSelectedDropDownBtn}
				icon={
					<img
					className="profile-btn"
					src={user.imgUrl || 'https://www.looper.com/img/gallery/phoebe-buffays-friends-timeline-explained/l-intro-1621661137.jpg'}
					onError={e => e.currentTarget.src = defaultUserImg}
					/>
				}
				>
				<NavLink to={`user/${user._id}`}>
					Profile
				</NavLink>

				{user.isSeller ? (
					<NavLink to="/gig/add">Add a gig</NavLink>
				) : (
					<NavLink to={`user/${user._id}`}>Become a seller</NavLink>
				)}

				<span onClick={onLogout}>Logout</span>
				</DropdownBtn>
			</span>

			<Link className="btn join" to="/signup">Join</Link>
			</nav>
		  </header>
		</section>
		{isHomePage && <HeroSection />}
		<SubHeader /> 
	</>	
	)
}

