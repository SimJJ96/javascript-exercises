const sumAll = function(startValue, endValue) {
    if (startValue < 0 || endValue < 0 || typeof(startValue) !== "number" || typeof(endValue) !== "number") {
        return 'ERROR';
    }

    if (endValue < startValue) {
        temp = startValue;
        startValue = endValue;
        endValue = temp;
    }

    let sum = 0;
    for (let i = startValue; i <= endValue; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
