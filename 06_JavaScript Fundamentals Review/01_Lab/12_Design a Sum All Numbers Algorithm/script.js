function sumAll(arr) {
    let [n, m] = arr;
    let start = Math.min(n, m);
    let end = Math.max(n, m);

    let sum = 0;

    for (start; start <= end; start++) {
        sum += start;
    }

    return sum;
}
console.log(sumAll([10, 5]));
