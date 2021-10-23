const initialState = {
  favorites: [],
}

export function favoritesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_FAVORITES':
      return { ...state, favorites: action.favorites }
      case 'ADD_FAVORITE':
      return { ...state, favorites: [...state.favorites, action.favorite] }
    case 'REMOVE_FAVORITE':
      return { ...state, favorites: state.favorites.filter(favorite => favorite._id !== action.favoriteId) }
    case 'UPDATE_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.map(favorite =>
          favorite._id === action.favorite._id ? action.favorite : favorite
        )}
    default:
      return state
  }
}