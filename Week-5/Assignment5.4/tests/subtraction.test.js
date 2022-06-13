import {mathOperations} from "../math-calculations";

describe("Subtraction tests", () => {
    test("Testing diff of 2 numbers", () => {
        expect(mathOperations.diff(10,31)).toEqual(21);
    });

    test("Testing diff of 2 numbers", () => {
        expect(mathOperations.diff(90,77)).toEqual(13);
    });

    test("Testing diff of -ve numbers", () => {
        expect(mathOperations.diff(-10,-31)).toEqual(21);
    });
});