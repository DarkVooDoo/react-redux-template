import {UPDATE_STEP_LIST} from '../actions/types'

export default (state = [], action)=>{

    switch(action.type) {
        case UPDATE_STEP_LIST:
            return action.payload
        default:
            return state;
    }

}