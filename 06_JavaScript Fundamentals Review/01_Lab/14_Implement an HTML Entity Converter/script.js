function parseEntity(char) {
    const entities = "&<>\"'";
    const entityMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '\"': "&quot;",
        "'": "&apos;",
    };

    if (entities.includes(char)) {
        return entityMap[char];
    }
}

// const arr = [1,2,3,4,5]

// let i=0;
// let item = arr[i]
// while (item) {

//     i++;
//     item=arr[i];

//     console.log(item);

// }

function convertHTML(string) {
    // temporarily make string into an array for accessing splice method
    let stringToArr = string.split("");
    const entities = "&<>\"'";

    let i = 0;
    let char = stringToArr[0];

    while (char) {
        // & -> amp, amp -> index -> splice add -> add index to skip just in added element
        if (entities.includes(char)) {
            let parsedEntity = parseEntity(char);
            stringToArr.splice(i, 1, parsedEntity);
        }
        i++;
        char = stringToArr[i];
    }
    
    // convert array back into string
    let result = stringToArr.join("");
    return result;
}
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("<>"));