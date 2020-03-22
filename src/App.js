import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/Burger-Builder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path='/' component={BurgerBuilder} />
          <Route  path='/checkout' component={Checkout} />
        </Switch>
      </Layout>

    </div>
  );
}

export default App;
