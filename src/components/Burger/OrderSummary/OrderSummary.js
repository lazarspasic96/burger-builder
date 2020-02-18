import React from 'react'



const OrderSummary = (props) => {
    const IngridientSummary = Object.keys(props.ingredients)
    .map(igKey => {
    return <li key = {igKey}><span style = {{textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}</li>
    })

    return <>
    <h1>Your Order</h1>
    
    <p>A delicious burger with the following ingredients:</p>
    {IngridientSummary}

    <p>Continue to Checkout?</p>
    <button>CANCEL</button>
    <button>CHECKOUT</button>

    

    </>
}

export default OrderSummary;

