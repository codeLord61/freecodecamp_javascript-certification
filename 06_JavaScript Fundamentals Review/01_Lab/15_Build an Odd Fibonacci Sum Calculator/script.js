function sumFibs(num) {
    if (num === 0) {
        return 0;
    }

    let sum = 1;
    let prev = 0;
    let current = 1;
    let next = prev + current;

    while (next <= num) {
        // Add odd number to sum
        if (next % 2 !== 0) {
            sum += next;
        }

        // update the numbers
        prev = current;
        current = next;
        next = current + prev;
    }
    return sum;
}

console.log(sumFibs(3));
