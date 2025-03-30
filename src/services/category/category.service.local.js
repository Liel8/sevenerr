
import { storageService } from '../async-storage.service'
import { makeId } from '../util.service'
import { userService } from '../user'
import { categories } from '../../assets/data/categoryData.js'


const STORAGE_KEY = 'category'

export const categoryService = {
    query,
    getById,
    save,
    remove,
    addCategoryMsg
}
window.cs = categoryService


async function query(filterBy = { txt: '', price: 0 }) {
    categories = await storageService.query(STORAGE_KEY)
    const { txt, minSpeed, maxPrice, sortField, sortDir } = filterBy

    if (txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        categories = categories.filter(category => regex.test(category.vendor) || regex.test(category.description))
    }
    if (minSpeed) {
        categories = categories.filter(category => category.speed >= minSpeed)
    }
    if(sortField === 'vendor' || sortField === 'owner'){
        categories.sort((category1, category2) => 
            category1[sortField].localeCompare(category2[sortField]) * +sortDir)
    }
    if(sortField === 'price' || sortField === 'speed'){
        categories.sort((category1, category2) => 
            (category1[sortField] - category2[sortField]) * +sortDir)
    }
    
    categories = categories.map(({ _id, vendor, price, speed, owner }) => ({ _id, vendor, price, speed, owner }))
    return categories
}

function getById(categoryId) {
    return storageService.get(STORAGE_KEY, categoryId)
}

async function remove(categoryId) {
    // throw new Error('Nope')
    await storageService.remove(STORAGE_KEY, categoryId)
}

async function save(category) {
    var savedCategory
    if (category._id) {
        const categoryToSave = {
            _id: category._id,
            price: category.price,
            speed: category.speed,
        }
        savedCategory = await storageService.put(STORAGE_KEY, categoryToSave)
    } else {
        const categoryToSave = {
            vendor: category.vendor,
            price: category.price,
            speed: category.speed,
            // Later, owner is set by the backend
            owner: userService.getLoggedinUser(),
            msgs: []
        }
        savedCategory = await storageService.post(STORAGE_KEY, categoryToSave)
    }
    return savedCategory
}

async function addCategoryMsg(categoryId, txt) {
    // Later, this is all done by the backend
    const category = await getById(categoryId)

    const msg = {
        id: makeId(),
        by: userService.getLoggedinUser(),
        txt
    }
    category.msgs.push(msg)
    await storageService.put(STORAGE_KEY, category)

    return msg
}