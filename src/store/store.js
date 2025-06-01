// src/store/store.js
import { legacy_createStore as createStore, combineReducers } from 'redux'

import { gigReducer }      from './reducers/gig.reducer'
import { categoryReducer } from './reducers/category.reducer'
import { userReducer }     from './reducers/user.reducer'
import { reviewReducer }   from './reducers/review.reducer'
import { systemReducer }   from './reducers/system.reducer'
import { ordersReducer }   from './reducers/orders.reducer'    // ← ייבוא של ה-orders



// ← ייבוא הפונקציה שמחזירה את היוזר הקבוע מ-localStorage או מ-user.constant
import { userService } from '../services/user/user.service.remote'

const rootReducer = combineReducers({
  gigModule:      gigReducer,
  categoryModule: categoryReducer,
  userModule:     userReducer,
  reviewModule:   reviewReducer,
  systemModule:   systemReducer,
  orderModule:    ordersReducer,
})

// כאן אנחנו מאתחלים את ה-Redux state של ה-userModule עם היוזר שקוראים לו דרך getLoggedinUser()
const preloadedState = {
  userModule: {
    user: userService.getLoggedinUser()
  }
}

// יצירת ה-store עם preloadedState ו-Redux DevTools
export const store = createStore(
  rootReducer,
  preloadedState,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?.()
)




// const rootReducer = combineReducers({
//   gigModule:      gigReducer,
//   userModule:     userReducer,
//   orderModule:    ordersReducer,   // ← הוספה של מודול ORDERS
//   systemModule:   systemReducer,
//   reviewModule:   reviewReducer,
//   categoryModule: categoryReducer,
// })

// // Redux DevTools enhancer (אין thunk כאן)
// const devToolsEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//   ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() 
//   : undefined

// export const store = createStore(rootReducer, devToolsEnhancer)

// // Debugging:
// store.subscribe(() => {
//   console.log('**** Store state changed: ****')
//   console.log(store.getState())
// })


