import { storageService } from '../async-storage.service.js'
import { orders }         from '../../assets/data/orderData.js'

const STORAGE_KEY = 'orderDB'

// Initialize localStorage with sample orders if empty
initOrders()

/**
 * ordersService handles querying and adding orders
 */
export const ordersService = {
  query,    // load for user
  addOrder, // save new order
}

/** מאתחל את localStorage בפעם הראשונה */
function initOrders() {
  storageService.query(STORAGE_KEY)
    .then(data => {
      if (!data || !data.length) {
        orders.forEach(order =>
          storageService.post(STORAGE_KEY, order)
        )
      }
    })
}

/** מחזיר את כל ההזמנות של userId */
async function query(userId) {
  const allOrders = await storageService.query(STORAGE_KEY)
  return allOrders.filter(order => order.userId === userId)
}

/** מוסיף הזמנה חדשה */
async function addOrder(order) {
  return storageService.post(STORAGE_KEY, order)
}