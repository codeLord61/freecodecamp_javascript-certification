function chunkArrayInGroups(array, chunk) {
    const result = [];
    let end = 0;

    for (let i = 0; i < array.length; i += chunk) {
        let slice = array.slice(i, (end+=chunk));
        result.push(slice);
    }
    return result;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
