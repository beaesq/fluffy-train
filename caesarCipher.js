function caesarCipher(string, shiftFactor) {
    if (typeof string != 'string' || typeof shiftFactor != 'number') return undefined;

    let arr = stringToArray(string);
    arr = shiftArray(arr, shiftFactor);
    return arrayToString(arr);
}

function stringToArray(string) {
    let arr = [];
    for (let index = 0; index < string.length; index++) {
        arr.push(string.charCodeAt(index));
    }
    return arr;
}

function shiftArray(arr, shiftFactor) {
    let shiftedArr = []
    for (let index = 0; index < arr.length; index++) {
        shiftedArr.push(shiftChar(arr[index], shiftFactor));
    }
    return shiftedArr;
}

function arrayToString(arr) {
    let string = '';
    for (let index = 0; index < arr.length; index++) {
        string += String.fromCharCode(arr[index]);
    }
    return string;
}

function shiftChar(code, shiftFactor) {
    if (code < 65 || (code > 90 && code < 97) || code > 122) return code;

    if (code >= 65 && code <= 90) {
        code = ((code - 65) + shiftFactor) % 26 + 65;
    } else if (code >= 97 && code <= 122) {
        code = ((code - 97) + shiftFactor) % 26 + 97;
    }
    return code;
}

export { caesarCipher, shiftChar };