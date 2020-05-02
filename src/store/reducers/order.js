import * as actionTypes from '../actions/actionTypes'
const initialState = {
    orders: [],
    loading: false,
    fetchedOrders: []
}
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.PURCHASE_BURGER_SUCCES:
            return {
                ...state,
                loading: false,
                orders: state.orders.concat(action.orderData),
    

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
        case actionTypes.FETCH_ORDERS_SUCCES:
            return {
                ...state,
                fetchedOrders: action.fetchedOrders,
                loading: false
            }
        case actionTypes.FETCH_ORDERS_START:
            return{
                ...state,
                loading: true
            }
        case actionTypes.FETCH_ORDERS_FAIL:
            return{
                ...state,
                loading: false
            }
        
        default:
            return state;

}
}

export default reducer;