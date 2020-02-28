import {AJOUTER_FORM_PAGE} from '../actions/types'

export default (state = 0, action)=>{

    switch(action.type) {
        case AJOUTER_FORM_PAGE:
            return action.payload
        default:
            return state;
    }

}