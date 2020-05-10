import React from 'react'
import Button from '../../../components/UI/Button/Button'
import instance from '../../../services/HttpServices'
import WithErrorHandler from '../../../HOC/withErrorHandler/WithErrorHandler'
import Input from '../../../components/UI/Input/Input'
import classes from './ContactData.module.css'
import { connect } from 'react-redux'
import * as actions from '../../../store/index'
import Spinner from '../../../components/UI/Spinner/Spinner'


class ContactData extends React.Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'cheapest', displayValue: 'Cheapest' }
                    ]
                },
                value: 'fastest',
                valid: true
                
              
            }
        },
        formIsValid: false,
        loading: false
    }
    orderHandler = (event) => {
        event.preventDefault()


        let order = {
            ingredients: this.props.ings,
            price: this.props.prc,
            name: this.state.orderForm.name.value,
            email: this.state.orderForm.email.value,
            street: this.state.orderForm.street.value,
            zipCode: this.state.orderForm.zipCode.value,
            country: this.state.orderForm.country.value,
            deliveryMethod: this.state.orderForm.deliveryMethod.value
        }

        console.log(this.props.ingredients)

        this.props.onOrderBurger(order)
        this.props.history.push('/')

    }

    checkValidity = (value, inputIdentifier) => {
           let isValid = true;

      console.log(inputIdentifier)

        if(inputIdentifier === 'name') {
            isValid = value.length >= 5 && isValid
        }

        if(inputIdentifier === 'email') {
            isValid = value.includes('@') && isValid
        }

        if (inputIdentifier ===  'zipCode') {
            isValid = !isNaN(value) && isValid
        }






        return isValid

    }

    inputHandler = (event, inputIdentifier) => {

        const updatedForm = {
            ...this.state.orderForm
        }
        const updatedFormElement = {
            ...updatedForm[inputIdentifier]
        }
        updatedFormElement.value = event.target.value

        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, inputIdentifier ) 
        updatedFormElement.touched = true;
        updatedForm[inputIdentifier] = updatedFormElement

        let formIsValid = true

        for(let key in updatedForm) {
            formIsValid = updatedForm[key].valid && formIsValid

        }
        this.setState({ orderForm: updatedForm, formIsValid: formIsValid})
    }


    render() {

        const formElementArray = [];

        for (let key in this.state.orderForm) {
            formElementArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }

        let form = (<form onSubmit={this.orderHandler}>

            {formElementArray.map(formElement => {
            
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
            })}
            <Button disabled = {!this.state.formIsValid}btnType='Success' clicked={this.orderHandler} >ORDER</Button>
        </form>)

        if (this.props.loading) {
            form = <Spinner />
        }
        return <div className={classes.ContactData}>
            <h4>Enter your ContactData</h4>
            {form}


        </div>
    }
}
const mapStateToProps = state => {
    return {
        prc: state.burger.totalPrice,
        loading: state.order.loading,
        ings: state.burger.ingredients
    }
}

const mapDispatchToprops = dispatch => {
    return {
        onOrderBurger: (orderData, redirect) => dispatch(actions.purchaseBurger(orderData, redirect))
    }
}
export default connect(mapStateToProps, mapDispatchToprops)(WithErrorHandler(ContactData, instance))