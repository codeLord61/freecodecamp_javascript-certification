// ==============================
//          DATA TYPES                                 
// ==============================

// Number
let length = 16;
let weight = 0.5;


// BigInt
let x = 12332445353245234324n;
let y = BigInt(134123123421412343243)

// Strings
let color = "Yellow";
let name = "Abdullah";

// Boolean
let a = false;
let b = true;

// Null
let c = null;

// Undefined
let d;
let e;

// Symbol
const f = Symbol();
const g = Symbol();

// Object
const user = {
    firstName: "John",
    lastName: "Doe"
};

// Array Object 
const car = ['volvo', 'bmw'];

// Date object
const date = new Date("2016-02-17");

// ==============================
//      STRING CONCATANATION                                 
// ==============================

// Done by +, +=, concat()

let str = "hello";
let concat_by_plus = str + " Meow";
console.log(concat_by_plus)

concat_by_plus += " World";
console.log(concat_by_plus);

let concat = str.concat(' ', "World");
console.log(concat);
