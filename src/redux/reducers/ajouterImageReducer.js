import {AJOUTER_FORM_IMAGE} from '../actions/types'

export default (state = ['', 'Select A Image'], action)=>{

    switch(action.type) {
        case AJOUTER_FORM_IMAGE:
            return action.payload
        default:
            return state;
    }

}