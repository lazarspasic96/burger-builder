import React from 'react'
import clasess from 'BurgerIngredient.module.css'

const burgerIngredient = (props) => {
    let ingredient = null;

    switch (props.type) {
        case 'bread-bottom':
            ingredient = <div className={clasess.BreadBottom}></div>;
            break;
        case 'bread-top':
            ingredient = <div className={clasess.BreadTop}>
                <div className={clasess.Seeds1}></div>
                <div className={clasess.Seeds2}></div>
            </div>;
            break;

            case "meat":
                ingredient = <div className={clasess.Meat}></div>
                break;
            case "sald":
                ingredient = <div className={clasess.Sald}></div>
                break;
            case "bacon":
                ingredient = <div className={clasess.Bacon}></div>
                break;
            case "cheese":
                ingredient = <div className={clasess.Chesee}></div>
                break;


   
    
        default:
            break;
    }





}

export default burgerIngredient;