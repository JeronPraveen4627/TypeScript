"use strict";
let id = 5;
let company = 'Code Tamizha Code';
let isCompanyOpen = true;
let x;
x = 'asdfvwe';
let ids = [1, 2, 3, 4, 5, 6];
let x1 = [1, 'd', true];
let employee = [1, 'Iyyappan', true];
//Tuple array
let employees = [
    [1, "Jeron", true],
    [2, "Dhoni", true],
    [3, "Praveen", false]
];
//union
let eid;
eid = 5;
eid = 'roll1';
//enum
var direction1;
(function (direction1) {
    direction1[direction1["up"] = 5] = "up";
    direction1[direction1["down"] = 6] = "down";
    direction1[direction1["left"] = 7] = "left";
    direction1[direction1["right"] = 8] = "right";
})(direction1 || (direction1 = {}));
var direction2;
(function (direction2) {
    direction2["up"] = "up";
    direction2["down"] = "down";
    direction2["left"] = "left";
    direction2["right"] = "right";
})(direction2 || (direction2 = {}));
console.log(direction1.left);
let User = {
    id: 1,
    name: 'Iyyappan'
};
//type assert
let x3 = 5;
//let compId=x3 as number;
let compId = x3;
//function
function doMath(a, b) {
    return a + b;
}
console.log(doMath(1, 5));
function logme(x) {
    console.log(x);
}
console.log('Hi');
function logme1(x) {
    if (typeof x == 'number')
        console.log("Hi Number");
    if (typeof x == 'string')
        console.log("Hi String");
}
let User1 = {
    id: 1,
    name: 'Iyyappan'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
