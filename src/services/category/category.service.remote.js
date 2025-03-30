import { httpService } from '../http.service'

export const categoryService = {
    query,
    getById,
    save,
    remove,
    addCategoryMsg
}

async function query(filterBy = { txt: '', price: 0 }) {
    return httpService.get(`category`, filterBy)
}

function getById(categoryId) {
    return httpService.get(`category/${categoryId}`)
}

async function remove(categoryId) {
    return httpService.delete(`category/${categoryId}`)
}
async function save(category) {
    var savedCategory
    if (category._id) {
        savedCategory = await httpService.put(`category/${category._id}`, category)
    } else {
        savedCategory = await httpService.post('category', category)
    }
    return savedCategory
}

async function addCategoryMsg(categoryId, txt) {
    const savedMsg = await httpService.post(`category/${categoryId}/msg`, {txt})
    return savedMsg
}