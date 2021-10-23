
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import ReduxThunk from 'redux-thunk';
import { favoritesReducer } from './reducers/favorites.reducer.js'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootReducer = combineReducers({
    favoritesModule: favoritesReducer,
})

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(ReduxThunk))
) 

