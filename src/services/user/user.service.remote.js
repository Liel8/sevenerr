import { httpService } from '../http.service'

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
	getEmptyUser
}

function getUsers() {
	return httpService.get(`user`)
}

async function getById(userId) {
	const user = await httpService.get(`user/${userId}`)
	return user
}

function remove(userId) {
	return httpService.delete(`user/${userId}`)
}

async function update({ _id, score }) {
	const user = await httpService.put(`user/${_id}`, { _id, score })

	// When admin updates other user's details, do not update loggedinUser
    const loggedinUser = getLoggedinUser() // Might not work because its defined in the main service???
    if (loggedinUser._id === user._id) saveLoggedinUser(user)

	return user
}

async function login(userCred) {
	const user = await httpService.post('auth/login', userCred)
	if (user) return saveLoggedinUser(user)
}

async function signup(userCred) {
	if (!userCred.imgUrl) userCred.imgUrl = 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
	userCred.score = 10000

    const user = await httpService.post('auth/signup', userCred)
	return saveLoggedinUser(user)
}

async function logout() {
  sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
  try {
    await httpService.post('auth/logout')
  } catch (err) {
    console.warn('Logout request failed silently:', err)
  }
}


function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
	// return user {}
}

function saveLoggedinUser(user) {
user = { 
	_id: user._id,
	fullname: user.fullname,
	imgUrl: user.imgUrl,
	country: user.country,
	isSeller: user.isSeller,
	rate: user.rate, 
	level: user.level 
}
	sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
	return user
}

function getEmptyUser() {
    return {
        fullname: '',
        username: '',
        password: '',
        desc: '',
        isSeller: '',
        location: 'Israel',
        rate: utilService.getRandomFloat(4.5, 5),
        reviews: [],
        lang: ["English", "Hebrew"],
        level: 1
    }
}