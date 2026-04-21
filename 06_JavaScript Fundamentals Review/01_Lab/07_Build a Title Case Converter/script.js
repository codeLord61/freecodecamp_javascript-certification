function titleCase(sentence) {
    sentence = sentence.split(" ")
    let arr = [];

    for (const word of sentence) {
        // result += word[0]
        let str = word[0].toUpperCase() + word.toLowerCase().slice(1, )
        arr.push(str)
    }

    return arr.join(" ")
}

console.log(titleCase("I like to code"));