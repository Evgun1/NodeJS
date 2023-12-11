const { myName, myHobbies } = require('./multiple-export');

const myFriendsName = 'Alice';

module.exports.myName = myName;
module.exports.myFriendsName = myFriendsName;
// properyy names coud be different from the variable names
module.exports.myGreatHobbies = myHobbies;
