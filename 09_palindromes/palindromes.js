const palindromes = function (string) {
    let cleanString = string.replace(/\W/g, "").toLowerCase();
    console.log(cleanString);
    let front = 0;
    let end = cleanString.length-1;
    while (front < end) {
        if (cleanString.charAt(front) !== cleanString.charAt(end)) {
            return false;
        }
        front++;
        end--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
