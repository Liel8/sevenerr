// import { storageService } from '../async-storage.service'

// const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

// export const userService = {
//     login,
//     logout,
//     signup,
//     getUsers,
//     getById,
//     remove,
//     update,
//     getLoggedinUser,
//     saveLoggedinUser,
// }

// async function getUsers() {
//     const users = await storageService.query('user')
//     return users.map(user => {
//         delete user.password
//         return user
//     })
// }

// async function getById(userId) {
//     return await storageService.get('user', userId)
// }

// function remove(userId) {
//     return storageService.remove('user', userId)
// }

// async function update({ _id, score }) {
//     const user = await storageService.get('user', _id)
//     user.score = score
//     await storageService.put('user', user)

// 	// When admin updates other user's details, do not update loggedinUser
//     const loggedinUser = getLoggedinUser()
//     if (loggedinUser._id === user._id) saveLoggedinUser(user)

//     return user
// }

// async function login(userCred) {
//     const users = await storageService.query('user')
//     const user = users.find(user => user.username === userCred.username)

//     if (user) return saveLoggedinUser(user)
// }

// async function signup(userCred) {
//     if (!userCred.imgUrl) userCred.imgUrl = 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
//     userCred.score = 10000

//     const user = await storageService.post('user', userCred)
//     return saveLoggedinUser(user)
// }

// async function logout() {
//     sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
// }

// function getLoggedinUser() {
//     // return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
//     return {
//         _id: 'u101',                // או מה שצריך
//         username: 'yaz',
//         fullname: 'Yazan Meray',
//         imgUrl: '/img/yazanprofileimg.png',
//         balance: 0
        
//     }
// }

// function saveLoggedinUser(user) {
// 	user = { 
//         _id: user._id, 
//         fullname: user.fullname, 
//         imgUrl: user.imgUrl, 
//         score: user.score, 
//         isAdmin: user.isAdmin 
//     }
// 	sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
// 	return user
// }

// // To quickly create an admin user, uncomment the next line
// // _createAdmin()
// async function _createAdmin() {
//     const user = {
//         username: 'admin',
//         password: 'admin',
//         fullname: 'Mustafa Adminsky',
//         imgUrl: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
//         score: 10000,
//     }

//     const newUser = await storageService.post('user', userCred)
//     console.log('newUser: ', newUser)
// }

// src/services/user.service.local.js

import { storageService } from '../async-storage.service.js'
import { usersDb }       from '../../assets/data/userData.js'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

export const userService = {
  login,
  logout,
  signup,
  getUsers,
  getById,
  remove,
  update,
  getLoggedinUser,
  saveLoggedinUser,
}

// ---------------------------------------------
// Seed: יצירת יוזרי דמו אם אין כלל משתמשים
// ---------------------------------------------
async function _createDemoUsersIfNeeded() {
  const existingUsers = await storageService.query('user')
  if (!existingUsers || !existingUsers.length) {
    // usersDb הוא מערך של אובייקטים עם שדות _id, username, password וכדומה
    for (const user of usersDb) {
      // אם ברצונכם לשמור על ה-_id המקורי מתוך usersDb, 
      // תעדכנו את post כך שלא יחליף _id אם קיים.
      await storageService.post('user', user)
    }
  }
}
// קוראים ל-seed ברגע שהמודול נטען:
_createDemoUsersIfNeeded()


// ---------------------------------------------
// 1) getUsers: מחזיר את כל המשתמשים ללא שדה password
// ---------------------------------------------
async function getUsers() {
  const users = await storageService.query('user')
  return users.map(user => {
    const { password, ...safeUser } = user
    return safeUser
  })
}

// ---------------------------------------------
// 2) getById: מחזיר משתמש מלא לפי _id
// ---------------------------------------------
async function getById(userId) {
  return await storageService.get('user', userId)
}

// ---------------------------------------------
// 3) remove: מוחק משתמש לפי _id
// ---------------------------------------------
function remove(userId) {
  return storageService.remove('user', userId)
}

// ---------------------------------------------
// 4) update: מעדכן פרטי משתמש קיים
// ---------------------------------------------
async function update(userToUpdate) {
  const updatedUser = await storageService.put('user', userToUpdate)

  // אם המשתמש המחובר הוא זה שעודכן, נשמור את השינויים גם ב-sessionStorage
  const loggedin = getLoggedinUser()
  if (loggedin && loggedin._id === updatedUser._id) {
    saveLoggedinUser(updatedUser)
  }

  return updatedUser
}

// ---------------------------------------------
// 5) login: בודק התאמה username+password ושומר ב-sessionStorage
// ---------------------------------------------
async function login(userCred) {
  const users = await storageService.query('user')
  const user = users.find(
    u => u.username === userCred.username && u.password === userCred.password
  )
  if (!user) throw new Error('Invalid credentials')
  return saveLoggedinUser(user)
}

// ---------------------------------------------
// 6) signup: יוצר משתמש חדש ושומר ל-storage + sessionStorage
// ---------------------------------------------
async function signup(userCred) {
  // שדות ברירת מחדל אם חסרים
  if (!userCred.imgUrl) userCred.imgUrl = 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
  userCred.score = 10000
  userCred.isSeller = false
  userCred.level = 'basic'
  userCred.rate = 4.5
  userCred.country = 'Israel'

  // storageService.post יוצר _id באופן אוטומטי באמצעות makeId()
  const newUser = await storageService.post('user', userCred)
  return saveLoggedinUser(newUser)
}

// ---------------------------------------------
// 7) logout: מסיר את המשתמש המחובר מ-sessionStorage
// ---------------------------------------------
async function logout() {
  sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
}

// ---------------------------------------------
// 8) getLoggedinUser: מחזיר את אובייקט המשתמש המחובר, או null
// ---------------------------------------------
function getLoggedinUser() {
  try {
    const userJson = sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER)
    return userJson ? JSON.parse(userJson) : null
  } catch {
    return null
  }
}

// ---------------------------------------------
// 9) saveLoggedinUser: שומר אובייקט מינימלי (ללא password) ב-sessionStorage
// ---------------------------------------------
function saveLoggedinUser(user) {
  const minimalUser = {
    _id: user._id,
    fullname: user.fullname,
    username: user.username,
    imgUrl: user.imgUrl,
    isSeller: user.isSeller,
    level: user.level,
    rate: user.rate,
    country: user.country,
  }
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(minimalUser))
  return minimalUser
}


// ליצירת אדמין לבדיקה - לא חובה להריץ
// async function _createAdmin() {
//     const user = {
//         username: 'admin',
//         password: 'admin',
//         fullname: 'Mustafa Adminsky',
//         imgUrl: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
//         score: 10000,
//         isSeller: true,
//         level: 'premium',
//         rate: 5,
//         country: 'USA'
//     }
//     const newUser = await storageService.post('user', user)
//     console.log('Admin user created:', newUser)
// }
