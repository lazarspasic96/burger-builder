import React from 'react'
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './Auth.module.css';
import {connect} from 'react-redux'
import * as actions from '../../store/index'
import Spinner from '../../components/UI/Spinner/Spinner';
import { Redirect } from 'react-router-dom';


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
            },
            isSignUp: true
        }
        
    }

    chechValidity =(value, inputIdentifier) => {
        let isValid = true;

       
  
          if(inputIdentifier === 'password') {
              isValid = value.length >= 6 && isValid
          }
  
          if(inputIdentifier === 'email') {
              isValid = value.includes('@') && isValid
          }
  
    
          return isValid
  
    }

    inputHandler = (event, inputIdentifier) => {
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

    submitHandler = (event) => {
        event.preventDefault()

        this.props.onAuth(this.state.auth.email.value, this.state.auth.password.value, this.state.isSignUp)

       
    }

    switchHandler = () => {
     
        this.setState(prevState => {
            return {
                isSignUp: !prevState.isSignUp
            }
        })
    }

    componentDidMount () {
        if(this.props.isAuth && this.props.redirectPath !== '/') {
            this.props.setPath('/')
        }
    }


    render() {
    


       const updatedAuthForm = [];
        for(let key in this.state.auth) {
            updatedAuthForm.push({
                id: key,
                config: this.state.auth[key]
            })

        }

         let form = updatedAuthForm.map(formElement => {
          
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

        if(this.props.loading) {
            console.log('uso je u loading')
             return form = <Spinner />
        }

        let errorMessage = null
        if(this.props.error) {
        errorMessage = <p>{this.props.error.message}</p>
        }
        let authRedirect = null

        if (this.props.isAuth ) {

            authRedirect = <Redirect to = {this.props.redirectPath} />
        }

        


        return <div className = {classes.AuthData}>
            {authRedirect}
            {errorMessage}
            <form onSubmit = {this.submitHandler}>
                      {form}
            <Button btnType = 'Success'>Submit</Button>
          
            </form>
            <Button btnType = 'Danger' clicked = {this.switchHandler}>SWITCH TO {this.state.isSignUp ? 'SIGN IN' : 'SIGN UP'}</Button>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuth: state.auth.token,
        redirectPath: state.auth.redirectPath,
    }
}

const mapDispatchToProps = dispatch => {
  
    return {
        onAuth: (email, password, isSignUp) => dispatch(actions.auth(email, password, isSignUp)),
        setPath: () => dispatch(actions.setAuthRedirectPath('/'))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
