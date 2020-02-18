import React from 'react'
import Button from '../../UI/Button/Button'




const OrderSummary = (props) => {
    const IngridientSummary = Object.keys(props.ingredients)
    .map(igKey => {
    return <li key = {igKey}><span style = {{textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}</li>
    })

    return <>
    <h1>Your Order</h1>
    
    <p>A delicious burger with the following ingredients:</p>
    {IngridientSummary}
    <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
    <p>Continue to Checkout?</p>
    <Button btnType = 'Danger' clicked = {props.cancel}>Cancel</Button>
    <Button btnType = 'Success' clicked = {props.continue}>Continue</Button>
    </>
}

export default OrderSummary;

