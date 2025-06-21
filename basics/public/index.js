"use strict";
//basic types
let character = "kamila";
let age = 25;
let isStudent = true;
//function
const circ = (diameter) => {
    return diameter * Math.PI;
};
//arrays
let names = ["kamila", "maria"];
names.push("pedro");
let mixed = [];
mixed.push("kamila");
mixed.push(25);
//mixed.push(true);
let uid;
uid = "123";
uid = 123;
//objects
let user;
user = {
    name: "kamila",
    age: 25,
    isStudent: true
};
let user2 = {
    name: "kamila",
    age: 25,
    isStudent: true
};
//type any - it can be changed in time
let items = 25;
items = true;
items = "kamila";
let mixed2 = [];
let user3;
console.log(character, age, isStudent);
let test = circ(7);
//type hhh
