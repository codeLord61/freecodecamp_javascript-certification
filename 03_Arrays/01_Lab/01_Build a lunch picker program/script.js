let lunches = [];

const addLunchToEnd = (arr, str) => {
    arr.push(str);
    console.log(`${str} added to the end of the lunch menu.`);
    return arr;
}

const addLunchToStart = (arr, str) => {
    arr.unshift(str);
    console.log(`${str} added to the start of the lunch menu.`);
    return arr;
}

const removeLastLunch = arr => {
    if (arr.length === 0){
        console.log("No lunches to remove.");
    } else {
        let removedItem = arr.pop();
        console.log(`${removedItem} removed from the end of the lunch menu.`);
    }
    return arr;
}

const removeFirstLunch = arr => {
    if (arr.length === 0){
        console.log("No lunches to remove.");
    } else {
        let removedItem = arr.shift();
        console.log(`${removedItem} removed from the start of the lunch menu.`);
    }
    return arr;
}

const getRandomLunch = arr => {
    if (arr.length === 0){
        console.log("No lunches available.");
    } else {
        // Generating random index of array.
        // Assume array length = 5 | index -> 0,1,2,3,4 | Maximum Math.random()->0.99*5 = 4.95 -> floor = 4 so it will be in valid index raneg
        let randIndex = Math.floor(Math.random()*arr.length);
        let randItem = arr[randIndex];

        console.log(`Randomly selected lunch: ${randItem}`);
    }

}

const showLunchMenu = arr => {
    if (arr.length === 0){
        console.log("The menu is empty.");
    } else {
        console.log(`Menu items: ${arr.join(", ")}`);
    }
}

// addLunchToEnd(lunches, "Tacos");
// addLunchToEnd(lunches, "Burger");
// addLunchToEnd(lunches, "Pizza");
// addLunchToEnd(["Pizza", "Tacos"], "Burger");
// addLunchToStart(lunches, "Sushi");
// let arr = addLunchToStart(["Burger", "Sushi"], "Pizza");
// console.log(arr);

// removeLastLunch(lunches);

// removeLastLunch(["Stew", "Soup", "Toast"])

// let rem = removeLastLunch(["Sushi", "Pizza", "Noodles"]);
// console.log(rem);

// removeFirstLunch(["Salad", "Eggs", "Cheese"]);
// let remfirst = removeFirstLunch(["Sushi", "Pizza", "Burger"]);
// console.log(remfirst);

// getRandomLunch(lunches);

// showLunchMenu(lunches);

showLunchMenu(["Greens", "Corns", "Beans"]);