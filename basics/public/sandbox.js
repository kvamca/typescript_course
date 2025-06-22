"use strict";
//basic types
let character = "kamila";
let age = 25;
let isStudent = true;
//function
const circ = (diameter) => {
    return diameter * Math.PI;
};
let greet;
greet = () => {
    console.log("hi");
};
greet();
//optional parameter + void: it represents lack of returned value
const add = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
add(1, 5);
//default parameter
const minus = (a, b, c = 5) => {
    return (a - b);
};
const result = minus(1, 5);
console.log(result);
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
const greet1 = (user) => {
    console.log(`${user.name} says hello`);
};
//function signature
let hello;
hello = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
let calc;
calc = (numOne, numTwo, action) => {
    if (action === "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
