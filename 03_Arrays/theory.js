const fruits = ["apple", "banana"];

// Push = Add 1 or more elements to end of array
fruits.push("orange", "grape");

console.log(fruits);

// Array length
console.log(fruits.length);

// Why adding multiple elements or simply modifying element 
// possible even using 'const' to declare array. Because it creates a reference to the array
// Array is mutable and can be modified

// But we can't reassign a new value to the fruits constant
// fruits = ["This", "will", "not", "work"];
// console.log(fruits); //TypeError: Assignment to constant variable.

// Pop = Remove & Return LAST element
let lastFruit = fruits.pop();
console.log(lastFruit); // grape

// Unshift = Add 1 or more items to START of an array

let numbers = [3,4,5];
numbers.unshift(1, 2);
console.log(numbers); // [ 1, 2, 3, 4, 5 ]

// Shift = Remove & Return the FIRST element of array
let firstNum= numbers.shift();
console.log(firstNum);

// ** Summary **
// Adding 1 or more elements possible: START = UNSHIFT, END = PUSH 
// Remove only 1 element possible: START = SHIFT, END = POP 

// Array destructuring or unpacking

let cars = ["bmw", "audi", "byd"];
// let [first, second, third] = cars; // Also similar to PHP

// console.log(first, second, third); // bmw, audi, byd

// Skip elements

let [first, , third] = cars;
console.log(first, third); // bmw byd (skipped 2nd value in arr)

// Setting default value in destructuring

let number = [1, 2];
let [a, b, c=3] = number;

console.log(a,b,c); // 1 2 3 (c=3 default)

// Rest syntax (...) = saves the remaining array items into a new array
let fruit = ["apple", "banana", "orange", "mango", "kiwi"];
let [one, two, ...rest] = fruit;
console.log(one, two, rest); // apple banana [ 'orange', 'mango', 'kiwi' ]


// Array split, reverse, join
// Split

let str = "hello";
let charArray = str.split(); // No separator = entire string as 1 element in array
console.log(charArray); // ['hello']

charArray = str.split(''); // Splits each character
console.log(charArray); // [ 'h', 'e', 'l', 'l', 'o' ]

str = "hello world";
charArray = str.split(" ") // Splits when space found
console.log(charArray); // [ 'hello', 'world' ]

// Reverse = Reverses IN PLACE

charArray = ["h", "e", "l", "l", "o"];
charArray.reverse();
console.log(charArray);

// Join

let reversedArray = ["o", "l", "l", "e", "h"];
let reversedString = reversedArray.join(); // Without separator = joined by ,
console.log(reversedString); // o,l,l,e,h

reversedString = reversedArray.join(''); // Joined with no spaces
console.log(reversedString); // olleh

// One liner to reverse a string
str = "coding";
let reversed = str.split('').reverse().join('');
console.log(reversed); //gnidoc

