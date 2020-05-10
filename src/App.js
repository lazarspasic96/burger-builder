import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/Burger-Builder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'
import { Route, Switch } from 'react-router-dom'
import Orders from './containers/Orders/Orders'
import Auth from './containers/Auth/Auth'

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path='/' component={BurgerBuilder} />
          <Route  path='/checkout' component={Checkout} />
          <Route  path='/auth' component={Auth} />
          <Route path='/my-orders' component={Orders} />
        
        </Switch>
      </Layout>

    </div>
  );
}

export default App;
