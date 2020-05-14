import React from 'react'
import clasess from './Layout.module.css'
import Toolbar from '../UI/Navigation/Toolbar/Toolbar';
import SideDrawer from '../UI/Navigation/SideDrawer/SideDrawer';
import {connect} from  'react-redux'


class Layout extends React.Component {
     constructor(props) {
          super(props) 
          this.state = {
               showSideDrawer: false
          }
     }

     cancelBackdropHandler = () => {
          this.setState({showSideDrawer: false})

     }

   /*   showSideDrawerHandler = () => {
          this.setState((prevState) =>{
               return {showSideDrawer: !prevState.showSideDrawer}})
     }
 */

 showSideDrawerHandler = () => {
      this.setState({showSideDrawer: true})
 }


     render () {
             return <>
   <Toolbar  token = {this.props.token} toggleButton = {this.showSideDrawerHandler} />
   <SideDrawer token = {this.props.token} open={this.state.showSideDrawer} closed = {this.cancelBackdropHandler}/>
   <main className={clasess.Content}>
        {this.props.children}
   </main>
       
       </>
}
     }

     const mapStateToProps = state => {
          return {
               token: state.auth.token
          }
     }

export default connect(mapStateToProps)(Layout);


