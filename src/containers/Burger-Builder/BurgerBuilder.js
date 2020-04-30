import React, { Fragment } from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import instance from '../../services/HttpServices'
import Spinner from '../../components/UI/Spinner/Spinner'
import WithErrorHandler from '../../HOC/withErrorHandler/WithErrorHandler'
import { connect } from 'react-redux'
import * as burgerBuilderActions  from '../../store/index'
import { initIngredients } from '../../store/actions/ActionCreators/burgerBuilder'

class BurgerBuilder extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            purchasing: false,
         
        }
    }

    /*     addIngredientHandler = (type) => {
            const oldCount = this.props.ingredients[type]
            const updatedCount = oldCount + 1;
            const updatedIngredients = {
                ...this.props.ings
            }
            updatedIngredients[type] = updatedCount
            const priceAdition = ingredientPrices[type]
            const newPrice = priceAdition + this.state.totalPrice
            this.setState({
                ingredients: updatedIngredients,
                totalPrice: newPrice
            })
            this.updatePurchaseState(updatedIngredients);
    
    
        } */
    /* 
        removeIngredidddentHandler = (type) => {
    
            const oldCount = this.props.ings[type]
            const updatedCount = oldCount - 1;
            const updatedIngredients = {
                ...this.props.ings
            }
            updatedIngredients[type] = updatedCount
            const priceDeduction = ingredientPrices[type]
            const newPrice = this.state.totalPrice - priceDeduction
            this.setState({
                ingredients: updatedIngredients,
                totalPrice: newPrice
            })
            this.updatePurchaseState(updatedIngredients);
    
        } */
    updatePurchaseState = (ing) => {
        const sumInngredients = {
            ...ing
        }
        const sum = Object.keys(sumInngredients)
            .map(igKey => {
                return sumInngredients[igKey]
            })
            .reduce((acc, curentval) => {
                return acc + curentval

            }, 0)
        return sum > 0
    }
    purchaseHandler = () => {
        this.setState({ purchasing: true })
    }

    cancelBackdropHandler = () => {
        this.setState({ purchasing: false })
    }

    purchaseContinueHandler = () => {

        /*         const queryParams = []
        
                for (let i in this.props.ings) {
                    queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.props.ings[i]))
                }
        
                queryParams.push('price' + '=' + encodeURIComponent(this.props.prc))
        
                const queryString = queryParams.join('&')
                console.log(queryParams)
        
                this.props.history.push({
                    pathname: '/checkout',
                    search: '?' + queryString
        
                }) 
        
         */ 
        this.props.history.push('/checkout')

    }

    componentDidMount () {
        this.props.initIngredients()
    }


    render() {

        if (this.props.ings === null) {
            return this.props.error ? <p>Something is wrong. Please try again later!</p> : <Spinner />
        }


        const disabledInfo = {
            ...this.props.ings
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = <OrderSummary ingredients={this.props.ings}
            cancel={this.cancelBackdropHandler}
            continue={this.purchaseContinueHandler}
            price={this.props.prc} />

   /*      if (this.state.loading) {
            orderSummary = <Spinner />;
        } */
        return (
            <>
                {this.state.purchasing
                    ? <Modal show={this.state.purchasing} clicked={this.cancelBackdropHandler}>
                        {orderSummary}
                    </Modal>
                    : null}
                <Burger ingredients={this.props.ings} />
                <BuildControls updatedIngredients={this.props.onAddedIngredient}
                    removeIngredientHandler={this.props.onRemoveIngredient}
                    disabled={disabledInfo}
                    price={this.props.prc}
                    orderDisabled={!this.updatePurchaseState(this.props.ings)}
                    ordered={this.purchaseHandler} />
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burger.ingredients,
        prc: state.burger.totalPrice,
        error: state.burger.error
    }
}

const mapDispatcToProps = dispatch => {
    return {
        onAddedIngredient: (ingName) => dispatch(burgerBuilderActions.addIngredient(ingName)),
        onRemoveIngredient: (ingName) => dispatch(burgerBuilderActions.removeIngredient(ingName)),
        initIngredients: () => dispatch(burgerBuilderActions.initIngredients()),
        
    }
}

export default connect(mapStateToProps, mapDispatcToProps)(WithErrorHandler(BurgerBuilder, instance))