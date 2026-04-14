function findLongestWordLength (string) {
    const words = string.trim().split(" ");
    let maxLength = 0;
    let maxWord = "";
    console.log(words);
    for (const word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;
            maxWord = word
        }
    }

    return maxLength;
}

console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));