const reverseString = function(string) {

    let stringArray = string.split('');
    let reverseArray = stringArray.reverse();
    let reverseString = reverseArray.join('');

    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
