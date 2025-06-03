// import React from 'react'
// import { Routes, Route } from 'react-router'

// import { HomePage } from './pages/HomePage'
// import { PaymentPage } from "./pages/PaymentPage.jsx"
// import { OrdersPage } from './pages/OrdersPage.jsx'   
// import { GigIndex } from './pages/GigIndex.jsx'
// import { GigDetails } from './pages/GigDetails'
// import { UserDetails } from './pages/UserDetails'
// import { UserProfile } from './pages/UserProfile.jsx'
// import { ReviewIndex } from './pages/ReviewIndex.jsx'
// import { ChatApp } from './pages/Chat.jsx'
// import { AdminIndex } from './pages/AdminIndex.jsx'
// import { LoginSignup } from './pages/LoginSignup.jsx'
// import { Login } from './pages/Login.jsx'
// import { Signup } from './pages/Signup.jsx'
// import { AddGig } from './pages/AddGig.jsx'

// import { AppHeader } from './cmps/AppHeader'
// import { AppFooter } from './cmps/AppFooter'
// import { UserMsg }   from './cmps/UserMsg.jsx'
// import { ScrollToTop } from './cmps/ScrollToTop.JSX'

// export function RootCmp() {
//     return (
//         <div className='app-container'>
//             <ScrollToTop />
//             <AppHeader />
//             <UserMsg />
//             <main className="main-layout full">
//                 <Routes>
//                     <Route path="/" element={<HomePage />} />

//                     <Route path="/gig/:gigId/payment" element={<PaymentPage />} />
//                     <Route path="/gig/:gigId" element={<GigDetails />} />

//                     <Route path="/gigs/add" element={<AddGig />} />
//                     <Route path="/gigs/:category" element={<GigIndex />} />
//                     <Route path="/gigs" element={<GigIndex />} />

//                     <Route path="/orders" element={<OrdersPage />} />  

//                     <Route path="/user/:id"    element={<UserDetails />} />
//                     <Route path="/user/profile" element={<UserProfile />} />

//                     <Route path="/review" element={<ReviewIndex />} />
//                     <Route path="/chat"   element={<ChatApp />} />
//                     <Route path="/admin"  element={<AdminIndex />} />
                    
//                     <Route path="login" element={<LoginSignup />}>
//                         <Route index element={<Login />} />
//                         <Route path="signup" element={<Signup />} />
//                     </Route>
//                 </Routes>
//             </main>
//             <AppFooter />
//         </div>
//     )
// }


// src/RootCmp.jsx
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import { socketService } from './services/socket.service.js'
import { showSuccessMsg } from './services/event-bus.service.js'
import { ADD_ORDER, UPDATE_ORDER } from './store/reducers/orders.reducer'  // ← לתקן את הייבוא לכאן

import { HomePage } from './pages/HomePage'
import { PaymentPage } from './pages/PaymentPage.jsx'
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
import { UserMsg } from './cmps/UserMsg.jsx'
import { ScrollToTop } from './cmps/ScrollToTop.JSX'

export function RootCmp() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.userModule.user)

  // 1. אתחול חיבור Socket.IO פעם אחת כשהאפליקציה עולה
  useEffect(() => {
    socketService.setup()
  }, [])

  // 2. בכל פעם שהמשתמש משתנה
  useEffect(() => {
    if (user && user._id) {
      // א. שליחת userId לשרת
      socketService.setUser(user._id)

      // ב. הטיפול באירוע "order-added"
      socketService.onNewOrder(order => {
        showSuccessMsg('🔔 הזמנה חדשה התקבלה!')
        dispatch({ type: ADD_ORDER, order })
      })

      // ג. הטיפול באירוע "order-status-updated"
      socketService.onOrderStatusUpdated(order => {
        showSuccessMsg('✅ סטטוס ההזמנה עודכן!')
        dispatch({ type: UPDATE_ORDER, order })
      })
    } else {
      // אם אין user, מנתקים ומנקים listeners
      socketService.unsetUser()
    }
  }, [user, dispatch])

  return (
    <div className='app-container'>
      <ScrollToTop />
      <AppHeader />
      <UserMsg />
      <main className="main-layout full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gig/:gigId/payment" element={<PaymentPage />} />
          <Route path="/gig/:gigId" element={<GigDetails />} />
          <Route path="/gigs/add" element={<AddGig />} />
          <Route path="/gigs/:category" element={<GigIndex />} />
          <Route path="/gigs" element={<GigIndex />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/user/:id" element={<UserDetails />} />
          <Route path="/user/profile" element={<UserProfile />} />
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

