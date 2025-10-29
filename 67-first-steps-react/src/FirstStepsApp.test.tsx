import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import { FirstStepsApp } from "./FirstStepsApp";

describe('FirstStepsApp', () => {
    test('should match snapshot', () => {
        const { container } = render(<FirstStepsApp />);

        expect(container).toMatchSnapshot();
    });
});
