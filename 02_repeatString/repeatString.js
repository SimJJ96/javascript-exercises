const repeatString = function(string, numberToRepeat) {
    if (numberToRepeat === -1) {
        return 'ERROR';
    } else {
        let repeatedString = '';
        for (let i=0; i < numberToRepeat; i++) {
            repeatedString += string;
        }
        return repeatedString;
    }

};

// Do not edit below this line
module.exports = repeatString;
