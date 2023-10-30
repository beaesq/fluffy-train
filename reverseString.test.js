import { reverseString } from './reverseString.js';

test('reverses the string', () => {
    expect(reverseString('stanLOONA')).toBe('ANOOLnats');
});

test('returns undefined if parameter is not a string', () => {
    expect(reverseString(null)).toBeUndefined();
    expect(reverseString(false)).toBeUndefined();
    expect(reverseString(1)).toBeUndefined();
});