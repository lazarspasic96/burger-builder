import * as actionTypes from '../actions/actionTypes'
const initialState = {
    orders: [],
    loading: false,
    purchased: false,
}
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.PURCHASE_BURGER_SUCCES:
            return {
                ...state,
                loading: false,
                orders: state.orders.concat(action.orderData),
                purchased: action.purchased

            }
        case actionTypes.PURCHASE_BURGER_FAIL:
            return {
                ...state,
                loading: action.loading
            }
        case actionTypes.PURCHASE_BURGER_START:
            return {
                ...state,
                loading: action.loading
            }
        default:
            return state;

}
}

export default reducer;