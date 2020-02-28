import {DEFAULT_ACTION} from './types'

export const defaultAction = (name)=>{

    return {
        type: DEFAULT_ACTION,
        payload: name
    }
}