
import { combineReducers } from 'redux';

// calling the default reducer to create a link
import additionReducer from './additionReducer';

const rootReducers = combineReducers({
    // add reducer files references here
    default: additionReducer
});

export default rootReducers;