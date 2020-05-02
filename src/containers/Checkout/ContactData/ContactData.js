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
        loading: false,

        name: '',
        street: '',
        zipCode: '',
        country: '',
        email: '',
        deliveryMethod: 'fastest'
    }

    orderHandler = () => {


        let order = {
            ingredients: this.props.ings,
            price: this.props.prc,
            name: this.state.name,
            email: this.state.email
        }

        console.log(this.props.ingredients)
  
        this.props.onOrderBurger(order)
        this.props.history.push('/')
     
    }

    inputHandler = (e) => {

        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }
    render() {

    
        let form = <form>
            <Input inputtype='input' onChange={this.inputHandler} type='text' name='name' placeholder='Your Name' />
            <Input inputtype='input' onChange={this.inputHandler} type='text' name='email' placeholder='Your Email' />
            <Input inputtype='input' onChange={this.inputHandler} type='text' name='street' placeholder='Street' />
            <Input inputtype='input' onChange={this.inputHandler} type='text' name='postal' placeholder='Postal Code' />
            <Input inputtype='input' onChange={this.inputHandler} type='text' name='country' placeholder='Country' />
        </form>

        if (this.props.loading) {
            form = <Spinner />
        }
        return <div className={classes.ContactData}>
            <h4>Enter your ContactData</h4>
                {form}
            <Button btnType='Success' clicked={this.orderHandler}>ORDER</Button>
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