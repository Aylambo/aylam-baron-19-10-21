import { storageService } from './storageService.js'
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyBbTZyN_EMhg5_KqY2QPa6StarWQzJ2zp0");


const STORAGE_KEY = 'favorite'

export const favoriteService = {
    query,
    save,
    remove,
    locFromAddress,
}

async function query() {
    
    return storageService.query(STORAGE_KEY).then(favorites => {
        return favorites
    })
}

async function remove(favoriteId) {
    return storageService.remove(STORAGE_KEY, favoriteId)
}

async function save(favorite) {
  return storageService.save(STORAGE_KEY, favorite)

}

async function locFromAddress(location) {
    const res = await Geocode.fromAddress(location)
    const { lat, lng } = res.results[0].geometry.location
    return { lat, lng }
}