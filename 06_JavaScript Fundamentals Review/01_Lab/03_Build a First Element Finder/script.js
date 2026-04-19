function findElement (array, callback) {
    for (const num of array) {
        if (callback(num)) {
            return num;
        }
    }
}

console.log(findElement([1, 2, 3, 4], function(num) { return num > 2; }));
