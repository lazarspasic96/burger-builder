import React from 'react'
import SingleOrder from './SingleOrder/SingleOrder';
import Spinner from '../../components/UI/Spinner/Spinner'
import instance from '../../services/HttpServices'
import WithErrorHandler from '../../HOC/withErrorHandler/WithErrorHandler'
import { connect } from 'react-redux'
import * as action from '../../store/index'

class Orders extends React.Component {
    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        this.props.fetchedOrders()
    }

    render() {

        if (this.props.orders === []) {
            return <Spinner />
        }

        let orders = <Spinner />

        if (this.props.loading) {
            orders = <Spinner />
        }
        else {
            orders = 
                this.props.orders.map(order => (
                    <SingleOrder
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price} />
                ))
           
        }
        return (
            <div>
                {orders}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.fetchedOrders,
        loading: state.order.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchedOrders: () => dispatch(action.fetchOrders())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler(Orders, instance));