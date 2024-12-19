const sumAll = function(start, end) {
    switch (true) {
        case ( (start < 0) || (end < 0) ):
            return "ERROR";
            break;
        case ( (typeof start != "number") || (typeof end != "number") ):
            return "ERROR";
            break;
        case (start > end): // Reverse Sum
            let sumReverse = 0;
            for (let i = end; i <= start; i++){
                sumReverse += i;
            }
            return sumReverse;
            break;
        default:
            let sum = 0;
            for (let i = start; i <= end; i++){
                sum += i;
            }
            return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
