import React from 'react'
import { useNavigate } from 'react-router-dom'

export function FingertipsSection() {
    const navigate = useNavigate()

    return (
        <section className="fingertips-section">
        <div className="fingertips-content">
            <h2 className="fingertips-title">
            Freelance services at your <em>fingertips</em>
            </h2>
            <button className="fingertips-button" onClick={() => navigate('/login/signup')}>
            Join Sevenerr
            </button>
        </div>
        </section>
    )
}