
import { combineReducers } from 'redux';

// calling the default reducer to create a link
import pageReducer from './pageReducer'
import ingredientList from './ingredientList';
import stepList from './stepList'
import descriptionReducer from './descriptionReducer'
import ajouterImageReducer from './ajouterImageReducer'
import indexCarouselReducer from './indexCarouselReducer'

const rootReducers = combineReducers({
    // add reducer files references here
    iList: ingredientList,
    sList: stepList,
    description: descriptionReducer,
    page: pageReducer,
    image: ajouterImageReducer,
    carouselPos: indexCarouselReducer
});

export default rootReducers;