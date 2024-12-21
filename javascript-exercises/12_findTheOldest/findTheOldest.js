const findTheOldest = function(people) {
    const oldest = people.sort(function(a, b) {
        const lastPerson = a.yearOfBirth - (("yearOfDeath" in a) ? a.yearOfDeath : (new Date()).getFullYear());
        const nextPerson = b.yearOfBirth - (("yearOfDeath" in b) ? b.yearOfDeath : (new Date()).getFullYear());
        return lastPerson > nextPerson ? 1 : -1;
    });
    console.log(oldest);
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
