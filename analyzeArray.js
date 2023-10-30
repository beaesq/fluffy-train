function analyzeArray(arr) {

    function getAverage(arr) {
        if (arr.length == 0) return null;
        
        let sum = 0;
        let count = 0;
        for (let index = 0; index < arr.length; index++) {
            sum += arr[index];
            count++;
        }

        return sum / count;
    }

    function getMin(arr) {
        if (arr.length == 0) return null;

        let min = arr[0];
        for (let index = 1; index < arr.length; index++) {
            if(arr[index] < min) min = arr[index];
        }
        return min;
    }

    function getMax(arr) {
        if (arr.length == 0) return null;

        let max = arr[0];
        for (let index = 1; index < arr.length; index++) {
            if(arr[index] > max) max = arr[index];
        }
        return max;
    }

    let obj = {
        average: getAverage(arr),
        min: getMin(arr),
        max: getMax(arr),
        length: arr.length
    }
    return obj;
}

export { analyzeArray };