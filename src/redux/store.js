import { combineReducers, createStore } from "redux"
import movieReducer from "./reducers/movieReducer"

// dev-tool
import { composeWithDevTools } from 'redux-devtools-extension';

const combineReducer = combineReducers({
    movies : movieReducer
})

export const store = createStore(combineReducer, composeWithDevTools())