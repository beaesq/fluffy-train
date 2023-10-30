function capitalize(string = null) {
    if (typeof string != 'string') return undefined;
    
    string = string.slice(0, 1).toUpperCase() + string.slice(1, string.length);
    return string;
}

export { capitalize };