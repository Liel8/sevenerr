import { ordersService } from '../../services/order/orders.service'
import { store } from '../store'
import { SET_ORDERS, ADD_ORDER, UPDATE_ORDER } from '../reducers/orders.reducer'

// טעינת ההזמנות של משתמש לפי userId
export async function loadOrders(userId) {
  try {
    const orders = await ordersService.queryByRole(userId, 'buyer')
    store.dispatch(_setOrders(orders))
  } catch (err) {
    console.error('Cannot load orders', err)
    throw err
  }
}

export async function loadSellerOrders(userId) {
  try {
    const orders = await ordersService.queryByRole(userId, 'seller')
    store.dispatch(_setOrders(orders))
  } catch (err) {
    console.error('Cannot load seller orders', err)
    throw err
  }
}

// הוספת הזמנה חדשה
export async function addOrder(order) {
  try {
    const saved = await ordersService.addOrder(order)
    store.dispatch(_addOrder(saved))
    return saved
  } catch (err) {
    console.error('Cannot add order', err)
    throw err
  }
}

// עדכון הזמנה קיימת (סטטוס וכו')
export async function updateOrder(order) {
  try {
    const saved = await ordersService.updateOrder(order)
    store.dispatch(_updateOrder(saved))
    return saved
  } catch (err) {
    console.error('Cannot update order', err)
    throw err
  }
}

// יצירת פעולות פנימיות
function _setOrders(orders) {
  return {
    type: SET_ORDERS,
    orders
  }
}

function _addOrder(order) {
  return {
    type: ADD_ORDER,
    order
  }
}

function _updateOrder(order) {
  return {
    type: UPDATE_ORDER,
    order
  }
}



// import { ordersService } from '../../services/order/orders.service'
// import { store } from '../store'
// import { SET_ORDERS, ADD_ORDER } from '../reducers/orders.reducer'

// // טעינת ההזמנות של משתמש לפי userId
// export async function loadOrders(userId) {
//   try {
//     const orders = await ordersService.query(userId)
//     store.dispatch(_setOrders(orders))
//   } catch (err) {
//     console.error('Cannot load orders', err)
//     throw err
//   }
// }

// // הוספת הזמנה חדשה
// export async function addOrder(order) {
//   try {
//     const saved = await ordersService.addOrder(order)
//     store.dispatch(_addOrder(saved))
//     return saved
//   } catch (err) {
//     console.error('Cannot add order', err)
//     throw err
//   }
// }

// // יצירת פעולות פנימיות
// function _setOrders(orders) {
//   return {
//     type: SET_ORDERS,
//     orders
//   }
// }
// function _addOrder(order) {
//   return {
//     type: ADD_ORDER,
//     order
//   }
// }
