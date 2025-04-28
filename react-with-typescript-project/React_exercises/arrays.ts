//Arrays
const number: number[] = [1, 2, 3];

const names: Array<string> = ['Alice', 'Bob', 'Betty'];

// Enums
// DARK - LIGHT - SYSTEM

enum DarkMode {
    DARK,
    LIGHT,
    SYSTEM
}

enum DarkMode2 {
    DARK = "DARK",
    LIGHT = "LIGHT",
    SYSTEM = "SYSTEM"
}

const theme: DartkMode = DarkMode.LIGHT;
const theme: DartkMode = DarkMode2.LIGHT;

if (theme === DarkMode.LIGHT) {
    console.log("light")
}

// Interfaces

interface User {
    id: string;
    name: string;
    age?: number
}

const user: User = {
    id: '1',
    name: 'Viki'
}

// Type Aliases
type Car = {
    brand: string;
    year: number;
}

const car: Car = {
    brand: "toyota",
    year: 2020
}

// Interfaces extend
interface Person {
    birthday: string;
}

interface User extends Person {
    id: string;
    name: string;
    age?: number
}

interface Person { // we can add more fields
    gender: string;
}


// Aliases extend
type Animal = {
    name: string;
};

type Dog = Animal & {
    age: number
}

// type Animal  { // we can't add more fields
//     age: number
// }


// Literal types
//You are creating a type that can only be one of these specific values: 'north' or 'south'.
type Direction = 'north' | 'south';

const direction: Direction = 'north';

// direction = "east"; we can't, because is const


// Intersection Types
type A = { a: string };
type B = { b: number };

type C = A & B;

const value: C = { a: 's', b: 10 };

type Person = {
    name: string;
}

type Employee = {
    employeeId: number;
}

type PersonEmployee = Person & Employee;

const john: PersonEmployee = {
    name: "John",
    employeeId: 1234
};


// Type Assertions and Casting

const someValue: any = "this is a string"; //here we don't know what type is it
const strLength: number = (someValue as string).length;
