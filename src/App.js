import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/Burger-Builder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'
import { Route, Switch, Redirect } from 'react-router-dom'
import Orders from './containers/Orders/Orders'
import Auth from './containers/Auth/Auth'
import Logout from './containers/Auth/Logout';
import { connect } from 'react-redux'
import * as actions from './store/index'
import { withRouter } from 'react-router-dom'
import reducer from './store/reducers/order';

class App extends React.Component {

  componentDidMount = () => {
    this.props.authStatusCheck()
  }


  render() {

    let routes = (
      <Switch>
        <Route exact path='/' component={BurgerBuilder} />
        <Route path='/auth' component={Auth} />
        <Redirect to='/' />
      </Switch>
    )

    if (this.props.token) {
      routes = <Switch>
        <Route exact path='/' component={BurgerBuilder} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/my-orders' component={Orders} />
        <Route path='/logout' component={Logout} />

      </Switch>
    }



    
    return <Layout>
      {routes}
    </Layout>

  }
}










const mapStateToProps = state => {
  return {
    token: state.auth.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authStatusCheck: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
