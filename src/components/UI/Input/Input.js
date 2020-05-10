import React from 'react'
import classes from './Input.module.css';






const Input = (props) => {
    const inputClasses = [classes.Input];

   
    if(props.isValid && props.shoudBeValidate && props.touched) {
        inputClasses.push(classes.Invalid)



    }


    let inputElement = null;
    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <input
            className={inputClasses.join(' ')} 
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
    
            break;
        case ( 'textarea' ):
            inputElement = <textarea
                 className={inputClasses.join(' ')} 
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'select' ):
            inputElement = (
                <select
                    className={inputClasses.join(' ')} 
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
            case ( 'password' ):
                inputElement = (
                    inputElement = <input
                    className={inputClasses.join(' ')} 
                        {...props.elementConfig}
                        value={props.value}
                        onChange={props.changed} />
                );
                break;
        default:
            inputElement = <input
            className={inputClasses.join(' ')} 
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }
 let vadlidationError = null;
    if(props.isValid && props.shoudBeValidate && props.touched) {
         vadlidationError = `Please input a valid ${props.valueType}`;

    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
    <span className = {classes.Error}>{vadlidationError}</span>
        </div>
    );


}

  




export default Input;
    