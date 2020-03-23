import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'


const NavigationItems = () => {
   return <ul className = {classes.NavigationItems}>
        <NavigationItem exact link ='/' active = {classes.active}>Burger Builder</NavigationItem>
        <NavigationItem exact link = '/my-orders' active= {classes.active}>Orders</NavigationItem>

    </ul>
}

export default NavigationItems