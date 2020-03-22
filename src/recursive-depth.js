module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (!(arr instanceof Array)) {
            return 0;
        }
        let countDepth = 0;
        for (let item of arr) {
            let depth = this.calculateDepth(item);
            if (countDepth < depth) {
                countDepth = depth;
            }
        }
        return countDepth + 1;
    }
};