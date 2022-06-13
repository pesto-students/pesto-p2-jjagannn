import {mathOperations} from "../math-calculations";

describe("Addition tests", () => {
    test("Testing addition", () => {
        expect(mathOperations.sum(2,2)).toBe(4);
    });

    test("Testing addition of 1 number", () => {
        expect(mathOperations.sum(11)).toBe(11);
    });

    test("Testing addition of negative numbers", () => {
        expect(mathOperations.sum(-9,-23)).toBe(-32);
    });

    test("Testing addition of +ve and -ve numbers", () => {
        expect(mathOperations.sum(-7,50)).toBe(43);
    });

    test("Testing addition of 1 number", () => {
        expect(mathOperations.sum(0.1,0.2)).toBeCloseTo(0.3);
    });

    test("Testing addition of no arguments", () => {
        expect(mathOperations.sum()).toBeFalsy();
    });
});