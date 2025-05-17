// // src/services/order.service.js
// import { DEV, VITE_LOCAL } from import.meta.env

// import { orderService as local }  from './order.service.local'
// import { orderService as remote } from './order.service.remote'

// // פונקציה למבנה הזמנה ריקה, אם תצטרכי ליצור הזמנה חדש
// function getEmptyOrder() {
//   return {
//     _id: '',
//     userId: '',
//     gig: { _id: '', title: '', imgUrl: '' },
//     packageName: '',
//     packagePrice: 0,
//     daysToMake: 0,
//     createdAt: Date.now(),
//     status: ''
//   }
// }

// // (אופציונלי) פילטר־ברירת מחדל לעמוד הזמנות
// function getDefaultFilter() {
//   return {
//     userId: '',
//     status: ''      // למשל, filter לפי סטטוס
//   }
// }

// const service = VITE_LOCAL === 'true' ? local : remote
// export const orderService = { getEmptyOrder, getDefaultFilter, ...service }

// if (DEV) window.orderService = orderService
