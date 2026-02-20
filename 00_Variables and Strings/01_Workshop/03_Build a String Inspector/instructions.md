Step 1
In this workshop, you will practice working with the includes() and slice() methods.

To begin, create a variable named fccSentence and assign it the string "freeCodeCamp is a great place to learn web development.".

Step 2
Use console.log() to log "Here are some examples of the includes() method:" to the console.

Step 3
As you recall from the prior lessons, the includes() method checks if a string contains a specific substring and returns true or false.

Here is an example using the includes() method:

Example Code
const text = "Hello World";
const hasHello = text.includes("Hello");
console.log(hasHello); // true
Create a variable named hasFreeCodeCamp. Then assign it the result of using the includes() method on fccSentence to check if it contains "freeCodeCamp".

Step 4
Now use either a template literal or string concatenation to log the message fccSentence.includes("freeCodeCamp") returns <hasFreeCodeCamp> because the word "freeCodeCamp" is in the sentence. to the console. Replace <hasFreeCodeCamp> with the actual value of the variable.

Step 5
Now it is time to see what happens when the substring is NOT found.

Create a variable named hasJavaScript. Then assign it the result of using the includes() method to check if fccSentence includes "JavaScript".

Then use either a template literal or string concatenation to log the message fccSentence.includes("JavaScript") returns <hasJavaScript> because the word "JavaScript" is not in the sentence. to the console. Replace <hasJavaScript> with the actual value of the variable.

Step 6
The includes() method is case-sensitive, meaning it distinguishes between uppercase and lowercase letters.

Create a variable named hasLowercaseFCC. Then assign it the result of using the includes() method to check if fccSentence includes "freecodecamp" (all lowercase).

Then use either a template literal or string concatenation to log the message fccSentence.includes("freecodecamp") returns <hasLowercaseFCC> because includes is case-sensitive. to the console. Replace <hasLowercaseFCC> with the actual value of the variable.

Step 7
Now you will explore the slice() method, which extracts a portion of a string.

Create a variable named message and assign it the string "Welcome to freeCodeCamp!".

Then use console.log() to log "Here are some examples of the slice() method:" to the console.

Step 8
The slice() method extracts a section of a string. It takes two arguments: the start index (included) and the end index (not included).

Here is an example:

Example Code
const greeting = "Hello World";
const firstWord = greeting.slice(0, 5);
console.log(firstWord); // "Hello"
String indices start at 0. In the message string, the character at index 11 is f (the start of "freeCodeCamp").

Create a variable named platform. Then assign it the result of using message.slice(11, 23) to extract "freeCodeCamp".

Step 9
Now it is time to log the result of using the slice() method.

Use either a template literal or string concatenation to log the message The word "<platform>" was sliced from the message. to the console. Replace <platform> with the actual value of the variable.

Step 10
You can use slice() to extract from the beginning of a string.

Create a variable named greetingWord. Then assign it the result of using message.slice(0, 7) to extract the first word "Welcome".

Then use either a template literal or string concatenation to log the message The first word is "<greetingWord>". to the console. Replace <greetingWord> with the actual value of the variable.

Step 11
The slice() method can use negative indices to count from the end of the string. -1 refers to the last character.

Here is an example:

Example Code
const text = "JavaScript";
const lastThree = text.slice(-3);
console.log(lastThree); // "ipt"
Create a variable named endPunctuation. Then assign it the result of using message.slice(-1) to extract the last character.

Then use either a template literal or string concatenation to log the message The ending punctuation mark is a "<endPunctuation>" to the console. Replace <endPunctuation> with the actual value of the variable.

Step 12
As a final step, add a console.log() statement with the message: "Workshop complete! You now know how to use includes() and slice()."

Congratulations! You have completed the String Inspector workshop.