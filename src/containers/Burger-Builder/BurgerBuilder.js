import React, { Fragment } from 'react'
import Burger from '../../components/Layout/Burger/Burger'


class BurgerBuilder extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0
            }
        }
    }
      

    render () {
        return (
            <>
            <Burger ingredients = {this.state.ingredients}/>
            Build Controls
            </>
        )
    }
}

export default BurgerBuilder