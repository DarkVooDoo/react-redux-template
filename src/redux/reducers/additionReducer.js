import {INCREMENT} from '../actions/types'

export default (state = {}, action)=>{

    switch(action.type) {
        case INCREMENT:
            return action.payload;
        default:
            return state;
    }

}