export const SET_ORDERS    = 'SET_ORDERS'
export const ADD_ORDER     = 'ADD_ORDER'
export const UPDATE_ORDER  = 'UPDATE_ORDER'

const initialState = {
  orders: []
}

export function ordersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ORDERS: {
      // מיינן את כל ההזמנות מהחדש לישן
      const sorted = action.orders
        .slice() // לשמור על immutability
        .sort((a, b) => b.createdAt - a.createdAt)
      return { ...state, orders: sorted }
    }

    case ADD_ORDER:
      // מוסיף הזמנה חדשה לראש הרשימה
      return { ...state, orders: [action.order, ...state.orders] }

    case UPDATE_ORDER:
      return {
        ...state,
        orders: state.orders.map(o =>
          o._id === action.order._id ? action.order : o
        )
      }

    default:
      return state
  }
}




// export const SET_ORDERS    = 'SET_ORDERS'
// export const ADD_ORDER     = 'ADD_ORDER'
// export const UPDATE_ORDER  = 'UPDATE_ORDER'  // ← new action type

// const initialState = {
//   orders: []
// }

// export function ordersReducer(state = initialState, action) {
//   switch (action.type) {
//     case SET_ORDERS:
//       return { ...state, orders: action.orders }

//     case ADD_ORDER:
//       return { ...state, orders: [action.order, ...state.orders] }

//     case UPDATE_ORDER:
//       return {
//         ...state,
//         orders: state.orders.map(o =>
//           o._id === action.order._id ? action.order : o
//         )
//       }

//     default:
//       return state
//   }
// }


// export const SET_ORDERS = 'SET_ORDERS'
// export const ADD_ORDER  = 'ADD_ORDER'

// const initialState = {
//   orders: []
// }

// export function ordersReducer(state = initialState, action) {
//   switch (action.type) {
//     case SET_ORDERS:
//       return { ...state, orders: action.orders }

//     case ADD_ORDER:
//       return { ...state, orders: [...state.orders, action.order] }


//     default:
//       return state
//   }
// }
