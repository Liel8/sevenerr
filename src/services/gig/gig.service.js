import { httpService } from '../http.service'


export const gigService = {
    query,
    getById,
    save,
    remove,
    addGigMsg,
    getFilterFromParams
}

async function query(filterBy = { txt: '', price: 0 }) {
    console.log("@@@@@@")
    return httpService.get(`gig`, filterBy)
}

function getById(gigId) {
    return httpService.get(`gig/${gigId}`)
}

async function remove(gigId) {
    return httpService.delete(`gig/${gigId}`)
}
async function save(gig) {
    var savedGig
    if (gig._id) {
        savedGig = await httpService.put(`gig/${gig._id}`, gig)
    } else {
        savedGig = await httpService.post('gig', gig)
    }
    return savedGig
}

async function addGigMsg(gigId, txt) {
    const savedMsg = await httpService.post(`gig/${gigId}/msg`, {txt})
    return savedMsg
}

function getFilterFromParams(searchParams, category) {
  return {
    category,
    txt: searchParams.get('txt') || ''
  }
}