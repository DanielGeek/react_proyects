import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Testing in <FirstApp />', () => {

    test('must match the snapshot ', () => {

        const title = "Hello, I'm Goku";
        const { container } = render( <FirstApp title={ title } /> );
        expect( container ).toMatchSnapshot();
    });

    test('must show the title in h1 ', () => {

        const title = "Hello, I'm Goku";
        const { container, getByText } = render( <FirstApp title={ title } /> );
        expect( getByText(title) ).toBeTruthy();

        const h1 = container.querySelector('h1');
        expect( h1.innerHTML ).toContain( title );
    });

});