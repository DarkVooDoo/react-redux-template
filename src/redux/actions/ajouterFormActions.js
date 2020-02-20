import {INGREDIENT_LIST, UPDATE_STEP_LIST, AJOUTER_FORM_PAGE, AJOUTER_FORM_DESCRIPTION} from './types'

export const ingredientsList = (list)=>{
    //Fetch Data here

    return {
        type: INGREDIENT_LIST,
        payload: list
    }
}

export const updateStepList = (list)=>{
    return {
        type: UPDATE_STEP_LIST,
        payload: list
    }
}

export const actualPage = (page, isFirst)=>{
    return {
        type: AJOUTER_FORM_PAGE,
        payload: page
    }
}

export const descriptionUpdate = (description)=>{
    return {
        type: AJOUTER_FORM_DESCRIPTION,
        payload: description
    }
}