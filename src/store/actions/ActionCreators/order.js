import * as actionTypes from '../actionTypes'
import instance from '../../../services/HttpServices'
 const purchaseBurgerSucces = ( orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCES,
        orderData: orderData,
        purchased: true
    }
}

 const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    }
}

export const purchaseBurger = (orderData) => {
    return dispatch => {
        dispatch(purchaseBurgerStart())
        instance.post('https://react-burger-bf3f8.firebaseio.com/orders.json', orderData)
        .then(res => dispatch(purchaseBurgerSucces(res.data)))
           .catch(error => {
          dispatch(purchaseBurgerFail(error))
           });
    }
}

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START,
        loading: true
    }
}