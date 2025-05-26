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

import { storageService } from '../async-storage.service'

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

// קבלת כל המשתמשים (ללא סיסמאות)
async function getUsers() {
    const users = await storageService.query('user')
    return users.map(user => {
        const userCopy = { ...user }
        delete userCopy.password
        return userCopy
    })
}

// קבלת משתמש לפי ID
async function getById(userId) {
    return await storageService.get('user', userId)
}

// מחיקת משתמש
function remove(userId) {
    return storageService.remove('user', userId)
}

// עדכון פרטי משתמש
async function update(userToUpdate) {
    const user = await storageService.put('user', userToUpdate)

    const loggedinUser = getLoggedinUser()
    if (loggedinUser && loggedinUser._id === user._id) {
        saveLoggedinUser(user)
    }

    return user
}

// התחברות
async function login(userCred) {
    const users = await storageService.query('user')
    const user = users.find(user =>
        user.username === userCred.username &&
        user.password === userCred.password
    )

    if (!user) throw new Error('Invalid credentials')
    return saveLoggedinUser(user)
}

// הרשמה
async function signup(userCred) {
    if (!userCred.imgUrl) {
        userCred.imgUrl = 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
    }

    userCred.score = 10000
    userCred.isSeller = false
    userCred.level = 'basic'
    userCred.rate = 4.5
    userCred.country = 'Israel'

    const user = await storageService.post('user', userCred)
    return saveLoggedinUser(user)
}

// התנתקות
async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
}

// קבלת משתמש מחובר מה-session
function getLoggedinUser() {
//     // return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
    return {
        _id: 'u101',                // או מה שצריך
        username: 'yaz',
        fullname: 'Yazan Meray',
        imgUrl: '/img/yazanprofileimg.png',
        balance: 0
        
    }
}


// שמירת משתמש מחובר
function saveLoggedinUser(user) {
    const minimalUser = {
        _id: user._id,
        fullname: user.fullname,
        imgUrl: user.imgUrl,
        isSeller: user.isSeller,
        level: user.level,
        rate: user.rate,
        country: user.country
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
