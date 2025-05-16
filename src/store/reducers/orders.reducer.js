export const SET_ORDERS = 'SET_ORDERS'
export const ADD_ORDER  = 'ADD_ORDER'

const initialState = {
  orders: []
}

export function ordersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ORDERS:
      return { ...state, orders: action.orders }

    case ADD_ORDER:
      return { ...state, orders: [...state.orders, action.order] }

    default:
      return state
  }
}
