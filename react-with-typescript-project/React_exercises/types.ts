let hello: number = 100;

let myString: string = 'hello';

let largeNumber: BigInt = BigInt(1234567890987654323456789076543);

const isActive: boolean = false;

const uniqueKey = Symbol('description');
const uniqueKeyTsc: symbol = Symbol('description');

const obj = {
    'hey': 'value',
    uniqueKey: 'value'
}

const emptyValue = null;
const emptyValueTsc: null = null;

let unitializedValue: undefined;

const person: { name: string; age: string } = {
    name: "Bob",
    age: "30"
};

hello = '10';
console.log(hello);