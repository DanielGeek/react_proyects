import React from 'react'

import classes from './CardItem.module.css'


const cardItem = props => {
    let customClasses = [classes.CardItem]
    let overlayClasses = [classes.cardOverlay]
    if (props.selected) {
        customClasses.push(classes.CardSelected)
        overlayClasses.push(classes.activeOverlay)
    }

    return (
        <div className={classes.cardOption}>
            <div className={overlayClasses.join(' ')} style={{ visibility: props.selected ? 'visible' : 'hidden' }}></div>
            <div className={customClasses.join(' ')}>
                {props.children}
            </div>
            {props.cardAction}
        </div>
    )
}

export default cardItem