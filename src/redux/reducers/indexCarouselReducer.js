import {CAROUSEL_POS} from '../actions/types'

export default (state = 0, action)=>{

    switch(action.type) {
        case CAROUSEL_POS:
            return action.payload
        default:
            return state;
    }

}