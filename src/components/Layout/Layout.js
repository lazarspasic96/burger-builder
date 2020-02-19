import React from 'react'
import clasess from './Layout.module.css'
import Toolbar from '../UI/Navigation/Toolbar/Toolbar';

const Layout = (props) => {
   return <>
   <Toolbar />
   <main className={clasess.Content}>
        {props.children}
   </main>
       
       </>
}

export default Layout;


