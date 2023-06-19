import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Testing in <CounterApp />', () => {

    const initialValue = 10;

    test('Must match snapshot', () => {
        
        const { container } = render( <CounterApp value={initialValue} /> );
        expect( container ).toMatchSnapshot();

    });

    test("Must show the initial value 100 ", () => {

        render( <CounterApp value={100} /> );
        expect( screen.getByText(100) ).toBeTruthy();

    });

    test('Must increase with the button +1', () => {
        
        render( <CounterApp value={ initialValue } /> );
        fireEvent.click( screen.getByText('+1') );
        expect( screen.getByText('11') ).toBeTruthy();

    });
    
    test('Must decrease with the button -1', () => {
        
        render( <CounterApp value={ initialValue } /> );
        fireEvent.click( screen.getByText('-1') );
        // screen.debug();
        expect( screen.getByText('9') ).toBeTruthy();

    });
    
    test('Must work the reset button', () => {
        
        render( <CounterApp value={ 355 } /> );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        // fireEvent.click( screen.getByText('Reset') );
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

        expect( screen.getByText( 355 ) ).toBeTruthy();

    });



});