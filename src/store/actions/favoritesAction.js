import { favoriteService } from '../../services/favorite.service.js'


export function loadFavorites() {
  return async dispatch => {
    try {
      const favorites = await favoriteService.query()
      dispatch({ type: 'SET_FAVORITES', favorites })

    } catch (err) {
      console.log('FavoriteActions: err in loadFavorites', err)
    }
  }
}

export function addFavorite(favorite) {
  return async dispatch => {
    try {
      const addedFavorite = await favoriteService.save(favorite)
      dispatch({ type: 'ADD_FAVORITE', favorite: addedFavorite })
    } catch (err) {
      console.log('FavoriteActions: err in addFavorite', err)
    }
  }
}

export function saveFavorite(favorite) { 
  return async dispatch => {
    return favoriteService.save(favorite)
      .then((savedFavorite) => {
        if (!favorite._id) dispatch({ type: 'ADD_FAVORITE', favorite: savedFavorite })
        else dispatch({ type: 'UPDATE_FAVORITE', favorite: savedFavorite })
      })
  }
}

export function removeFavorite(favoriteId) {
  return async dispatch => {
    try {
      await favoriteService.remove(favoriteId)
      dispatch({ type: 'REMOVE_FAVORITE', favoriteId })
    } catch (err) {
      console.log('FavoriteActions: err in removeFavorite', err)
    }
  }
}
