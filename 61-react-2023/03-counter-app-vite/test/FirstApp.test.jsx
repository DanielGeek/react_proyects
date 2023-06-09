import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Testing in <FirstApp />', () => {

    test('must match the snapshot ', () => {

        const title = "Hello, I'm Gokue";
        render( <FirstApp title={ title } /> );

    });

});