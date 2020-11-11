import React from 'react'

import classes from './Button.module.css'


const button = props =>
    <button id={props.id} className={classes.Button} disabled={props.disabled} onClick={props.clicked}>{props.children}</button>

export default button