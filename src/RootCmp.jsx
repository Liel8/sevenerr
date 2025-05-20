import React from 'react'
import { Routes, Route } from 'react-router'

import { HomePage } from './pages/HomePage'
import { PaymentPage } from "./pages/PaymentPage.jsx"
import { OrdersPage } from './pages/OrdersPage.jsx'   
import { GigIndex } from './pages/GigIndex.jsx'
import { GigDetails } from './pages/GigDetails'
import { UserDetails } from './pages/UserDetails'
import { UserProfile } from './pages/UserProfile.jsx'
import { ReviewIndex } from './pages/ReviewIndex.jsx'
import { ChatApp } from './pages/Chat.jsx'
import { AdminIndex } from './pages/AdminIndex.jsx'
import { LoginSignup } from './pages/LoginSignup.jsx'
import { Login } from './pages/Login.jsx'
import { Signup } from './pages/Signup.jsx'
import { AddGig } from './pages/AddGig.jsx'

import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'
import { UserMsg }   from './cmps/UserMsg.jsx'
import { ScrollToTop } from './cmps/ScrollToTop.JSX'

export function RootCmp() {
    return (
        <div className='app-container'>
            <ScrollToTop />
            <AppHeader />
            <UserMsg />
            <main className="main-layout full">
                <Routes>
                    <Route path="/" element={<HomePage />} />

                    <Route path="/gig/:category" element={<GigIndex />} />
                    <Route path="/gig"             element={<GigIndex />} />
                    <Route path="/gig/details/:gigId" element={<GigDetails />} />
                    <Route path="/gig/details/:gigId/payment" element={<PaymentPage />} />

                    <Route path="/gig/add" element={<AddGig />} />

                    <Route path="/orders" element={<OrdersPage />} />  

                    <Route path="/user/:id"    element={<UserDetails />} />
                    <Route path="/user/profile" element={<UserProfile />} />

                    <Route path="/review" element={<ReviewIndex />} />
                    <Route path="/chat"   element={<ChatApp />} />
                    <Route path="/admin"  element={<AdminIndex />} />

                    <Route path="login" element={<LoginSignup />}>
                        <Route index        element={<Login />} />
                        <Route path="signup" element={<Signup />} />
                    </Route>
                </Routes>
            </main>
            <AppFooter />
        </div>
    )
}


