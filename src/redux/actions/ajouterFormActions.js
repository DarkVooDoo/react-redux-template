import {INGREDIENT_LIST, UPDATE_STEP_LIST, AJOUTER_FORM_PAGE, AJOUTER_FORM_DESCRIPTION, AJOUTER_FORM_IMAGE,
CAROUSEL_POS} from './types'

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

export const actualPage = (page)=>{
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

export const recetteImage = (image,title)=>{
    let imageInfo = [];
    imageInfo.push(image)
    imageInfo.push(title)
    return{
        type: AJOUTER_FORM_IMAGE,
        payload: imageInfo
    }
}

export const carouselPos = (pos)=>{
    return{
        type: CAROUSEL_POS,
        payload: pos
    }
}