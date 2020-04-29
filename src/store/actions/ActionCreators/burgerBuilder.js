import * as actionTypes from '../actionTypes'
import instance from '../../../services/HttpServices'

export const addIngredient = (ingName) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: ingName
    }
}
export const removeIngredient = (ingName) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: ingName
    }
}



const fetchIngredients = (ingredients) => {
    return {
        type: actionTypes.FETCH_INGREDIENTS,
        ingredients: ingredients
    }
}
const failedFetchIngredients = () => {
    return {
        type: actionTypes.FAILED_FETCH_INGREDIENTS,
    }
}

export const initIngredients = () => {
    return dispatch => {
        instance.get('https://react-burger-bf3f8.firebaseio.com/orders/ingridients.json')
        .then(res => dispatch(fetchIngredients(res.data)))
        .catch(error => dispatch(failedFetchIngredients())) 
    }
}