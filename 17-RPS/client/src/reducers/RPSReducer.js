
import { types } from '../types/types';

const initialState = {

    gamer1: {
        name: localStorage.getItem('gamer') || '',
        g1Points: parseInt(localStorage.getItem('g1Points')) || 0
    },
    gamer2: {
        name: 'Computador',
        g2Points: parseInt(localStorage.getItem('g2Points')) || 0
    },
    Cards:
        [
            { id: 1, label: 'rock', selected: false },
            { id: 2, label: 'paper', selected: false },
            { id: 3, label: 'scissor', selected: false }
        ],
    Cards2:
        [
            { id: 1, label: 'rock', selected: false },
            { id: 2, label: 'paper', selected: false },
            { id: 3, label: 'scissor', selected: false }
        ],
    Combs: [
        { player: 'rock', cpu: 'rock', condition: 'tie' },
        { player: 'rock', cpu: 'paper', condition: 'lose' },
        { player: 'rock', cpu: 'scissor', condition: 'win' },
        { player: 'paper', cpu: 'rock', condition: 'win' },
        { player: 'paper', cpu: 'paper', condition: 'tie' },
        { player: 'paper', cpu: 'scissor', condition: 'lose' },
        { player: 'scissor', cpu: 'rock', condition: 'lose' },
        { player: 'scissor', cpu: 'paper', condition: 'win' },
        { player: 'scissor', cpu: 'scissor', condition: 'tie' }
    ],
    Rounds: JSON.parse(localStorage.getItem('rounds')) || [],
    RpsShowStart: true,
    Winners: [],
    loading: false
};

export const RPSReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.showStart:
            return {
                ...state,
                RpsShowStart: true
            }

        case types.showHome:
            return {
                ...state,
                RpsShowStart: false
            }

        case types.setUpdateGamer1:
            return {
                ...state,
                gamer1: action.payload
            }

        case types.updateRounds:
            return {
                ...state,
                Rounds: action.payload

            }
        case types.winnerAddNew:
            return {
                ...state,
                Winners: [
                    ...state.Winners,
                    action.payload
                ]
            }
        case types.winnersLoaded:
            return {
                ...state,
                Winners: [...action.payload]
            }
        case types.loading:
            return {
                ...state,
                loading: action.payload
            }

        default:
            return state;
    }
}