let count = 0;

const cardCounter = (card) => {
    let cardValue = card;
    let cardParsedInt = parseInt(card);
//     console.log(`
// =======================
// ${cardValue} | ${typeof cardValue}`);

    // When card value converted to number is actually a Number (not a string) & within range(2,10) => cardValue will be the Number else its String
    if(!(Number.isNaN(cardParsedInt)) && (2<=cardParsedInt && cardParsedInt<= 10)){
        cardValue = cardParsedInt;
    }

//     console.log(`
// ${cardValue} | ${typeof cardValue}
// =======================`);

    // Increment
    if (
        cardValue === 2 ||
        cardValue === 3 ||
        cardValue === 4 ||
        cardValue === 5 ||
        cardValue === 6
    ) {
        count += 1;
    }

    // Decrement
    if (
        cardValue === 10 ||
        cardValue === "J" ||
        cardValue === "Q" ||
        cardValue === "K" ||
        cardValue === "A"
    ) {
        count -= 1;
    }

    let result = ``;
    if (count > 0) {
        result += `${count} Bet`;
    } else {
        result += `${count} Hold`;
    }

    return result;
};

// --------Test Case 1-----------
// console.log(cardCounter("2"));
// console.log(cardCounter("3"));
// console.log(cardCounter("4"));
// console.log(cardCounter("5"));
// console.log(cardCounter("6"));

// --------Test Case 2-----------
// console.log(cardCounter("7"));
// console.log(cardCounter("8"));
// console.log(cardCounter("9"));

// --------Test Case 3-----------
// console.log(cardCounter("10"));
// console.log(cardCounter("J"));
// console.log(cardCounter("Q"));
// console.log(cardCounter("K"));
// console.log(cardCounter("A"));

// --------Test Case 4-----------
// console.log(cardCounter("3"));
// console.log(cardCounter("7"));
// console.log(cardCounter("Q"));
// console.log(cardCounter("8"));
// console.log(cardCounter("A"));

// --------Test Case 5-----------

// console.log(cardCounter("2"));
// console.log(cardCounter("J"));
// console.log(cardCounter("9"));
// console.log(cardCounter("2"));
// console.log(cardCounter("7"));

// --------Test Case 6-----------

// console.log(cardCounter("2"));
// console.log(cardCounter("2"));
// console.log(cardCounter("10"));

// --------Test Case 7-----------
console.log(cardCounter("3"));
console.log(cardCounter("2"));
console.log(cardCounter("A"));
console.log(cardCounter("10"));
console.log(cardCounter("K"));