import React from 'react'
import SingleOrder from './SingleOrder/SingleOrder';
import Spinner from '../../components/UI/Spinner/Spinner'
import instance from '../../services/HttpServices'
import WithErrorHandler from '../../HOC/withErrorHandler/WithErrorHandler'

class Orders extends React.Component {
    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        instance.get('/orders.json')
            .then(res => {
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({loading: false, orders: fetchedOrders});
            })
            .catch(err => {
                this.setState({loading: false});
            });
    }

    render () {

        if(this.state.orders === []) {
            return <Spinner />
        }
        return (
            <div>
                {this.state.orders.map(order => (
                    <SingleOrder 
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price} />
                ))}
            </div>
        );
    }
}

export default WithErrorHandler(Orders, instance);