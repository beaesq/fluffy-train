import { calculator } from './calculator.js';

test('adds two numbers', () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test('subtracts two numbers', () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
});

test('multiplies two numbers', () => {
    expect(calculator.multiply(1, 2)).toBe(2);
});

test('divides two numbers', () => {
    expect(calculator.divide(1, 2)).toBe(0.5);
});

test('add() returns undefined when parameters are not numbers', () => {
    expect(calculator.add(true, 2)).toBeUndefined();
    expect(calculator.add(1, '2')).toBeUndefined();
    expect(calculator.add(null, null)).toBeUndefined();
});

test('subtract() returns undefined when parameters are not numbers', () => {
    expect(calculator.subtract(true, 2)).toBeUndefined();
    expect(calculator.subtract(1, '2')).toBeUndefined();
    expect(calculator.subtract(null, null)).toBeUndefined();
});

test('multiply() returns undefined when parameters are not numbers', () => {
    expect(calculator.multiply(true, 2)).toBeUndefined();
    expect(calculator.multiply(1, '2')).toBeUndefined();
    expect(calculator.multiply(null, null)).toBeUndefined();
});

test('divide() returns undefined when parameters are not numbers', () => {
    expect(calculator.divide(true, 2)).toBeUndefined();
    expect(calculator.divide(1, '2')).toBeUndefined();
    expect(calculator.divide(null, null)).toBeUndefined();
});