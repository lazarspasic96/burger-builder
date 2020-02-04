import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import clasess from './Burger.module.css'

const Burger = (props) => {
    let tranformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
           return <BurgerIngredient key = {igKey + i} type = {igKey}/>
        });
    }).reduce((arr, el) => {
        console.log(el)
        return arr.concat(el)
    },[]);
    console.log(tranformedIngredients);
    if(tranformedIngredients.length === 0) {
        tranformedIngredients = <p>Please start adding ingredients!</p>
    } 
    return (
        
        <div className={clasess.Burger}>
            <BurgerIngredient type={'bread-top'}/>
                {tranformedIngredients}
            <BurgerIngredient type={'bread-bottom'}/>
        </div>
        

    )
}


export default Burger