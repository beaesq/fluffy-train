function reverseString(string) {
    if (typeof string != 'string') return undefined;

    let newString = '';
    for (let index = string.length; index > 0; index--) {
        newString += string.slice(index - 1, index);
    }
    return newString;
}

export { reverseString };