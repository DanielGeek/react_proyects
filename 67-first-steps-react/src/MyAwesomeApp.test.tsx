import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";

import { MyAwesomeApp } from "./MyAwesomeApp";

describe('MyAwesomeApp', () => {
    test('should render fristName and lastName', () => {
        render(<MyAwesomeApp />);
        // console.log(container.innerHTML);

        screen.debug();
    });
});
