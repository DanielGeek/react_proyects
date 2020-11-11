import React from 'react'

import classes from './Computer.module.css'

import CardRow from '../../UI/CardRow/CardRow'
import CardItem from '../../UI/CardItem/CardItem'

import ic_rock from '../../images/ic_rock.png'
import ic_paper from '../../images/ic_paper.png'
import ic_scissor from '../../images/ic_scissor.png'

const computerCards = props => (
    <div className={classes.computerChoose}>
        <CardRow>
            <CardItem selected={props.cards ? props.cards[0].selected : false}>
                <img src={ic_rock} alt='Rock' className="img-fluid" />
            </CardItem>
            <CardItem selected={props.cards ? props.cards[1].selected : false}>
                <img src={ic_paper} alt='Paper' className="img-fluid" />
            </CardItem>
            <CardItem selected={props.cards ? props.cards[2].selected : false}>
                <img src={ic_scissor} alt='Scissor' className="img-fluid" />
            </CardItem>
        </CardRow>                    
    </div>
)

export default computerCards