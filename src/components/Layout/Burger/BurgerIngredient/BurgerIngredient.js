import React from 'react';
import clasess from './BurgerIngredient.module.css';
import PropTypes from 'prop-types';
import BurgerBuilder from '../../../../containers/Burger-Builder/BurgerBuilder';

class BurgerIngredient extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {  
        let ingredient = null;
            switch (this.props.type) {
        case ('bread-bottom'):
            ingredient = <div className={clasess.BreadBottom}></div>;
            break;
        case ('bread-top'):
            ingredient = <div className={clasess.BreadTop}>
                <div className={clasess.Seeds1}></div>
                <div className={clasess.Seeds2}></div>
            </div>;
            break;

            case ("meat"):
                ingredient = <div className={clasess.Meat}></div>;
                break;
            case ("sald"):
                ingredient = <div className={clasess.Sald}></div>;
                break;
            case ("bacon"):
                ingredient = <div className={clasess.Bacon}></div>;
                break;
            case ("cheese"):
                ingredient = <div className={clasess.Chesee}></div>;
                break;

            default:
                ingredient = null;
            break;
    }

        return ingredient;

    };


}

/* BurgerIngredient.PropTypes = {
        type: PropTypes.string.isRequired
    } */

export default BurgerIngredient;