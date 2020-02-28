import {DEFAULT_ACTION} from '../actions/types'

// default function to display redux action format
export default (state = '', action)=>{

    switch(action.type) {
        case DEFAULT_ACTION:      
            return action.payload
        default:
            return state;
    }

}