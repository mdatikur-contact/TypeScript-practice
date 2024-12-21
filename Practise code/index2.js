var users = [];
var user1 = {
    id: 1,
    name: "Atikur",
    age: 25
};
var user2 = {
    id: 2,
    name: "Zannatul",
    age: 24
};
users.push(user1);
users.push(user2);
var printUserInfo = function (user) {
    console.log("userid = ".concat(user.id, ", name = ").concat(user.name, ", age = ").concat(user.age));
};
users.forEach(function (user) { return printUserInfo(user); });
