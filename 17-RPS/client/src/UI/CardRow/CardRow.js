import React from 'react'

import classes from './CardRow.module.css'

const cardRow = props => (
    <div className={classes.CardRow}>
        {props.children}
    </div>
)

export default cardRow