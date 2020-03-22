const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    let sampleActivityParse = parseFloat(sampleActivity);
    if (sampleActivityParse > MODERN_ACTIVITY ||
        sampleActivityParse <= 0 || (typeof sampleActivity != "string") || !isFinite(sampleActivityParse)) return false;
    return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityParse) / (0.693 / HALF_LIFE_PERIOD));
};