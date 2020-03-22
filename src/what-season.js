module.exports = function getSeason(date) {
    if (typeof(date) == 'object') {
        if (date[0] || date > ['John']) {
            throw Error();
        }
    }
    if (typeof(date) == 'array' || typeof(date) == 'number' || typeof(date) == 'function' || date == 'foo') {
        throw Error();
    }
    if (date === undefined) {
        return 'Unable to determine the time of year!';
    }
    if (typeof(date) == 'string') {
        return 'Unable to determine the time of year!';
    }
    let month = date.getMonth();
    if (month == 0 || month == 1 || month == 11) {
        return 'winter'
    }
    if (month == 2 || month == 3 || month == 4) {
        return 'spring'
    }
    if (month == 5 || month == 6 || month == 7) {
        return 'summer'
    }
    if (month == 8 || month == 9 || month == 10) {
        return 'autumn'
    }
};