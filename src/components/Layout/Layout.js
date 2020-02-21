import React from 'react'
import clasess from './Layout.module.css'
import Toolbar from '../UI/Navigation/Toolbar/Toolbar';
import SideDrawer from '../UI/Navigation/SideDrawer/SideDrawer';

const Layout = (props) => {
   return <>
   <Toolbar />
   <SideDrawer />
   <main className={clasess.Content}>
        {props.children}
   </main>
       
       </>
}

export default Layout;


