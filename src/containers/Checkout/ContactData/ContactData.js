import React from 'react'
import Button from '../../../components/UI/Button/Button'
import instance from '../../../services/HttpServices'

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
        console.log(this.props.ingredients)
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
        return <div>
            <h4>Enter your ContactData</h4>
            <form>
                <input type='text' name='name' placeholder = 'Your Name' />
                <input type='text' name='name' placeholder = 'Your Name' />
                <input type='text' name='name' placeholder = 'Your Name' />
                <input type='text' name='name' placeholder = 'Your Name' />
            </form>

            <Button btnType='Success' clicked = {this.orderHandler}>ORDER</Button>
        </div>
    }
}

export default ContactData