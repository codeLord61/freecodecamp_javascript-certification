function mutation (array) {
    let [first, second] = array.map((word) => word = word.trim().toLowerCase());

    const letterMapObj = {};

    for (const char of first) {
        if (!Object.hasOwn(letterMapObj, char)) {
            letterMapObj[char] = true
        }
    }

    for (const char of second) {
        if (!Object.hasOwn(letterMapObj, char)) {
            return false;
        }
    }
    return true;
}

console.log(mutation(["hello", "Hello"]));
