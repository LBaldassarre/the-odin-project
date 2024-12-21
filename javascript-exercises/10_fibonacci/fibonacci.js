const fibonacci = function(x) {
    let intX = parseInt(x)
    
    if (intX < 0) return 'OOPS';

    fibArr = new Array(intX);
    fibArr[0] = 1;
    fibArr[1] = 1;
    for (let i = 0; i < fibArr.length; i++) {
        if (i > 1) {
            fibArr[i] = fibArr[i-2] + fibArr[i-1];
        }
    }
    return fibArr[x-1];
};

// Do not edit below this line
module.exports = fibonacci;
