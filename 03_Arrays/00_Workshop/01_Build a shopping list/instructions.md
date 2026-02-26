Step 1
In this workshop, you will continue to learn about arrays by building a grocery shopping list.

Start by adding a console.log that logs the string "Grocery shopping list" to the console.

Step 2
For this shopping list, you will use an array to represent the items you need to buy.

In previous lessons, you learned how to create arrays like this:

Example Code
const fruits = ['apple', 'banana', 'orange'];
In this step, create a variable called shoppingList and assign it an empty array.

Step 3
For this next portion of the workshop, you will practice adding food items to the grocery list.

Start by using console.log to log the message "It will be nice to have some fruit to eat.".

Step 4
In previous lessons, you learned how to add items to the end of an array using the push method like this:

Example Code
fruits.push('pear');
Using the push method, add the string "Apples" to the shoppingList array.

Step 5
To see the updated shopping list, you will need to log the current shopping list and a short message to the console.

Since this message will be used repeatedly throughout the workshop, it is best to create a reusable function.

Create a function called getShoppingListMsg that takes an array as a parameter and returns the string "Current Shopping List: " followed by the contents of the provided array.

You can use template literals or string concatenation with the + operator to combine the string with the array passed to the function.

Step 6
Now it is time to see the message logged to the console.

Add a console.log and call the getShoppingListMsg function with the shoppingList array as an argument inside console.log to see the message logged to the console.

Step 7
Now it is time to add another fruit to the list.

Using the same array method as earlier, add the string "Grapes" to the end of the shoppingList array.

Then, add a console.log and call the getShoppingListMsg function with the shoppingList array as an argument inside console.log to see the updated list logged to the console.

Step 8
Now it is time to start adding items to the top of the grocery list.

Start by adding a console.log that logs the message "It looks like we need to get some cooking oil." to the console.

Step 9
In previous lessons, you learned how to add elements to the beginning of an array using the unshift() method.

Here is a reminder of how to use the unshift() method:

Example Code
array.unshift(item1, item2, ..., itemX);
Use the unshift() method to add the string "Vegetable Oil" to the beginning of the shoppingList array.

Step 10
Next, add a console.log and call the getShoppingListMsg function with the shoppingList array as an argument inside console.log to see the updated list logged to the console.

Step 11
In earlier steps, you reviewed how to add an item to the end of the array using the push method.

But the push method accepts multiple arguments, so you can add multiple items to the end of the array like this:

Example Code
array.push(item1, item2, item3);
In this step, use the push method to add the strings "Popcorn", "Beef Jerky", "Potato Chips" to the shoppingList array.

The order is important, so make sure to add the items in the order they are listed.

Step 12
Now it is time to log the updated shoppingList array to the console.

Add another console.log and call the getShoppingListMsg function with the shoppingList array as an argument inside console.log to see the updated list logged to the console.

Step 13
For this next portion of the workshop, you will review how to remove items from the end of the array.

Start by adding a console.log that logs the message "This looks like too much junk food.".

Step 14
In previous lessons, you learned how to remove items from the end of an array using the pop method.

Here is a reminder of how to use the pop method:

Example Code
let array = [1, 2, 3, 4, 5];
array.pop();

// [1, 2, 3, 4]
console.log(array); 
Use the pop method to remove the last item from the shoppingList array.

Step 15
Now it is time to log the updated shoppingList array to the console.

Add a console.log and call the getShoppingListMsg function with the shoppingList array as an argument inside console.log to see the updated list logged to the console.

Step 16
Now it is time to add more items to the beginning of the grocery list.

Start by adding a console.log statement that logs the message "It might be nice to get a dessert."

Below that console statement, use the correct array method to add the string "Chocolate Cake" to the beginning of the shoppingList array.

Finally, add a console.log and call the getShoppingListMsg function with the shoppingList array as an argument inside console.log to see the updated list logged to the console.

Step 17
In this last part of the workshop, you will review how to remove an item from the beginning of an array.

Start by adding a console.log that logs the message "On second thought, maybe we should be more health conscious.".

Step 18
In previous lessons, you learned how to remove an item from the beginning of the array using the shift method.

Here is a reminder of how to use the shift method:

Example Code
const array = [1, 2, 3, 4, 5];
array.shift();

// Result: [2, 3, 4, 5]
console.log(array); 
Use the shift method to remove the first item from the shoppingList array.

Step 19
The last change to make to the grocery list is to update the first item in the list.

In previous lessons, you learned how to update an item using bracket notation and the index of the item you want to update.

Here is a reminder of how to update an item in an array:

Example Code
const array = [1, 2, 3, 4, 5];

array[0] = 10;
// Result: [10, 2, 3, 4, 5]
console.log(array); 
Update the first item in the shoppingList array to be "Canola Oil".

Step 20
In this final step of the workshop, log the final grocery list to the console.

To do this, call the getShoppingListMsg function with the shoppingList array as an argument inside console.log.

And with this last step your grocery list is complete!