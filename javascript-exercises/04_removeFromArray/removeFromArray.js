const removeFromArray = function(list, ...toRemove) {
    let newList = list
    for (let i = 0; i < toRemove.length; i++){
        if (newList.includes(toRemove[i])) {
            let index = newList.indexOf(toRemove[i]);
            newList.splice(index, 1);
        }
    }
    return newList;
};

// Do not edit below this line
module.exports = removeFromArray;
