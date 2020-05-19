import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/Burger-Builder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'
import { Route, Switch } from 'react-router-dom'
import Orders from './containers/Orders/Orders'
import Auth from './containers/Auth/Auth'
import Logout from './containers/Auth/Logout';
import {connect} from 'react-redux'
import * as actions from './store/index'
import {withRouter} from 'react-router-dom'

class App extends React.Component {

  componentDidMount = () => {
    this.props.authStatusCheck()
  }


  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route exact path='/' component={BurgerBuilder} />
            <Route  path='/checkout' component={Checkout} />
            <Route  path='/auth' component={Auth} />
            <Route path='/my-orders' component={Orders} />
            <Route path='/logout' component={Logout} />
          
          </Switch>
        </Layout>
  
      </div>
    );
  }

}

const mapDispatchToProps = dispatch => {
  return {
    authStatusCheck: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
