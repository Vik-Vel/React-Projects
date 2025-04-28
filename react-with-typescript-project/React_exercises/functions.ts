// Basic functions
function doSomething(a: number, b: number): string {
    return 'Hello = ' + (a + b);
}
console.log(doSomething(2, 5));

// Optional parameters
function optional(a: number, b?: number): string {
    if (!b) return ''; // we need this because in otherwise we will get error
    return 'Hello = ' + (a + b);
}
console.log(optional(2, 5));

// Default parameters
function defaultParameters(a: number, b: number = 10): string {
    return 'Hello = ' + (a + b);
}

console.log(defaultParameters(10));


// Call signature
//A call signature is a way in TypeScript to describe a function type — what parameters it takes and what type it returns.
interface MathOperations {
    (x: number, y: number): number;
}

const add: MathOperations = (a, b) => a + b;
const substract: MathOperations = (a, b) => a - b;

// Higher-Order functions
//They are functions who accept other function as argument or return other function as result
function higherOrder(func: (a: number, b: number) => number, other: number) {
    return func(other, 10);
}

// function divide(a: number, b: number): number {
//     return a / b;
// }

// console.log(higherOrder(divide, 10)); 

console.log(higherOrder((a: number, b: number) => a / b, 100));

// void
function retunrVoid() {
    console.log("somethings");
}

const returnVoidArrow: () => void = () => {
    console.log("somethings2");
}

// unknown - safer
function anyFunction(a: unknown) {
    return a;
}


// never 
function neverReturnAValue(): never {
    throw new Error("error");
}

function neverIsTricky(x: string | number) {
    if (typeof x === "string") {
        console.log("do something");
    }
    else if (tyoeof x === "number") {
        console.log("do something");
    }
}

// Function global type

function functionGlobalType(func: Function) {
    return func(1, 2);
}

// Rest parameters
function restParameters(n: number, ...m: number[]) {
    return m.map((x) => x + n);
}

const a = restParameters(10, 1, 2, 3, 4, 5);
console.log(a);


// Parameter Destructuring

type ParametersType = { a: number, b: number, c: number };

function parameterDestructuring({ a, b, c }: ParametersType): number {
    return a + b + c;
}


// Functions overloading
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;

function combine(a: any, b: any): any {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }
}
const result = combine(6, 4);
const result2 = combine('Hello', 'World');

function combine2(a: number | string, b: number | string): number | string {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }
    throw new Error("Invalid types for parameters a and b")
}
const result3 = combine2(6, 'hello'); // We will hit the error, because we can't use number and string together

console.log(result);
console.log(result2);