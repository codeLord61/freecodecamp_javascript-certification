function fearNotLetter (string) {
    string = string.trim().toLowerCase();
    const sequence = "abcdefghijklmnopqrstuvwxyz";
    let index = sequence.indexOf(string[0]);

    for (let char of string.slice(1, )) {
        index += 1;
        if (sequence[index] !== char) {
            return sequence[index];
        }
    }

    return undefined;
}

// console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));