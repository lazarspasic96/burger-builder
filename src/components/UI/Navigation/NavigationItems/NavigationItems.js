import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'


const NavigationItems = (props) => {
    return <ul className={classes.NavigationItems}>
        <NavigationItem exact link='/' active={classes.active}>Burger Builder</NavigationItem>
        {
            props.token
                ? <NavigationItem exact link='/my-orders' active={classes.active}>Orders</NavigationItem>
                : null
        }

        {props.token
            ? <NavigationItem exact link='/logout' active={classes.active}>Logout</NavigationItem>
            : <NavigationItem exact link='/auth' active={classes.active}>Authentication</NavigationItem>}


    </ul>
}

export default NavigationItems