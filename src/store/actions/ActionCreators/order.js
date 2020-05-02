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

export const fetchOrders = () => {
    return dispatch => {
        dispatch(fetchOrdersStart())
        instance.get('https://react-burger-bf3f8.firebaseio.com/orders.json')
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