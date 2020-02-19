import React from 'react'
import classes from './Modal.module.css';
import Backdrop from '../BackDrop/Backdrop'



const Modal = (props) => {
    return <>
    <Backdrop show = {props.show} clicked = {props.clicked} />
    <div className = {classes.Modal} 
    style = {{ transform: props.show ? 'translateY(150px)' : 'trasnalteY(-100vh)', 
    opacity: props.show ? '1' : '0' }}
    >{props.children}</div>
    </>
}

export default Modal;