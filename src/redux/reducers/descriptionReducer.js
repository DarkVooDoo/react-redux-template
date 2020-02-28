import {AJOUTER_FORM_DESCRIPTION} from '../actions/types'

export default (state = '', action)=>{

    switch(action.type) {
        case AJOUTER_FORM_DESCRIPTION:
            return action.payload
        default:
            return state;
    }

}