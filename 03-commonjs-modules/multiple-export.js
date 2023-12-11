const myName = 'Euegene';
const myHobbies = ['gaming', 'boxing', 'cycling'];
const myFavoriteNumber = 77;

console.log('Text from the multiple-exports CommonJS module');

// module.exports and exports reference the same object in memory
module.exports.myName = myName;
exports.myHobbies = myHobbies;
exports.myFavoriteNumber = myFavoriteNumber;
