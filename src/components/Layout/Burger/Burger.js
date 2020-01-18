import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import clasess from './Burger.module.css'

const Burger = (props) => {
    return (
        <div className={clasess.Burger}>
            <BurgerIngredient type={'bread-bottom'}/>
            <BurgerIngredient type={'meat'}/>
            <BurgerIngredient type={'meat'}/>
            <BurgerIngredient type={'meat'}/>
            <BurgerIngredient type={'meat'}/>
            <BurgerIngredient type={'meat'}/>
            <BurgerIngredient type={'meat'}/>
            <BurgerIngredient type={'meat'}/>
            <BurgerIngredient type={'meat'}/>
            <BurgerIngredient type={'meat'}/>
            <BurgerIngredient type={'meat'}/>
        </div>

    )
}


export default Burger