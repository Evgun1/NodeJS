const { myName, myHobbies, myFavoriteNumber } = require('./multiple-export');
const {
    myName: myOtherName,
    myFriendsName,
    myGreatHobbies,
} = require('./export-and-import');
const greetingFn = require('./my-modules/single-export');

// // DON'T USE ANLOLUTE PATHS
// const greetingFn = require('/home/eugene/develop/NodeJS/03-commonjs-modules/single-export.js');

// importy from multiple-exports
console.log(myName);
console.log(myHobbies);
console.log(myFavoriteNumber);

// mutates array in the multuple-exports module!
myHobbies.push('climbing');

// import from single-export
console.log(greetingFn);
greetingFn(myName);

// imports from  export-and-import
console.log(myOtherName);
console.log(myFriendsName);
console.log(myGreatHobbies);
