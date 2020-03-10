import React from 'react'
import clasess from './Layout.module.css'
import Toolbar from '../UI/Navigation/Toolbar/Toolbar';
import SideDrawer from '../UI/Navigation/SideDrawer/SideDrawer';


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
   <Toolbar toggleButton = {this.showSideDrawerHandler} />
   <SideDrawer open={this.state.showSideDrawer} closed = {this.cancelBackdropHandler}/>
   <main className={clasess.Content}>
        {this.props.children}
   </main>
       
       </>
}
     }


export default Layout;


