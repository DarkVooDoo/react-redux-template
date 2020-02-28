import {combineReducers} from 'redux'

import defaultReducer from './defaultReducer'

const rootReducers = combineReducers({
    //all reducers
    firstReducer: defaultReducer
})

export default rootReducers