Build a Missing Letter Detector
Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a function named fearNotLetter.
The fearNotLetter function should accept one argument: a string representing a range of letters in alphabetical order which can have one letter missing.
The function should find the missing letter in the passed letter range and return it.
If all letters are present in the range, the function should return undefined.
Tests:
Passed:1. You should have a fearNotLetter function.
Passed:2. fearNotLetter("abce") should return the string d.
Passed:3. fearNotLetter("abcdefghjklmno") should return the string i.
Passed:4. fearNotLetter("stvwx") should return the string u.
Passed:5. fearNotLetter("bcdf") should return the string e.
Passed:6. fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.