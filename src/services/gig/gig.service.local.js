
import { storageService } from '../async-storage.service'
import { loadFromStorage, makeId, saveToStorage } from '../util.service'
import { userService } from '../user'
import {  gigs } from '../../assets/data/gigData.js'



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

async function query(filterBy = { txt: '', maxPrice: Infinity, sortField: 'title', sortDir: 1, category: '' }) {

        let gigs = loadFromStorage(STORAGE_KEY)
        console.log('gigsss', gigs);
        
        
        
        const { txt, maxPrice, sortField, sortDir, category } = filterBy;
        console.log(category);

    // סינון לפי קטגוריה - השוואה ללא תלות במקרה (case-insensitive)
    if (category) {

        console.log('*****************');
        console.log('inside if in query:', category);
        
        
        
        gigs = gigs.filter(gig => gig.category.includes(category));
    }

    console.log(gigs);
    
    return gigs;
}

function _createGigs() {
    var gigsList = loadFromStorage(STORAGE_KEY)

    if (!gigsList || !gigsList.length) {
        gigsList = gigs
        }
        saveToStorage(STORAGE_KEY, gigs)
    }

function getFilterFromParams(searchParams, category) {
    console.log('<><><><><>');
    console.log(searchParams.get('category'));
    
    
    return {
        // minPrice: searchParams.get('minPrice') || 0,
        category

    }
}

function getDefaultFilter() {
        
    return {
        // minPrice: 0,
        category: ''

    }
}


function getById(gigId) {
    return storageService.get(STORAGE_KEY, gigId)
}

async function remove(gigId) {
    await storageService.remove(STORAGE_KEY, gigId)
}

async function save(gig) {
    let savedGig
    if (gig._id) {
        const gigToSave = {
            ...gig,
            owner: gig.owner || userService.getLoggedinUser()
        }
        savedGig = await storageService.put(STORAGE_KEY, gigToSave)
    } else {
        const gigToSave = {
            _id: makeId(),
            title: gig.title,
            price: gig.price,
            category: gig.category,
            description: gig.description,
            imgUrl: gig.imgUrl,
            owner: userService.getLoggedinUser(),
            likedByUsers: [],
            reviews: []
        }
        savedGig = await storageService.post(STORAGE_KEY, gigToSave)
    }
    return savedGig
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


// async function query(filterBy = { txt: '', price: 0 }) {
//     gigs = await storageService.query(STORAGE_KEY)
//     const { txt, minSpeed, maxPrice, sortField, sortDir } = filterBy

//     if (txt) {
//         const regex = new RegExp(filterBy.txt, 'i')
//         gigs = gigs.filter(gig => regex.test(gig.vendor) || regex.test(gig.description))
//     }
//     if (minSpeed) {
//         gigs = gigs.filter(gig => gig.speed >= minSpeed)
//     }
//     if(sortField === 'vendor' || sortField === 'owner'){
//         gigs.sort((gig1, gig2) => 
//             gig1[sortField].localeCompare(gig2[sortField]) * +sortDir)
//     }
//     if(sortField === 'price' || sortField === 'speed'){
//         gigs.sort((gig1, gig2) => 
//             (gig1[sortField] - gig2[sortField]) * +sortDir)
//     }
    
//     gigs = gigs.map(({ _id, vendor, price, speed, owner }) => ({ _id, vendor, price, speed, owner }))
//     return gigs
// }

// function getById(gigId) {
//     return storageService.get(STORAGE_KEY, gigId)
// }

// async function remove(gigId) {
//     // throw new Error('Nope')
//     await storageService.remove(STORAGE_KEY, gigId)
// }

// async function save(gig) {
//     var savedGig
//     if (gig._id) {
//         const gigToSave = {
//             _id: gig._id,
//             price: gig.price,
//             speed: gig.speed,
//         }
//         savedGig = await storageService.put(STORAGE_KEY, gigToSave)
//     } else {
//         const gigToSave = {
//             vendor: gig.vendor,
//             price: gig.price,
//             speed: gig.speed,
//             // Later, owner is set by the backend
//             owner: userService.getLoggedinUser(),
//             msgs: []
//         }
//         savedGig = await storageService.post(STORAGE_KEY, gigToSave)
//     }
//     return savedGig
// }

// async function addGigMsg(gigId, txt) {
//     // Later, this is all done by the backend
//     const gig = await getById(gigId)

//     const msg = {
//         id: makeId(),
//         by: userService.getLoggedinUser(),
//         txt
//     }
//     gig.msgs.push(msg)
//     await storageService.put(STORAGE_KEY, gig)

//     return msg
// }