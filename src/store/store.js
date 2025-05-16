// src/store/store.js
import { legacy_createStore as createStore, combineReducers } from 'redux'

import { gigReducer }      from './reducers/gig.reducer'
import { categoryReducer } from './reducers/category.reducer'
import { userReducer }     from './reducers/user.reducer'
import { reviewReducer }   from './reducers/review.reducer'
import { systemReducer }   from './reducers/system.reducer'
import { ordersReducer }   from './reducers/orders.reducer'    // ← ייבוא של ה-orders

const rootReducer = combineReducers({
  gigModule:      gigReducer,
  userModule:     userReducer,
  orderModule:    ordersReducer,   // ← הוספה של מודול ORDERS
  systemModule:   systemReducer,
  reviewModule:   reviewReducer,
  categoryModule: categoryReducer,
})

// Redux DevTools enhancer (אין thunk כאן)
const devToolsEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() 
  : undefined

export const store = createStore(rootReducer, devToolsEnhancer)

// // Debugging:
// store.subscribe(() => {
//   console.log('**** Store state changed: ****')
//   console.log(store.getState())
// })


