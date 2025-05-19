// src/services/gig/gig.service.local.js

import { storageService } from '../async-storage.service'
import { loadFromStorage, makeId, saveToStorage } from '../util.service'
import { userService } from '../user'
import { gigs } from '../../assets/data/gigData.js'

const STORAGE_KEY = 'gigDB'
_createGigs()

export const gigService = {
  query,
  getById,
  save,
  remove,
  addGigMsg,
  getFilterFromParams,
  getDefaultFilter
}
window.cs = gigService

// מחזיר את כל הגיגים (כולל owner אם קיים)
async function query(filterBy = { txt: '', maxPrice: Infinity, sortField: 'title', sortDir: 1, category: '' }) {
  let gigsList = loadFromStorage(STORAGE_KEY)
  const { category } = filterBy
  if (category) {
    gigsList = gigsList.filter(gig => gig.category.includes(category))
  }
  return Promise.resolve(gigsList)
}

function _createGigs() {
  const gigsList = loadFromStorage(STORAGE_KEY)
  if (!gigsList || !gigsList.length) {
    saveToStorage(STORAGE_KEY, gigs)
  }
}

function getFilterFromParams(searchParams, category) {
  return { category }
}

function getDefaultFilter() {
  return { category: '' }
}

function getById(gigId) {
  return storageService.get(STORAGE_KEY, gigId)
}

async function remove(gigId) {
  await storageService.remove(STORAGE_KEY, gigId)
}

async function save(gig) {
  const loggedInUser = userService.getLoggedinUser()
  // בונים אובייקט לשמירה כשה־owner הוא מהגיגה או היוזר הנוכחי
  const gigToSave = {
    ...gig,
    owner: gig.owner || loggedInUser,
    likedByUsers: gig.likedByUsers || [],
    reviews: gig.reviews || []
  }

  if (!gigToSave._id) {
    // יצירה חדשה
    gigToSave._id = makeId()
    await storageService.post(STORAGE_KEY, gigToSave)
  } else {
    // עדכון קיים
    await storageService.put(STORAGE_KEY, gigToSave)
  }

  // מחזירים תמיד את הגיגה עם ה־owner השמור
  return Promise.resolve(gigToSave)
}

async function addGigMsg(gigId, txt) {
  const gig = await getById(gigId)
  if (!gig) throw new Error('Gig not found')

  const msg = {
    id: makeId(),
    by: userService.getLoggedinUser(),
    txt,
    createdAt: Date.now()
  }
  gig.reviews = gig.reviews || []
  gig.reviews.push(msg)
  await storageService.put(STORAGE_KEY, gig)
  return msg
}




// import { storageService } from '../async-storage.service'
// import { loadFromStorage, makeId, saveToStorage } from '../util.service'
// import { userService } from '../user'
// import {  gigs } from '../../assets/data/gigData.js'



// const STORAGE_KEY = 'gigDB'
// _createGigs()

// export const gigService = {
//     query,
//     getById,
//     save,
//     remove,
//     addGigMsg, 
//     getFilterFromParams,
//     getDefaultFilter
// }
// window.cs = gigService

// async function query(filterBy = { txt: '', maxPrice: Infinity, sortField: 'title', sortDir: 1, category: '' }) {

//         let gigs = loadFromStorage(STORAGE_KEY)
//         console.log('gigsss', gigs);
        
        
        
//         const { txt, maxPrice, sortField, sortDir, category } = filterBy;
//         console.log(category);

//     // סינון לפי קטגוריה - השוואה ללא תלות במקרה (case-insensitive)
//     if (category) {

//         console.log('*****************');
//         console.log('inside if in query:', category);
        
        
        
//         gigs = gigs.filter(gig => gig.category.includes(category));
//     }

//     console.log(gigs);
    
//     return gigs;
// }

// function _createGigs() {
//     const gigsList = loadFromStorage(STORAGE_KEY)
//     // רק אם אין עדיין data ב־localStorage, שומרים את ברירת המחדל
//     if (!gigsList || !gigsList.length) {
//       saveToStorage(STORAGE_KEY, gigs)
//     }
// }

// function getFilterFromParams(searchParams, category) {
//     console.log('<><><><><>');
//     console.log(searchParams.get('category'));
    
    
//     return {
//         // minPrice: searchParams.get('minPrice') || 0,
//         category

//     }
// }

// function getDefaultFilter() {
        
//     return {
//         // minPrice: 0,
//         category: ''

//     }
// }


// function getById(gigId) {
//     return storageService.get(STORAGE_KEY, gigId)
// }

// async function remove(gigId) {
//     await storageService.remove(STORAGE_KEY, gigId)
// }

// async function save(gig) {
//     let savedGig
//     if (gig._id) {
//         const gigToSave = {
//             ...gig,
//             owner: gig.owner || userService.getLoggedinUser()
//         }
//         savedGig = await storageService.put(STORAGE_KEY, gigToSave)
//     } else {
//         const gigToSave = {
//             _id: makeId(),
//             title: gig.title,
//             price: gig.price,
//             category: gig.category,
//             description: gig.description,
//             imgUrl: gig.imgUrl,
//             owner: userService.getLoggedinUser(),
//             likedByUsers: [],
//             reviews: []
//         }
//         savedGig = await storageService.post(STORAGE_KEY, gigToSave)
//     }
//     return savedGig
// }

// async function addGigMsg(gigId, txt) {
//     const gig = await getById(gigId)
//     if (!gig) throw new Error('Gig not found')

//     const msg = {
//         id: makeId(),
//         by: userService.getLoggedinUser(),
//         txt,
//         createdAt: Date.now()
//     }
//     gig.reviews = gig.reviews || []
//     gig.reviews.push(msg)
//     await storageService.put(STORAGE_KEY, gig)
//     return msg
// }
