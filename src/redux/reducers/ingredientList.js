import {INGREDIENT_LIST} from '../actions/types'

export default (state = [], action)=>{

    switch(action.type) {
        case INGREDIENT_LIST:
            return action.payload
        default:
            return state;
    }

}