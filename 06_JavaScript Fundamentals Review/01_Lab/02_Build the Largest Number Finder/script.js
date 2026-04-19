function largestOfAll(arrays) {
    const resultArray = new Array(arrays.length).fill()
    console.log(resultArray);
    let idx = 0;

    for (const array of arrays) {
        let max = Number.NEGATIVE_INFINITY;

        for (const num of array) {
            if (num > max) {
                max = num;
            }
        }
        resultArray[idx] = max;
        idx++;
        max = Number.NEGATIVE_INFINITY;
    }

    return resultArray;
}

largestOfAll([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
]);
