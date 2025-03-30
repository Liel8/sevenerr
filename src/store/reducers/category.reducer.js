export const SET_CATEGORIES = 'SET_CATEGORIES'
export const SET_CATEGORY = 'SET_CATEGORY'
export const REMOVE_CATEGORY = 'REMOVE_CATEGORY'
export const ADD_CATEGORY = 'ADD_CATEGORY'
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'
export const ADD_CATEGORY_MSG = 'ADD_CATEGORY_MSG'

const initialState = {
    categories: [],
    category: null
}

export function categoryReducer(state = initialState, action) {
    var newState = state
    var categories
    switch (action.type) {
        case SET_CATEGORIES:
            newState = { ...state, categories: action.categories }
            break
        case SET_CATEGORY:
            newState = { ...state, category: action.category }
            break
        case REMOVE_CATEGORY:
            const lastRemovedCategory = state.categories.find(category => category._id === action.categoryId)
            categories = state.categories.filter(category => category._id !== action.categoryId)
            newState = { ...state, categories, lastRemovedCategory }
            break
        case ADD_CATEGORY:
            newState = { ...state, categories: [...state.categories, action.category] }
            break
        case UPDATE_CATEGORY:
            categories = state.categories.map(category => (category._id === action.category._id) ? action.category : category)
            newState = { ...state, categories }
            break
        case ADD_CATEGORY_MSG:
            newState = { ...state, category: { ...state.category, msgs: [...state.category.msgs || [], action.msg] } }
            break
        default:
    }
    return newState
}