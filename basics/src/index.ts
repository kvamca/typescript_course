//basic types

let character:string = "kamila";
let age:number = 25;
let isStudent:boolean = true;


//function
const circ = (diameter: number): number => {
    return diameter * Math.PI;  
}

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

//type hhh