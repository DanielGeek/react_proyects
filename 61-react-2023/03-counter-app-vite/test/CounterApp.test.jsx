import { render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Testing in <CounterApp />', () => {

    const initialValue = 100;

    test('Must match snapshot', () => {
        
        const { container } = render( <CounterApp value={initialValue} /> );
        expect( container ).toMatchSnapshot();

    });

    test("Must show the initial value 100 ", () => {

        render( <CounterApp value={initialValue} /> );
        expect( screen.getByText(100) ).toBeTruthy();

    });

});