import { types } from '../../types/types';

describe('Pruebas en Types', () => {
    
    test('los types deben de ser iguales', () => {
        expect( types ).toEqual({
            showStart: '[RPS] Show screen start game',
            showHome: '[RPS] Show home game',
            
            setUpdateGamer1: '[RPS] Update the gamer 1',
            
            updateRounds: '[RPS] Update the rounds',
            
            winnerAddNew: '[RPS] Create winner',
            winnersLoaded: 'RPS Winners loaded',

            loading: '[RPS] Loading data',
        });
    })
    
})
