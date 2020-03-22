module.exports = function countCats(array) {
    let cats = [];
    for (let i = 0; i < array.length; i++) {
        let arrayNew = array[i];
        for (let j = 0; j < arrayNew.length; j++) {
            cats.push(arrayNew[j]);
        }
    }
    let onlyStrings = cats.filter(e => typeof e === 'string' && e !== '');
    var filterCats = onlyStrings.filter(e => e === '^^');
    return filterCats.length
};