import React, { Fragment } from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'

const ingredientPrices = {
    salad: 0.4,
    bacon: 0.6,
    cheese: 0.5,
    meat: 1
}
class BurgerBuilder extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice: 4,
            purchasable: false
        }
    }
           addIngredientHandler = (type) => {
            const oldCount = this.state.ingredients[type]
            const updatedCount = oldCount + 1;
            const updatedIngredients = {
                ...this.state.ingredients
            }
            updatedIngredients[type] = updatedCount
            const priceAdition = ingredientPrices[type]
            const newPrice = priceAdition + this.state.totalPrice
            this.setState({
                ingredients: updatedIngredients,
                totalPrice: newPrice
            })
            this.updatePurchaseState(updatedIngredients);
       
          
        }

        removeIngredientHandler = (type) => {
        
            const oldCount = this.state.ingredients[type]
            const updatedCount = oldCount - 1;
            const updatedIngredients = {
                ...this.state.ingredients
            }
            updatedIngredients[type] = updatedCount
            const priceDeduction = ingredientPrices[type]
            const newPrice = this.state.totalPrice - priceDeduction
            this.setState({
                ingredients: updatedIngredients,
                totalPrice: newPrice
            })
            this.updatePurchaseState(updatedIngredients);
            

        }

        updatePurchaseState = (ing) => {
            const sumInngredients = {
                ...ing
            }
           const sum =  Object.keys(sumInngredients)
           .map(igKey => {
               return sumInngredients[igKey]
           })
           .reduce((acc, curentval) => {
               return acc + curentval

           }, 0)

           this.setState({purchasable: sum > 0})

           console.log(sum)
       
        }

    render () {
       
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo) {
                disabledInfo[key] =   disabledInfo[key] <= 0   
            }
      
        return (
            <>
            <Modal />
            <Burger ingredients = {this.state.ingredients}/>
            <BuildControls updatedIngredients= {this.addIngredientHandler}
            removeIngredientHandler = {this.removeIngredientHandler} 
            disabled = {disabledInfo}
            price = {this.state.totalPrice}
            orderDisabled = {!this.state.purchasable}/>
              </>
        )
    }
}

export default BurgerBuilder