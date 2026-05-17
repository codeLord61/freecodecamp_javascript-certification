function getIndexToIns(arr, num) {
    if (arr.length == 0) {
        return 0
    }
    const sorted = arr.sort((a, b) => a - b);
    const index = sorted.findIndex((element) => {
        return num <= element;
    });
    
    if (index==-1) {
        return arr.length
    }

    return index;
}

console.log(getIndexToIns([1, 2, 3, 4], 1.5));

