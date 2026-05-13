function dropElements(arr, func) {
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (func(element)) {
            return arr;
        }

        // Remove element
        arr.splice(index, 1);
        index--;
    }
    return [];
}

console.log(
    dropElements([0, 1, 0, 1], function (n) {
        return n === 1;
    }),
);
