import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'

const middleware = []

export const store = createStore(
    reducers,
    applyMiddleware(...middleware)
)
export default store
