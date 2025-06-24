const n: number = 1
const str: string = "Hello"
const bool: boolean = true
const arr: number[] = [1, 2, 3]
const tuple: [number, string] = [1, "Hello"]
const obj: { name: string; age: number } = { name: "Alice", age: 30 }
const anyType: any = "Can be anything"
const unknownType: unknown = "Could be anything, but needs type assertion"
const neverType: never = (() => { throw new Error("This function never returns") }) as never;
const voidType: void = undefined; // or simply use a function that returns void
const nullType: null = null;
const undefinedType: undefined = undefined;
const bigintType: bigint = BigInt(12345678901234567890);
const symbolType: symbol = Symbol("unique");    
const trueType: true = true; // This is a literal type, only true is valid
const num1: 1 = 1; // This is a literal type, only 1 is valid
const str1: "Hello" = "Hello"; // This is a literal type, only "Hello" is valid


const strHelloOrBye: "Hello" | "Bye" = "Hello"; // This is a union type, can be either "Hello" or "Bye"

const arrayOfNumbers: number[] = [1, 2, 3];
const array2 : Array<number> = [1, 2, 3]; // Both notations are valid

// type vs interface
// Both can be used to define object shapes, Typescript recommends interfaces
type User = {
  name: string;
  age: number;
  email?: string; // Optional property
};

interface IUser {
  name: string;
  age: number;
  email?: string; // Optional property
}

interface IAdmin extends IUser {
  role: string; // Admin specific property
}

// Function type
const functionExample = (user: User): string => {
  return `User: ${user.name}, Age: ${user.age}`;
}

class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Employee extends Person {
    position: string;
    constructor(name: string, age: number, position: string) {
        super(name, age);
        this.position = position;
    }
}

class Human implements IUser {
    name: string;
    age: number;
    email?: string;

    constructor(name: string, age: number, email?: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
}

type Optional<T> = T | undefined | null;