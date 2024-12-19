const repeatString = function(string, amountOfRep) {
    let newString = ""

    if (amountOfRep >= 0) {
        for (i = 0; i < amountOfRep; i++) {
            newString += string;
        }
    }
    else {
        newString = "ERROR"
    }
    
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
