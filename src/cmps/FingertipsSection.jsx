import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export function FingertipsSection() {
    const user = useSelector(state => state.userModule.user) 
    const navigate = useNavigate()

    return (
        <section className="fingertips-section">
        <div className="fingertips-content">
            <h2 className="fingertips-title">
            Freelance services at your <em>fingertips</em>
            </h2>
            {!user && (
            <button className="fingertips-button" onClick={() => navigate('/login/signup')}>
            Join Sevenerr
            </button>
            )}
        </div>
        </section>
    )
}