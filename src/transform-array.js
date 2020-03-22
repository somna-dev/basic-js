module.exports = function transform(arr) {
    if (!(arr instanceof Array)) throw new Error();
    if (arr.length == 0) return arr;
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '--double-next') {
            if (arr.length - 1 > i) {
                newArray.push(arr[i + 1]);
            }
        } else if (arr[i] === '--double-prev') {
            if (i > 0) {
                newArray.push(arr[i - 1]);
            }
        } else if (arr[i] === '--discard-prev') {
            if (i > 0) {
                newArray.pop();
            }
        } else if (arr[i] === '--discard-next') {
            if (arr.length - 1 > i) {
                i++;
            }
        } else {
            newArray.push(arr[i]);
        }
    }
    return newArray;
};