import React from 'react'
import Button from '../../../components/UI/Button/Button'
import instance from '../../../services/HttpServices'
import WithErrorHandler from '../../../HOC/withErrorHandler/WithErrorHandler'
import Input from '../../../components/UI/Input/Input'
import classes from './ContactData.module.css'
class ContactData extends React.Component {
    state = {
        loading: false,
        name: '',
        email: '',
        address: {
            street: '',
            zipcode: ''
        }
    }

    orderHandler = () => {
       
                   this.setState({loading: true})
     
                 let order = {
                     ingredients: this.props.ingredients,
                     price: this.props.price
                 }
               instance.post('/orders.json', order)
               .then(res =>  this.setState({loading: false}))
               .catch(error => {
                 console.log(error);
                 this.setState({loading: false});
               });

               this.props.history.push('/')
              
    }

 

    render () {
        console.log(this.props.ingredients)
        return <div className = {classes.ContactData}>
            <h4>Enter your ContactData</h4>
            <form>
                <Input inputtype = 'input' type='text' name='name' placeholder = 'Your Name' />
                <Input inputtype = 'input' type='text' name='name' placeholder = 'Your Name' />
                <Input inputtype = 'input' type='text' name='name' placeholder = 'Your Name' />
                <Input inputtype = 'input' type='text' name='name' placeholder = 'Your Name' />
            </form>

            <Button btnType='Success' clicked = {this.orderHandler}>ORDER</Button>
        </div>
    }
}

export default WithErrorHandler (ContactData, instance)