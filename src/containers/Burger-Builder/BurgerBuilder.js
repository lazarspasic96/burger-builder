import React, { Fragment } from 'react'
import Burger from '../../components/Layout/Burger/Burger'


class BurgerBuilder extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {}
    }
 

    render () {
        return (
            <>
            <Burger/>
            Build Controls
            </>
        )
    }
}

export default BurgerBuilder