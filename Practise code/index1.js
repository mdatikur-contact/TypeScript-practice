// function signature
var userInfo1;
var userInfo2;
var userInfo3;
userInfo1 = function () {
    console.log("Atikur is 25 years");
};
userInfo2 = function (name) {
    console.log("".concat(name, " is 25 years"));
};
userInfo3 = function (name, age) {
    return ("".concat(name, " is ").concat(age, " years"));
};
userInfo1();
userInfo2("Atik");
console.log(userInfo3("Atik", 25));
