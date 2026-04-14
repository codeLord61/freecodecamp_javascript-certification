let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];


function lookUpProfile (name, property) {
    // Validating if name exists
    let wasNameFound = false;
    let user = '';

    for (const obj of contacts) {
        if (obj.firstName === name) {
            wasNameFound = true;
            user = obj;
            break;
        }
    }

    if(!wasNameFound) {
        return "No such contact";
    }

    // Validating if property exists
    if (!Object.hasOwn(user, property)){
        return "No such property"
    }

    return user[property];
}

// console.log(lookUpProfile("Sherlock", "likes"));
console.log(lookUpProfile("Akira", "address"));