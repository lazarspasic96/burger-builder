import React from 'react'


const OrderSummary = (props) => {
    let IngridientSummary = Object.keys(props.ingredients)
    .map(igKey => {
    <li><span>{igKey}</span>: {props.ingredients[igKey]}</li>
    });
    return <>
    <ul>{IngridientSummary}</ul>
    

    </>
}

export default OrderSummary;

