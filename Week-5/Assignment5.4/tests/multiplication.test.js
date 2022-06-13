import {mathOperations} from "../math-calculations";

describe("Multiplication tests", () => {
    test("Testing diff of 2 numbers", () => {
        expect(mathOperations.product(-1,-1)).toEqual(1);
    });

    test("Testing diff of 2 numbers", () => {
        expect(mathOperations.product(20,10)).toEqual(200);
    });

    test("Testing diff of 2 numbers", () => {
        expect(mathOperations.product(7,-2)).toEqual(-14);
    });
});