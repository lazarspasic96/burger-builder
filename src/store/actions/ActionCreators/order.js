import * as actionTypes from '../actionTypes'
import instance from '../../../services/HttpServices'
 const purchaseBurgerSucces = ( orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCES,
        orderData: orderData,
       
    }
}

 const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    }
}

export const purchaseBurger = (orderData, token) => {
    console.log(token)
    return dispatch => {
        dispatch(purchaseBurgerStart())
        instance.post('/orders.json?auth=' + token, orderData)
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

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START

}
}

export const fetchOrdersFail = () => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL
    }
}
export const fetchOrdersSucces = (fetchedOrders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCES,
        fetchedOrders
    }
}

export const fetchOrders = (token) => {
    console.log(token)
    return dispatch => {
        dispatch(fetchOrdersStart())
        instance.get('/orders.json?auth=' + token)
        .then(res => {
            const fetchedOrders = [];
            for (let key in res.data) {
                console.log(key)
                fetchedOrders.push({
                    ...res.data[key],
                    id: key
                });
            }
            dispatch(fetchOrdersSucces(fetchedOrders))
        })
        .catch(err => {
            dispatch(fetchOrdersFail())
        });
    }
}