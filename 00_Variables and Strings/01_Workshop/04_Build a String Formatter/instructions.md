Step 1
In this workshop, you will practice working with various string methods used for formatting strings.

Start by creating a variable called userInput and assign it the following value: "   Hello World!   ".

Step 2
Next, add a console.log() with the string "Original input:".

Step 3
Below your first console.log(), add another console.log() to log the userInput variable to the console.

Step 4
Your userInput value has some extra spaces at both ends of the string. To create a new string with that whitespace removed, you can use the trim() method.

Here is an example:

Example Code
const sentence = "  Learning about the trim method.  ";
sentence.trim(); // "Learning about the trim method."
Create a variable named cleanedInput and assign it the result of using the trim() method on the userInput variable.

Step 5
Now it is time to see the result.

Start by adding a console.log() with the string "Result of trimming whitespace from both ends:".

Then below that console.log(), add another console.log() with the cleanedInput variable.

Step 6
There will be times where you will want to only trim whitespace at the beginning of the string. That is where the trimStart() method comes in handy.

Here is an example:

Example Code
const sentence = "  I love learning.  ";
sentence.trimStart(); // "I love learning.  "
Remember that strings are immutable. This method will create a new string with the result. Not modify the original one.

Create a variable trimmedStart and assign it the result of using the trimStart() method on the userInput variable.

Step 7
Now it is time to see the results of trimming whitespace at the beginning of the string.

Below your trimmedStart variable, add a console.log() with the string "After using the trimStart() method, leading spaces removed:".

Then below that console.log(), add another console.log() with the trimmedStart variable.

Step 8
To trim whitespace at the end of a string, you can use the trimEnd() method.

Here is an example:

Example Code
const sentence = "  I love learning.  ";
sentence.trimEnd(); // "  I love learning."
Create a variable called trimmedEnd and assign it the result of using the trimEnd() method on the userInput variable.

Step 9
Now it is time to see the results of trimming whitespace at the end of the string.

Below your trimmedEnd variable, add a console.log() with the string "After using the trimEnd() method, trailing spaces removed:".

Then below that console.log(), add another console.log() with the trimmedEnd variable.

Step 10
There will be times where you will need to create a new string with a different casing.

To create a new string with all of the letters converted to uppercase, you can use the toUpperCase() method.

Here is an example:

Example Code
const sentence = "I love to code!";
sentence.toUpperCase(); // "I LOVE TO CODE!"
Create a variable called upperCaseInput and assign it the result of using the toUpperCase() method on the cleanedInput variable.

Step 11
Now it is time to see the results.

Below your upperCaseInput variable, add a console.log() with the string "Result of using the toUpperCase() method:".

Then below that console.log(), add another console.log() with the upperCaseInput variable.

Step 12
If you need to create a new string where all of the letters are in lowercase, you can use the toLowerCase() method.

Start by creating a variable called lowerCaseInput and assign it the result of using the toLowerCase() method on the cleanedInput variable.

Then log the string "Result of using the toLowerCase() method:".

Finally, add another console.log() for the lowerCaseInput variable.

Step 13
There will be times where you will need to use multiple methods to create a new string. Over the next few steps, you will use some of the methods you have learned so far to create a new string that uses the camelCase naming convention.

Start by creating a variable called lowercaseWord and assign it the string "camelcase".

Below that lowercaseWord variable, create another variable called camelCasedVersion and assign it an empty string for now.

Below that camelCasedVersion variable, add a console.log() with the string "Camel cased version:" followed by another console.log() for the camelCasedVersion variable.

Step 14
As you recall from earlier lessons and workshops, you can extract portions of a string by using the slice() method.

Here is a reminder:

Example Code
const str = "abcd";
str.slice(0, 3); // "abc"
Change the value of the camelCasedVersion from an empty string to the result of using the slice() method on the lowercaseWord variable. Pass in the number 0 and 5 which represent the start and end indices for the slice() method.

Now you should see the word "camel" in the console.

Step 15
As you recall from earlier lessons, the camelCase naming convention starts with a lowercase letter for the first word, and each subsequent word begins with an uppercase letter followed by lowercase letters.

Here are some reminder examples:

Example Code
freeCodeCamp
camelCase
learningIsFun
The second word in the lowercaseWord variable is "case". To access the c in that word, you can use lowercaseWord[5].

Use the + operator to concatenate lowercaseWord.slice(0, 5) with the result of using the correct method for converting strings to uppercase on lowercaseWord[5].

Now you should see camelC in the console.

Step 16
Right now your camelCasedVersion variable holds the value of camelC. But the desired result is camelCase.

To get the remaining ase letters, you can use the slice() method with a negative index value. Recall, that using negative index values tells the slice() method to extract from the end.

Here is a reminder example:

Example Code
const str = "abcd";
str.slice(-2); // cd
Use the + operator to concatenate lowercaseWord.slice(0, 5) + lowercaseWord[5].toUpperCase() with the result of using the slice() method on lowercaseWord. Pass in the number -3 for the slice() method.

And with that last change, your workshop is complete!