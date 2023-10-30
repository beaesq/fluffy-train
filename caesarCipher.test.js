import { caesarCipher, shiftChar } from './caesarCipher.js';

describe('caesarCipher()', () => {
    test('returns the input unchanged when shift factor is 0', () => {
        expect(caesarCipher('stanloona', 0)).toBe('stanloona');
    });
    
    test('shifts string', () => {
        expect(caesarCipher('stanloona', 6)).toBe('yzgtruutg');
    });
    
    test('retains spaces and special characters', () => {
        expect(caesarCipher('stan loona!', 5)).toBe('xyfs qttsf!');
    });
    
    test('wraps around from z to a', () => {
        expect(caesarCipher('oddeyecircle', 22)).toBe('kzzauayenyha');
    });
    
    test('returns undefined when input is not a string', () => {
        expect(caesarCipher(11, 10)).toBeUndefined();
    });
    
    test('returns undefined when shift factor is not a number', () => {
        expect(caesarCipher('stanloona', 'yes!')).toBeUndefined();
    });
});

describe('shiftChar()', () => {
    test('returns non-alphabet character codes unchanged', () => {
        expect(shiftChar(64, 2)).toBe(64);
        expect(shiftChar(91, 9)).toBe(91);
        expect(shiftChar(96, 6)).toBe(96);
        expect(shiftChar(123, 111)).toBe(123);
    });

    test('shifts uppercase character codes correctly (no wrapping)', () => {
        expect(shiftChar(65, 2)).toBe(67);
        expect(shiftChar(65, 25)).toBe(90);
    });

    test('shifts uppercase character codes correctly (with wrapping)', () => {
        expect(shiftChar(90, 25)).toBe(89);
        expect(shiftChar(83, 26)).toBe(83);
    });

    test('shifts lowercase character codes correctly (no wrapping)', () => {
        expect(shiftChar(97, 4)).toBe(101);
        expect(shiftChar(97, 25)).toBe(122);
    });

    test('shifts lowercase character codes correctly (with wrapping)', () => {
        expect(shiftChar(122, 25)).toBe(121);
        expect(shiftChar(111, 26)).toBe(111);
    });

});
