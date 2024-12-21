const palindromes = function (str) {
    let punctuation = [',', '.', ';', ':', '!', '?', '-', '_', ' '];
    let strInput = str.toLowerCase()
                      .split('')
                      .filter(item => !punctuation.includes(item))
                      .join('')
    let strRev = str.toLowerCase()
                    .split('')
                    .filter(item => !punctuation.includes(item))
                    .reverse()
                    .join('')
    return strInput === strRev;
};

// Do not edit below this line
module.exports = palindromes;
