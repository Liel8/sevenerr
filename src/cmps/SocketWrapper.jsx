
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { socketService } from '../services/socket.service.js'
import { showSuccessMsg } from '../services/event-bus.service.js'
import { ADD_ORDER, UPDATE_ORDER } from '../store/reducers/orders.reducer.js'


export function SocketWrapper({ children }) {
  const dispatch = useDispatch()
  const user = useSelector(state => state.userModule.user)

  useEffect(() => {
    socketService.setup()
  }, [])


  useEffect(() => {
    if (user && user._id) {
      socketService.setUser(user._id)


      socketService.onNewOrder(order => {
        showSuccessMsg('New order received!')
        dispatch({ type: ADD_ORDER, order })
      })

      socketService.onOrderStatusUpdated(order => {
        showSuccessMsg('Order status updated!')
        dispatch({ type: UPDATE_ORDER, order })
      })
    } else {

      socketService.unsetUser()
    }
  }, [user, dispatch])


  return <div className="socket-wrapper">{children}</div>
}
