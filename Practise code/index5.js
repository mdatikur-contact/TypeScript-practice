//generic 
var printUserInfo1 = function (userid, userAge) {
    console.log("user id ".concat(userid, ", age =").concat(userAge));
};
printUserInfo1(true, 25);
printUserInfo1(1010, "25");
printUserInfo1("1010", 25);
