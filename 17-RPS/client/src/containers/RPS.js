import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showHome, setUpdateGamer1, showStart, updateRounds, winnerStartAddNew } from '../actions/RPS';

import { changeValueButton, getRandomNumber } from '../helpers/utils'

import CardRow from '../UI/CardRow/CardRow'
import CardItem from '../UI/CardItem/CardItem'
import Button from '../UI/Button/Button'

import ComputerCards from '../components/Computer/Computer'

import ic_rock from '../images/ic_rock.png'
import ic_paper from '../images/ic_paper.png'
import ic_scissor from '../images/ic_scissor.png'
import TableScore from '../components/TableScore/TableScore'
import Swal from 'sweetalert2'
import { Start } from '../components/Start/Start'

export const RPS = () => {


    // poder acceder al state del store y modificarlo
    const dispatch = useDispatch();
    // controla el estado para mostrar la pantalla de inicio
    const { RpsShowStart } = useSelector(state => state.RPS)

    const initialGamer1 = {
        name: localStorage.getItem('gamer') || '',
        g1Points: parseInt(localStorage.getItem('g1Points')) || 0
    }

    const initialGamer2 = {
        name: 'Computador',
        g2Points: parseInt(localStorage.getItem('g2Points')) || 0
    }
    const initialCards =
        [
            { id: 1, label: 'rock', selected: false },
            { id: 2, label: 'paper', selected: false },
            { id: 3, label: 'scissor', selected: false }
        ]

    const initialCards2 =
        [
            { id: 1, label: 'rock', selected: false },
            { id: 2, label: 'paper', selected: false },
            { id: 3, label: 'scissor', selected: false }
        ]

    const initialRounds = [

    ]

    const [gamer1, setGamer1] = useState(initialGamer1);
    const [gamer2, setGamer2] = useState(initialGamer2);
    const [cardsG1, setCardsG1] = useState(initialCards);
    const [cardsG2, setCardsG2] = useState(initialCards2);
    const [loading, setLoading] = useState(false);
    const [finished, setFinished] = useState(null);
    const [rounds, setRounds] = useState(JSON.parse(localStorage.getItem('rounds')) || initialRounds);

    const { name } = useSelector(state => state.RPS.gamer1)

    const saveRoundsLocalStorage = (rounds) => {
        localStorage.setItem('rounds', JSON.stringify(rounds));
    }

    useEffect(() => {

        if (name) {
            dispatch(showHome());
        } else {
            setRounds([]);
            saveRoundsLocalStorage([]);
            dispatch(showStart());
        }

    }, [dispatch, name])


    const selectedCardHandler = (label) => {
        const updatedCardsElements = [...cardsG1]
        const findIndex = updatedCardsElements.findIndex(v => v.label === label)
        updatedCardsElements[findIndex].selected = !updatedCardsElements[findIndex].selected

        letComputerPlay()

        setCardsG1(updatedCardsElements)
    }

    const letComputerPlay = () => {
        setLoading(true)
        setTimeout(() => {
            const updatedComputerOptions = [...cardsG2]
            const num = getRandomNumber(0, updatedComputerOptions.length)

            updatedComputerOptions[num].selected = !updatedComputerOptions[num].selected

            finishTheGame()
            setLoading(false);
            setCardsG2(updatedComputerOptions)
            return;
        }, 1000)
    }
    const { Combs } = useSelector(state => state.RPS);
    const finishTheGame = () => {

        // obtener todas las combinaciones
        const combinations = [...Combs]

        // encontrar en el state actual de cards el elemento seleccionado por el usuario 1

        const playerSelected = cardsG1.find(v => v.selected === true)

        // encontrar en el state actual de computerCards el elemento seleccionado por el usuario 1

        const cpuSelected = cardsG2.find(v => v.selected === true)

        // encontrar en el state de combs la cambinacion que coincida con las seleccionada por ambos jugadores
        const combi = combinations.find(v => v.player === playerSelected.label && v.cpu === cpuSelected.label)

        // verificar cual condicion se cumple para actualizazr el state score con el ganador o empeta 
        let condition = ''
        if (combi.condition === 'tie') {
            condition = 'Tie'
            setRounds([
                ...rounds,
                {
                    gamer: condition,
                    condition,
                    points: 0
                }
            ])
            dispatch(updateRounds([
                ...rounds,
                {
                    gamer: condition,
                    condition,
                    points: 0
                }
            ]));
        }
        if (combi.condition === 'win') {

            condition = 'You Win'

            setGamer1({
                ...gamer1,
                g1Points: gamer1.g1Points += 1

            })

            dispatch(setUpdateGamer1(gamer1));

            localStorage.removeItem('g1Points');
            localStorage.setItem('g1Points', gamer1.g1Points);

            setRounds([
                ...rounds,
                {
                    gamer: gamer1.name,
                    condition,
                    points: gamer1.g1Points
                }
            ])

            dispatch(updateRounds([
                ...rounds,
                {
                    gamer: gamer1.name,
                    condition,
                    points: gamer1.g1Points
                }
            ]));
        }
        if (combi.condition === 'lose') {

            condition = 'You Lose'

            setGamer2({
                ...gamer2,
                g2Points: gamer2.g2Points += 1
            })

            setRounds([
                ...rounds,
                {

                    gamer: gamer2.name,
                    condition,
                    points: gamer2.g2Points
                }

            ])

            dispatch(updateRounds([
                ...rounds,
                {

                    gamer: gamer2.name,
                    condition,
                    points: gamer2.g2Points
                }
            ]));
            localStorage.removeItem('g2Points');
            localStorage.setItem('g2Points', gamer2.g2Points);
        }

        let msgWinnerStart = 'We have a Winner!!! ';
        let msgWinnerEnd = ' is the new EMPEROR!'
        setFinished(condition)
        checkG1Points(msgWinnerStart, msgWinnerEnd);
        checkG2Points(msgWinnerStart, msgWinnerEnd);

    }

    if (rounds.length) {
        saveRoundsLocalStorage(rounds);
    }

    const checkG1Points = (msgWinnerStart, msgWinnerEnd) => {
        if (gamer1.g1Points === 3) {
            Swal.fire(msgWinnerStart, '<strong>' + name + '</strong>' + msgWinnerEnd, 'success');
            changeValueButton('reset', 'Play Again');
            localStorage.clear();
            // guardar en la bd al ganador las Rounds
            dispatch(winnerStartAddNew(gamer1));


        }
    }

    const checkG2Points = (msgWinnerStart, msgWinnerEnd) => {
        if (gamer2.g2Points === 3) {
            Swal.fire(msgWinnerStart, '<strong>' + gamer2.name + '</strong>' + msgWinnerEnd, 'success');
            changeValueButton('reset', 'Play Again');
            localStorage.clear();
            // guardar en la bd al ganador las Rounds
            dispatch(winnerStartAddNew(gamer2));
        }
    }

    const resetGameHandler = () => {

        if (gamer1.g1Points === 3 || gamer2.g2Points === 3) {
            setRounds([]);
            dispatch(updateRounds([]));
            setGamer1(initialGamer1);
            dispatch(setUpdateGamer1(initialGamer1));
            setGamer2(initialGamer2);

            dispatch(showStart());
            localStorage.clear();

        }

        // asigno false a todas las tarjetas del usuario 1
        cardsG1.forEach((v, i) => {
            cardsG1[i].selected = false

        })
        // asigno false a todas las tarjetas del usuario 2
        cardsG2.forEach((v, i) => {
            cardsG2[i].selected = false
        })

        setCardsG1(
            initialCards
        )

        setCardsG2(
            initialCards2
        )
        setFinished(null);

    }

    let hasSelectedOption = cardsG1[0].selected || cardsG1[1].selected || cardsG1[2].selected
    let hasSelectedComputerOption = cardsG2[0].selected || cardsG2[1].selected || cardsG2[2].selected

    return (
        <div className="container">
            <div className="row">
                {
                    RpsShowStart
                        ?
                        <Start
                            gamer1={gamer1}
                            setGamer1={setGamer1}
                        />

                        :
                        (
                            <Fragment>
                                <div className="col-md-6">
                                <h2 style={{ textAlign: 'center' }}>Choose an option</h2>
                                    <CardRow>
                                        <CardItem
                                            selected={cardsG1[0].selected}
                                            cardAction={<Button disabled={hasSelectedOption} clicked={() => selectedCardHandler('rock')}>Rock</Button>}>
                                            <img src={ic_rock} alt='Rock' title='Choose the rock' className="img-fluid" />
                                        </CardItem>
                                        <CardItem
                                            selected={cardsG1[1].selected}
                                            cardAction={<Button disabled={hasSelectedOption} clicked={() => selectedCardHandler('paper')}>Paper</Button>}>
                                            <img src={ic_paper} alt='Paper' title='Choose the paper' className="img-fluid" />
                                        </CardItem>
                                        <CardItem
                                            selected={cardsG1[2].selected}
                                            cardAction={<Button disabled={hasSelectedOption} clicked={() => selectedCardHandler('scissor')}>Scissor</Button>}>
                                            <img src={ic_scissor} alt='Scissor' title='Choose the scissor' className="img-fluid" />
                                        </CardItem>
                                    </CardRow>

                                    {loading ? <h3 style={{ textAlign: 'center' }}>thinking...</h3> : null}
                                    {hasSelectedComputerOption ? <ComputerCards cards={cardsG2} /> : null}
                                    {
                                        finished
                                            ?
                                            (
                                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                                    <h1 style={{ textAlign: 'center', marginTop: '50px' }}>{finished}</h1>
                                                    <Button id={'reset'} clicked={resetGameHandler}>Reset</Button>
                                                </div>
                                            )
                                            : null
                                    }
                                </div>
                                <div className="col-md-6">
                                    {

                                        rounds.length ?
                                            <TableScore rounds={rounds} />

                                            :
                                            null
                                    }
                                </div>
                            </Fragment>
                        )
                }

            </div>
        </div >
    )

}