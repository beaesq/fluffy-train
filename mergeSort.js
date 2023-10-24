function mergeSort(arr) {

    // console.log(`arr: ${arr}`);

    if (arr.length <= 1) {
        return arr;
    } else {
        let i = Math.floor(arr.length / 2);
        let leftArr = mergeSort(arr.slice(0, i));
        let rightArr = mergeSort(arr.slice(i, arr.length));
        // console.log(`LEFT: ${leftArr} RIGHT: ${rightArr}`);

        let sortedArr = [];
        while(leftArr.length > 0 && rightArr.length > 0) {
            // console.log('sorting');
            if (leftArr[0] <= rightArr[0]) {
                sortedArr.push(leftArr.shift());
            } else {
                sortedArr.push(rightArr.shift());
            }
        }
        // console.log(`LEFT: ${leftArr} RIGHT: ${rightArr}`);
        if (leftArr.length > 0) {
            // console.log('append L');
            sortedArr = sortedArr.concat(leftArr);
        } else if (rightArr.length > 0) {
            // console.log('append R');
            sortedArr = sortedArr.concat(rightArr);
        }
        // console.log(`SORTED ${sortedArr}`);
        return sortedArr;
    }
}
console.log('hi');
console.log(`result: ${mergeSort([3,8,2,6,1,4,5,7])}`);
console.log(mergeSort([3,7,2,6,1,4,5]));
console.log(mergeSort([1]));
console.log(mergeSort([]));
console.log(mergeSort([3,2,1]));