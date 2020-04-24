import React from 'react'
import Button from '../../../components/UI/Button/Button'
import instance from '../../../services/HttpServices'
import WithErrorHandler from '../../../HOC/withErrorHandler/WithErrorHandler'
import Input from '../../../components/UI/Input/Input'
import classes from './ContactData.module.css'
import {connect} from 'react-redux'
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
       
                   this.setState({loading: true})
     
                 let order = {
                     ingredients: this.props.ins,
                     price: this.props.prc,
                     name: this.state.name,
                     email: this.state.email

                 }
               instance.post('/orders.json', order)
               .then(res =>  this.setState({loading: false}))
               .catch(error => {
                 console.log(error);
                 this.setState({loading: false});
               });

               this.props.history.push('/')
              
    }

    inputHandler = (e) => {
     
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }

 

    render () {
        console.log(this.props.ingredients)
        return <div className = {classes.ContactData}>
            <h4>Enter your ContactData</h4>
            <form>
                <Input inputtype = 'input' onChange = {this.inputHandler} type='text' name='name' placeholder = 'Your Name'  />
                <Input inputtype = 'input' onChange = {this.inputHandler} type='text' name='email' placeholder = 'Your Email' />
                <Input inputtype = 'input' onChange = {this.inputHandler} type='text' name='street' placeholder = 'Street' />
                <Input inputtype = 'input' onChange = {this.inputHandler} type='text' name='postal' placeholder = 'Postal Code' />
                <Input inputtype = 'input' onChange = {this.inputHandler} type='text' name='country' placeholder = 'Country' />
            </form>

            <Button btnType='Success' clicked = {this.orderHandler}>ORDER</Button>
        </div>
    }
}
const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        prc: state.totalPrice
    }
}
export default connect(mapStateToProps)(WithErrorHandler (ContactData, instance))