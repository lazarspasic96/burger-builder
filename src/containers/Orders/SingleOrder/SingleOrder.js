import React from 'react'
import classes from './SingleOrder.module.css';

const SingleOrder = (props) => {
    return <div className={classes.Order}>
        <p>Ingredients: Sala (1)</p>
        <p>Price: <strong>UDF 5.45</strong></p>
    </div>
}

export default SingleOrder;