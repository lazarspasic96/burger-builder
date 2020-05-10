import React from 'react'
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './Auth.module.css';


class Auth extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            auth: {
                email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        placeholder: 'Email adress'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false,

                },
                    password: {
                        elementType: 'input',
                        elementConfig: {
                            type: 'password',
                            placeholder: 'Your password'
                        },
                        value: '',
                        validation: {
                            required: true
                        },
                        valid: false,
                        touched: false
                    
                }
            }
        }
        
    }

    chechValidity(value, inputIdentifier) {
        let isValid = true;

        console.log(inputIdentifier)
  
          if(inputIdentifier === 'password') {
              isValid = value.length >= 6 && isValid
          }
  
          if(inputIdentifier === 'email') {
              isValid = value.includes('@') && isValid
          }
  
    
          return isValid
  
    }

    inputHandler(event, inputIdentifier) {
        const updatedAuth = {
            ...this.state.auth,
            [inputIdentifier]: {
                ...this.state.auth[inputIdentifier],
                value: event.target.value,
                valid: this.chechValidity(event.target.value, inputIdentifier),
                touched: true
            }
        }

        this.setState({auth: updatedAuth})
    }

    render() {
       const updatedAuthForm = [];
        for(let key in this.state.auth) {
            updatedAuthForm.push({
                id: key,
                config: this.state.auth[key]
            })

        }

        const form = updatedAuthForm.map(formElement => {
            console.log(updatedAuthForm)
            return <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            changed={(event) => this.inputHandler(event, formElement.id)}
            elementConfig={formElement.config.elementConfig}
            isValid =  {!formElement.config.valid}
            shoudBeValidate = {formElement.config.validation}
            touched = {formElement.config.touched}
            valueType = {formElement.id}
            value={formElement.config.value}
            
            />
        })

        return <div className = {classes.AuthData}>
            <form onSubmit = {this.submitHandler}>
                      {form}
            <Button btnType = 'Success'>Submit</Button>
            </form>
      
        
        </div>
    }
}

export default Auth;
