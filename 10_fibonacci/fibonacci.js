const fibonacci = function(n) {

    n = Number(n);
    // Recursive Method
    // if (n < 0) {
    //     return 'OOPS';
    // } else if (n === 0) {
    //     return 0;
    // } else if (n === 1) {
    //     return 1;
    // }
    
    // return fibonacci(n-1) + fibonacci(n-2);

    // Iterative Method
    if (n < 0) {
        return 'OOPS';
    }

    let a = 0;
    let b = 1;

    for (let i = 1; i < n; i++) {
        let temp = a;
        a = b;
        b = temp + a; 
    }
    
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
