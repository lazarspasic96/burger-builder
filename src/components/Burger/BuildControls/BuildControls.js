import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
]

const BuildControls = (props) => {
    return <div className = {classes.BuildControls}>
         <p>Total price: {props.price.toFixed(2)}</p>
        {controls.map(control => {
            return <BuildControl 
            key = {control.label} 
            label= {control.label}
            added ={ () => props.updatedIngredients(control.type)}
            remove = {() => props.removeIngredientHandler(control.type)}
            disabled = {props.disabled[control.type]}/>
        })}
        <button className = {classes.OrderButton} disabled = {props.orderDisabled}>ORDER NOW</button>


    </div>
}

export default BuildControls