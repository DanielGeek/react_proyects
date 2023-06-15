import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Testing in <FirstApp />', () => {

    const title = "Hello, I'm Goku";
    const subTitle = "I'm a subTitle";

    test('Must match snapshot', () => {
        
        const { container } = render( <FirstApp title={ title } /> );
        expect( container ).toMatchSnapshot();

    });

    test("Must show the message 'Hello, I'm Goku' ", () => {

        render( <FirstApp title={ title } /> );
        expect( screen.getByText(title) ).toBeTruthy();
        // screen.debug();

    });

    test('Must show title in h1', () => {
        render( <FirstApp title={ title } /> );
        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain( title );
    });

    test('Must show subTitle sent in props', () => {

        render(
            <FirstApp
                title={ title }
                subTitle={ subTitle }
            />
        );

        expect( screen.getAllByText(subTitle).length ).toBe(2);

    });

});