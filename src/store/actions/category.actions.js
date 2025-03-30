import { categoryService } from '../../services/category'
import { store } from '../store'
import { ADD_CATEGORY, REMOVE_CATEGORY, SET_CATEGORIES, SET_CATEGORY, UPDATE_CATEGORY, ADD_CATEGORY_MSG } from '../reducers/category.reducer'

export async function loadCategories(filterBy) {
    try {
        const categories = await categoryService.query(filterBy)
        store.dispatch(getCmdSetCategories(categories))
    } catch (err) {
        console.log('Cannot load categories', err)
        throw err
    }
}

export async function loadCategory(categoryId) {
    try {
        const category = await categoryService.getById(categoryId)
        store.dispatch(getCmdSetCategory(category))
    } catch (err) {
        console.log('Cannot load category', err)
        throw err
    }
}


export async function removeCategory(categoryId) {
    try {
        await categoryService.remove(categoryId)
        store.dispatch(getCmdRemoveCategory(categoryId))
    } catch (err) {
        console.log('Cannot remove category', err)
        throw err
    }
}

export async function addCategory(category) {
    try {
        const savedCategory = await categoryService.save(category)
        store.dispatch(getCmdAddCategory(savedCategory))
        return savedCategory
    } catch (err) {
        console.log('Cannot add category', err)
        throw err
    }
}

export async function updateCategory(category) {
    try {
        const savedCategory = await categoryService.save(category)
        store.dispatch(getCmdUpdateCategory(savedCategory))
        return savedCategory
    } catch (err) {
        console.log('Cannot save category', err)
        throw err
    }
}

export async function addCategoryMsg(categoryId, txt) {
    try {
        const msg = await categoryService.addCategoryMsg(categoryId, txt)
        store.dispatch(getCmdAddCategoryMsg(msg))
        return msg
    } catch (err) {
        console.log('Cannot add category msg', err)
        throw err
    }
}

// Command Creators:
function getCmdSetCategories(categories) {
    return {
        type: SET_CATEGORIES,
        categories
    }
}
function getCmdSetCategory(category) {
    return {
        type: SET_CATEGORY,
        category
    }
}
function getCmdRemoveCategory(categoryId) {
    return {
        type: REMOVE_CATEGORY,
        categoryId
    }
}
function getCmdAddCategory(category) {
    return {
        type: ADD_CATEGORY,
        category
    }
}
function getCmdUpdateCategory(category) {
    return {
        type: UPDATE_CATEGORY,
        category
    }
}
function getCmdAddCategoryMsg(msg) {
    return {
        type: ADD_CATEGORY_MSG,
        msg
    }
}

// unitTestActions()
async function unitTestActions() {
    await loadCategories()
    await addCategory(categoryService.getEmptyCategory())
    await updateCategory({
        _id: 'm1oC7',
        title: 'Category-Good',
    })
    await removeCategory('m1oC7')
    // TODO unit test addCategoryMsg
}
