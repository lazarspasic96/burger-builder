import React from 'react'
import Logo from '../Toolbar/Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.module.css'
import Backdrop from '../../BackDrop/Backdrop'


const SideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    props.open ? attachedClasses = [classes.SideDrawer, classes.Open] : attachedClasses = [classes.SideDrawer, classes.Close];



    return <>

        
 <Backdrop  show = {props.open} clicked = {props.closed} />
    <div className= {attachedClasses.join(' ')}> 
       
        <Logo height='11%' marginBottom='32px'/>
        <nav >
            <NavigationItems token = {props.token} /> 
        </nav>
       
    </div>

     
    </>
}


export default SideDrawer