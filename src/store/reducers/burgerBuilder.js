import * as actionTypes from '../actions/actionTypes'


const initialstate = {
    ingredients: null,
    totalPrice: 4,
    loading: false,
    error: false

}

const ingredientPrices = {
    salad: 0.4,
    bacon: 0.6,
    cheese: 0.5,
    meat: 1
}


const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + ingredientPrices[action.ingredientName]

            }
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] -1
                },
                totalPrice: state.totalPrice - ingredientPrices[action.ingredientName]
            }

            case actionTypes.FETCH_INGREDIENTS:
                return {
                    ...state,
                    ingredients: action.ingredients,
                    error: false
                }
            case actionTypes.FAILED_FETCH_INGREDIENTS:
                return {
                    ...state,
                    error: true
                }
        default:
            return state
    }
}

export default reducer