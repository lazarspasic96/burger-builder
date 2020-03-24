import React from 'react'
import classes from './Input.module.css';


const Input = (props) => {
    let inputElement = null;
    switch (props.inputtype) {
        case ('input'):
            inputElement = <input  onChange = {props.onChange} className = {classes.InputElement} {...props} />
            break;
        case ('textarea'):
        inputElement = <textarea  onChange = {props.changed}className = {classes.InputElement} {...props} />
        case ('select'):
        inputElement = <select onChange = {props.changed}>{props.children}</select>
        default:
            inputElement = <input  onChange = {props.changed}className = {classes.InputElement} {...props} />
    }


    return <div className = {classes.Input}>
        <label className = {classes.Label}>{props.label}</label>
        {inputElement}
    </div>


}

  




export default Input;
    
