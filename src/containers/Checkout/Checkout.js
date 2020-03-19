import React from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary'

class Checkout extends React.Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0

        }
    }

    cancelCheckout = () => {
        this.props.history.goBack()

    }

    continueCheckout = () => {
        this.props.history.replace('/contact-data')
    }

    componentDidMount () {
        const query = new URLSearchParams(this.props.location.search)
        let ingredients = {}
        for (let param of query.entries()) {
            ingredients[param[0]] = ingredients[param[1]]
        }

        this.setState({ingredients: ingredients})
 
    }

    render () {
        return <div>
            <CheckoutSummary ingredients = {this.state.ingredients} 
            cancelCheckout = {this.cancelCheckout}
            continueCheckout = {this.continueCheckout} />
        </div>

    }
}

export default Checkout