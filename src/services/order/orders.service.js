import { orders as defaultOrders } from '../../assets/data/orderData'

const STORAGE_KEY = 'orderDB'

// סידור סינכרוני של ה-seed לפני כל קריאה
;(function _createOrders() {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY))
  if (!data || !data.length) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultOrders))
  }
})()

export const ordersService = {
  query,
  addOrder
}

// מחזיר את כל ההזמנות של המשתמש
function query(userId) {
  const all = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
  const userOrders = all.filter(order => order.userId === userId)
  return Promise.resolve(userOrders)
}

// מוסיף הזמנה חדשה לשמירה ב-localStorage
function addOrder(order) {
  const all = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
  all.push(order)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all))
  return Promise.resolve(order)
}




// import { storageService } from '../async-storage.service.js'
// import { orders }         from '../../assets/data/orderData.js'

// const STORAGE_KEY = 'orderDB'

// // Initialize localStorage with sample orders if empty
// initOrders()

// /**
//  * ordersService handles querying and adding orders
//  */
// export const ordersService = {
//   query,    // load for user
//   addOrder, // save new order
// }

// /** מאתחל את localStorage בפעם הראשונה */
// function initOrders() {
//   storageService.query(STORAGE_KEY)
//     .then(data => {
//       if (!data || !data.length) {
//         orders.forEach(order =>
//           storageService.post(STORAGE_KEY, order)
//         )
//       }
//     })
// }

// /** מחזיר את כל ההזמנות של userId */
// async function query(userId) {
//   const allOrders = await storageService.query(STORAGE_KEY)
//   return allOrders.filter(order => order.userId === userId)
// }

// /** מוסיף הזמנה חדשה */
// async function addOrder(order) {
//   return storageService.post(STORAGE_KEY, order)
// }