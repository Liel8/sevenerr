import { io } from 'socket.io-client'

// כתובת ה-backend שבו רץ ה-Socket.IO
const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || 'http://localhost:3030'


const socket = io(SOCKET_URL, {
  withCredentials: true // כדי ש-loginToken (Cookie) יישלח אוטומטית
})

export const socketService = {
  // קריאה חד־פעמית בפתח ה-App
  setup() {
    socket.on('connect', () => {
      console.log('🔌 Socket connected:', socket.id)
    })
    socket.on('disconnect', () => {
      console.log('⚠️ Socket disconnected')
    })
  },

  // שולח לשרת את ה-userId כדי להיכנס ל־room “user:<userId>”
  setUser(userId) {
    if (!userId) return
    socket.emit('set-user-socket', userId)
  },

  // מנתק את הלקוח מה־room ומנקה את כל ה-listeners
  unsetUser() {
    socket.emit('unset-user-socket')
    socket.off()
  },

  // הירשם לאירוע ‘order-added’ (כששרת משגר הזמנה חדשה ל-seller)
  onNewOrder(callback) {
    socket.on('order-added', order => {
      callback(order)
    })
  },

  // הירשם לאירוע ‘order-status-updated’ (כששרת משגר עדכון סטטוס ל-buyer)
  onOrderStatusUpdated(callback) {
    socket.on('order-status-updated', order => {
      callback(order)
    })
  }
}
