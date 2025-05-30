import { makeId } from './util.service.js'

export const storageService = {
  query,
  get,
  post,
  put,
  remove,
}

/**
 * מבצע קריאה ל-localStorage עם עיכוב מדומה
 */
function query(entityType, delay = 500) {
  const entities = JSON.parse(localStorage.getItem(entityType)) || []
  return new Promise(resolve => setTimeout(() => resolve(entities), delay))
}

/**
 * מחזיר פריט אחד לפי id
 */
function get(entityType, entityId) {
  return query(entityType)
    .then(entities => {
      const entity = entities.find(e => e._id === entityId)
      if (!entity) throw new Error(`Get failed: no ${entityId} in ${entityType}`)
      return entity
    })
}

/**
 * מוסיף פריט חדש, יוצר לו _id בעזרת makeId
 */
function post(entityType, newEntity) {
  newEntity._id = makeId()
  return query(entityType)
    .then(entities => {
      entities.push(newEntity)
      _save(entityType, entities)
      return newEntity
    })
}

/**
 * עידכון פריט קיים
 */
function put(entityType, updatedEntity) {
  return query(entityType)
    .then(entities => {
      const idx = entities.findIndex(e => e._id === updatedEntity._id)
      if (idx < 0) throw new Error(`Update failed: no ${updatedEntity._id}`)
      const entityToUpdate = { ...entities[idx], ...updatedEntity }
      entities.splice(idx, 1, entityToUpdate)
      _save(entityType, entities)
      return entityToUpdate
    })
}

/**
 * מחיקת פריט לפי id
 */
function remove(entityType, entityId) {
  return query(entityType)
    .then(entities => {
      const idx = entities.findIndex(e => e._id === entityId)
      if (idx < 0) throw new Error(`Remove failed: no ${entityId}`)
      entities.splice(idx, 1)
      _save(entityType, entities)
    })
}

/**
 * שמירת המערך ל-localStorage
 */
function _save(entityType, entities) {
  localStorage.setItem(entityType, JSON.stringify(entities))
}




// export const storageService = {
//     query,
//     get,
//     post,
//     put,
//     remove,
// }

// function query(entityType, delay = 500) {
//     var entities = JSON.parse(localStorage.getItem(entityType)) || []
//     return new Promise(resolve => setTimeout(() => resolve(entities), delay))
// }

// function get(entityType, entityId) {
//     return query(entityType).then(entities => {
//         const entity = entities.find(entity => entity._id === entityId)
//         if (!entity) throw new Error(`Get failed, cannot find entity with id: ${entityId} in: ${entityType}`)
//         return entity
//     })
// }

// function post(entityType, newEntity) {
//     newEntity._id = _makeId()
//     return query(entityType).then(entities => {
//         entities.push(newEntity)
//         _save(entityType, entities)
//         return newEntity
//     })
// }

// function put(entityType, updatedEntity) {
//     return query(entityType).then(entities => {
//         const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
//         if (idx < 0) throw new Error(`Update failed, cannot find entity with id: ${updatedEntity._id} in: ${entityType}`)
//         const entityToUpdate = {...entities[idx], ...updatedEntity}
//         entities.splice(idx, 1, entityToUpdate)
//         _save(entityType, entities)
//         return entityToUpdate
//     })
// }

// function remove(entityType, entityId) {
//     return query(entityType).then(entities => {
//         const idx = entities.findIndex(entity => entity._id === entityId)
//         if (idx < 0) throw new Error(`Remove failed, cannot find entity with id: ${entityId} in: ${entityType}`)
//         entities.splice(idx, 1)
//         _save(entityType, entities)
//     })
// }

// // Private functions

// function _save(entityType, entities) {
//     localStorage.setItem(entityType, JSON.stringify(entities))
// }

// // function _makeId(length = 5) {
// //     var text = ''
// //     var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
// //     for (var i = 0; i < length; i++) {
// //         text += possible.charAt(Math.floor(Math.random() * possible.length))
// //     }
// //     return text
// // }


