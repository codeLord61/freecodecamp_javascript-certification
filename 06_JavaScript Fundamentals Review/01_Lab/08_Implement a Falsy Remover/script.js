function bouncer(arr) {
    const array = arr.slice();
    for (let i=0; i<array.length; i++) {
        const boolean = Boolean(array[i])

        if (!boolean) {
            array.splice(i, 1);
            i--;
        }
    }

    return array
}

console.log(bouncer([null, NaN, 1, 2, undefined]));