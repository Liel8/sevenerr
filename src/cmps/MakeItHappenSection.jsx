import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export function MakeItHappenSection() {
    const user = useSelector(state => state.userModule.user)
    const navigate = useNavigate()
    const items = [
        {
        icon: 'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/categories.8badf97.svg',
        text: 'Access a pool of top talent across 700 categories'
        },
        {
        icon: 'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/matching.0eef7cc.svg',
        text: 'Enjoy a simple, easy-to-use matching experience'
        },
        {
        icon: 'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/quickly.6879514.svg',
        text: 'Get quality work done quickly and within budget'
        },
        {
        icon: 'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/happy.42ed7bd.svg',
        text: 'Only pay when you’re happy'
        }
    ]

    return (
        <section className="make-it-happen">
        <h2 className="make-it-happen__title">
            Make it all happen with freelancers
        </h2>
        <ul className="make-it-happen__list">
            {items.map((item, idx) => (
            <li key={idx} className="make-it-happen__item">
                <img
                src={item.icon}
                alt={item.text}
                className="make-it-happen__icon"
                />
                <p className="make-it-happen__text">{item.text}</p>
            </li>
            ))}
        </ul>
        {!user && (
            <div className="make-it-happen__button-wrapper">
            <button
                className="make-it-happen__button"
                onClick={() => navigate('/login/signup')}
            >
                Join now
            </button>
            </div>
        )}
        </section>
    )
}