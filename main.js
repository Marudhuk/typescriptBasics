"use strict";
exports.__esModule = true;
var mesg = "hi Welcome to TS";
console.log(mesg);
var a = 123;
a = 1;
a = "hi";
var b = 123;
var str = "hi";
var bool = true;
var array = [1, 2, 3, 4, 'abc'];
var arrStr = ["hi", 'hello'];
var arr = [];
var multitype;
multitype = 12;
multitype = "hi";
var obj = {
    name: "Muthu",
    age: 12
};
// obj['age']="j";
// console.log(obj.gender);
function sum(a, b) {
    return a + b;
}
function sub(a) {
    return a.toLowerCase();
}
function sub2(a, b) {
    if (b)
        return a + b;
    return a;
}
console.log(sub2("hi"));
function mul(a, b) {
    if (b === void 0) { b = 'raj'; }
    if (b)
        return a + b;
    return a;
}
console.log(mul("hi"));
function object(point) {
    return point.x + point.y;
}
var p = {
    x: 20,
    y: 3
};
console.log(object(p));
var student = {};
function object1(point) {
    return point.x;
}
console.log(object1(p));
var arrayFor = [
    { id: 1, name: 'Muthu', age: 20 },
    { id: 2, name: 'Saroo', age: 22 },
    { id: 3, name: 'Marudhu', age: 22 },
    { id: 4, name: 'Thangam', age: 20 },
];
var x = arrayFor.filter(function (e) {
    return e.age > 20;
});
console.log(x);
var Greeter = /** @class */ (function () {
    function Greeter() {
    }
    Greeter.prototype.greet = function () { };
    return Greeter;
}());
this.greeting = message;
return "helo " + this.greeting;
