
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { socketService } from '../services/socket.service.js'
import { showSuccessMsg } from '../services/event-bus.service.js'
import { ADD_ORDER, UPDATE_ORDER } from '../store/reducers/orders.reducer.js'


export function SocketWrapper({ children }) {
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
        showSuccessMsg('New order received!')
        dispatch({ type: ADD_ORDER, order })
      })

      // ג. הטיפול באירוע "order-status-updated"
      socketService.onOrderStatusUpdated(order => {
        showSuccessMsg('Order status updated!')
        dispatch({ type: UPDATE_ORDER, order })
      })
    } else {
      // אם אין user, מנתקים ומנקים listeners
      socketService.unsetUser()
    }
  }, [user, dispatch])

  // עטיפת children בקלאס ייעודי
  return <div className="socket-wrapper">{children}</div>
}
