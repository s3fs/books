import { createStore } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import bookReducer from "./reducers/bookReducer"

const store = createStore(bookReducer, composeWithDevTools())

export default store