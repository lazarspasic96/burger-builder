import React from 'react'
import classes from './Toolbar.module.css'
import Logo from "./Logo/Logo";
import NavigationItems from '../NavigationItems/NavigationItems';
import HamburgerIcon from '../../HamburgerIcon/HamburgerIcon';

const Toolbar = (props) => {
    return <header className = {classes.Toolbar}>
       <HamburgerIcon clicked = {props.toggleButton} />
        <Logo height='80%'/>
        <nav className={classes.DesktopOnly}>
            <NavigationItems/>
            </nav>
        
    </header>
}


export default Toolbar;