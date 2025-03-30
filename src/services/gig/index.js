const { DEV, VITE_LOCAL } = import.meta.env

import { getRandomIntInclusive, makeId } from '../util.service'

import { gigService as local } from './gig.service.local'
import { gigService as remote } from './gig.service.remote'

function getEmptyGig() {
    return {
        _id: makeId(),
        title: '',
        category: '',
        description: '',
        price: 0,
        owner: {
            fullname: '',
            imgUrl: '',
            level: '',
            rate: 0,
        },
        country: '',
        daysToMake: 0,
        imgUrl: '',
        tags: [],
        likedByUsers: [],
        reviews: [],
    };
}

function getDefaultFilter() {
    return {
        txt: '',
        minPrice: 0,
        maxPrice: Infinity,
        sortField: '',
        sortDir: '',
    };
}

// function getEmptyGig() {
// 	return {
// 		vendor: makeId(),
// 		speed: getRandomIntInclusive(80, 240),
// 		msgs: [],
// 	}
// }

// function getDefaultFilter() {
//     return {
//         txt: '',
//         minSpeed: '',
//         sortField: '',
//         sortDir: '',
//     }
// }

const service = VITE_LOCAL === 'true' ? local : remote
export const gigService = { getEmptyGig, getDefaultFilter, ...service }

// Easy access to this service from the dev tools console
// when using script - dev / dev:local

if (DEV) window.gigService = gigService
