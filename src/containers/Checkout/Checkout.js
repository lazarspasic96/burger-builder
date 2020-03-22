import React from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary'
import { Route } from 'react-router-dom'
import ContactData from './ContactData/ContactData'


class Checkout extends React.Component {
  
        initState = () => {
            const queryInit = new URLSearchParams(
              this.props.location.search
            );
            const ingredientsInit = {};
            let priceInit = 0;
            for (let param of queryInit.entries()) {
              if (param[0] === 'price') {
                priceInit = param[1];
              } else {
                ingredientsInit[param[0]] = +param[1];
              }
            }
            return {
              ingredients: ingredientsInit,
              totalPrice: priceInit
            };
          };

          state = this.initState();
    





    cancelCheckout = () => {
        this.props.history.goBack()

    }

    continueCheckout = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    render() {

        
        return <> 
       <div>
            <CheckoutSummary ingredients={this.state.ingredients}
                cancelCheckout={this.cancelCheckout}
                continueCheckout={this.continueCheckout} />
        </div> 
       <Route path = {this.props.match.url + '/contact-data'}
       render = {(props) => <ContactData {...props} price = {this.totalPrice} ingredients={this.ingredients} />}/>

        


        </>
    }
}

export default Checkout