function uniteUnique (arr1, arr2, ...remainingArrays) {
    let result = [];

    const input = [...arr1, ...arr2, ...remainingArrays.flat()];

    for (const num of input) {
        if (!result.includes(num)) {
            result.push(num)
        }
    }

    return result;
}


uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])