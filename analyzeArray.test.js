import { analyzeArray } from "./analyzeArray.js";

let array = [];

describe('array with unique values', () => {
    beforeAll(() => {
        array = [90,11,33,1,2,52];
    });

    test('returns correct average', () => {
        expect(analyzeArray(array)).toHaveProperty('average', 31.5);
    });

    test('returns correct min', () => {
        expect(analyzeArray(array)).toHaveProperty('min', 1);
    });

    test('returns correct max', () => {
        expect(analyzeArray(array)).toHaveProperty('max', 90);
    });

    test('returns correct length', () => {
        expect(analyzeArray(array)).toHaveProperty('length', 6);
    });
});

describe('array with duplicate min & max values', () => {
    beforeAll(() => {
        array = [41,255,-11,-11,0,-4,255];;
    });

    test('returns correct average', () => {
        expect(analyzeArray(array)).toHaveProperty('average', 75);
    });

    test('returns correct min', () => {
        expect(analyzeArray(array)).toHaveProperty('min', -11);
    });

    test('returns correct max', () => {
        expect(analyzeArray(array)).toHaveProperty('max', 255);
    });

    test('returns correct length', () => {
        expect(analyzeArray(array)).toHaveProperty('length', 7);
    });
});

describe('array with one value', () => {
    beforeAll(() => {
        array = [42];
    });

    test('returns correct average', () => {
        expect(analyzeArray(array)).toHaveProperty('average', 42);
    });

    test('returns correct min', () => {
        expect(analyzeArray(array)).toHaveProperty('min', 42);
    });

    test('returns correct max', () => {
        expect(analyzeArray(array)).toHaveProperty('max', 42);
    });

    test('returns correct length', () => {
        expect(analyzeArray(array)).toHaveProperty('length', 1);
    });
});

describe('empty array', () => {
    beforeAll(() => {
        array = [];
    });

    test('average is null', () => {
        expect(analyzeArray(array)).toHaveProperty('average', null);
    });

    test('min is null', () => {
        expect(analyzeArray(array)).toHaveProperty('min', null);
    });

    test('max is null', () => {
        expect(analyzeArray(array)).toHaveProperty('max', null);
    });

    test('returns correct length', () => {
        expect(analyzeArray(array)).toHaveProperty('length', 0);
    });
});