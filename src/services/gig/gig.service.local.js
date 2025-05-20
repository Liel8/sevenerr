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

async function query(filterBy = { txt: '', maxPrice: Infinity, sortField: 'title', sortDir: 1, category: '' }) {
  let gigsList = loadFromStorage(STORAGE_KEY)

  if (filterBy.txt) {
      const txtLower = filterBy.txt.toLowerCase()
      gigsList = gigsList.filter(gig =>
        gig.title.toLowerCase().includes(txtLower)
      )
    }

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
  return {
      category,
      txt: searchParams.get('txt') || ''
    }
}

function getDefaultFilter() {
  return { category: '', txt: '' }
}

function getById(gigId) {
  return storageService.get(STORAGE_KEY, gigId)
}

async function remove(gigId) {
  await storageService.remove(STORAGE_KEY, gigId)
}

async function save(gig) {
  const loggedInUser = userService.getLoggedinUser()

  const gigToSave = {
    ...gig,
    owner: gig.owner || loggedInUser,
    likedByUsers: gig.likedByUsers || [],
    reviews: gig.reviews || []
  }

  if (!gigToSave._id) {

    gigToSave._id = makeId()
    await storageService.post(STORAGE_KEY, gigToSave)
  } else {

    await storageService.put(STORAGE_KEY, gigToSave)
  }


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


