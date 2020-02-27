import React from 'react'
import Logo from '../Toolbar/Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.module.css'
import Backdrop from '../../BackDrop/Backdrop'


const SideDrawer = (props) => {

    return <>
    <Backdrop  show />
    <div className={classes.SideDrawer}>
        <Logo height='11%' marginBottom='32px'/>
        <nav>
            <NavigationItems /> 
        </nav>
       
    </div>
    </>
}


export default SideDrawer