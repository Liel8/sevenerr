import React from 'react'
import { Routes, Route } from 'react-router'

import { HomePage } from './pages/HomePage'
// import { AboutUs, AboutTeam, AboutVision } from './pages/AboutUs'
import { GigIndex } from './pages/GigIndex.jsx'
import { ReviewIndex } from './pages/ReviewIndex.jsx'
import { PaymentPage } from "./pages/PaymentPage.jsx"
// import { CategoryIndex } from './pages/CategoryIndex.jsx'
import { ChatApp } from './pages/Chat.jsx'
import { AdminIndex } from './pages/AdminIndex.jsx'

import { GigDetails } from './pages/GigDetails'
import { UserDetails } from './pages/UserDetails'
import { UserProfile } from './pages/UserProfile.jsx'

import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'
import { UserMsg } from './cmps/UserMsg.jsx'
import { LoginSignup } from './pages/LoginSignup.jsx'
import { Login } from './pages/Login.jsx'
import { Signup } from './pages/Signup.jsx'



export function RootCmp() {
    return (
        <div className='app-container'>
            {/* <section className='main-backdrop'></section> */}
            <AppHeader />
            <UserMsg />
            <main class="main-layout full">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    {/* <Route path="/about" element={<AboutUs />}>
                        <Route path="/team" element={<AboutTeam />} />
                        <Route path="/vision" element={<AboutVision />} />
                    </Route> */}
                    <Route path="/gig/:category" element={<GigIndex />} />
                    <Route path="/gig" element={<GigIndex />} />
                    <Route path="/gig/details/:gigId" element={<GigDetails />} />
                    <Route path="/gig/details/:gigId/payment" element={<PaymentPage />} />
                    <Route path="/user/:id" element={<UserDetails />} />
                    <Route path="/user/profile" element={<UserProfile />} />
                    {/* <Route path="/category" element={<CategoryIndex />} /> */}
                    <Route path="/review" element={<ReviewIndex />} />
                    <Route path="/chat" element={<ChatApp />} />
                    <Route path="/admin" element={<AdminIndex />} />
                    <Route path="login" element={<LoginSignup />}>
                        <Route index element={<Login />} />
                        <Route path="signup" element={<Signup />} />
                    </Route>
                </Routes>
            </main>
            <AppFooter />  
        </div>
    )
}


