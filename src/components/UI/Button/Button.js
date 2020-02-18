import React from 'react'
import classes from '*.module.css';


const Button = (props) => {
    return <button onClick = {props.click} className = {[classes.Button, classes[props.btnType]].join(' ')}>{props.children}</button>
}

export default Button;


