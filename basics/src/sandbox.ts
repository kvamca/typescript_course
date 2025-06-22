//basic types

let character:string = "kamila";
let age:number = 25;
let isStudent:boolean = true;


//function
const circ = (diameter: number): number => {
    return diameter * Math.PI;  
}

let greet: Function;
greet = () => {
    console.log("hi")
}
greet();

//optional parameter + void: it represents lack of returned value
const add = (a: number, b: number, c?:number|string): void =>{
    console.log (a+b);
    console.log(c);
}
add(1, 5)

//default parameter
const minus = (a: number, b: number, c:number|string = 5):number =>{
    return(a-b);
}
const result= minus(1, 5)
console.log(result);


//arrays
let names: (string)[] = ["kamila", "maria"];
names.push("pedro");

let mixed: (string | number)[] = [];


mixed.push("kamila");
mixed.push(25);
//mixed.push(true);

let uid: string | number;
uid = "123";
uid = 123;


//objects
let user: object;
user = {
    name: "kamila",
    age: 25,
    isStudent: true
};

let user2: {
    name: string,
    age: number,
    isStudent: boolean
} = {
    name: "kamila",
    age: 25,
    isStudent: true
};

//type any - it can be changed in time
let items: any = 25;
items = true;
items = "kamila";

let mixed2: any[] = []; 
let user3: { name: any, age: any };

console.log(character, age, isStudent);
let test = circ(7);

//aliases
type StringOrNumber = string | number;
type ObjWithName = {name: string, uid: StringOrNumber}

const greet1 = (user: ObjWithName) => {
    console.log(`${user.name} says hello`)
}

//function signature
let hello: (a: string, b:string) => void;

hello = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`)
}

let calc: (a:number, b:number, c:string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if (action === "add"){
        return numOne + numTwo;
    } else {
       return numOne - numTwo;
    }
}

type person = {name: string, age: number}
let logDetails: (obj: person) => void;

logDetails = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old`)
}

