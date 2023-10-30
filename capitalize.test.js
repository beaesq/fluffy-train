import { capitalize } from './capitalize.js'; 

test('capitalizes only the first letter of a string', () => {
    expect(capitalize('loona')).toBe('Loona');
});

test('returns undefined if parameter is not a string', () => {
    expect(capitalize(null)).toBeUndefined();
    expect(capitalize(false)).toBeUndefined();
    expect(capitalize(1)).toBeUndefined();
});