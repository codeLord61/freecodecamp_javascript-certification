function getVowelCount(sentence) {
  const vowels = "aeiou";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

const vowelCount = getVowelCount("Apples are tasty fruits");
console.log(`Vowel Count: ${vowelCount}`);

function getConsonantCount(sentence) {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (consonants.includes(char)) {
      count++;
    }
  }
  return count;
}

const consonantCount = getConsonantCount("Coding is fun");
console.log(`Consonant Count: ${consonantCount}`);

function getPunctuationCount(sentence) {
    let pattern = /[^A-Za-z\d\s]/;
    let count = 0;
    for (let char of sentence.toLowerCase()) {
        let res = pattern.test(char);
        if (res) {
            count++;
        }
    }
    return count;
}

const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?")
console.log(`Punctuation Count: ${punctuationCount}`);

function getWordCount(sentence) {
  if (sentence.trim().length > 0) {
    let wordArr = sentence.trim().split(" ")
  return wordArr.length
  }
  return 0
}

const wordCount = getWordCount("I love freeCodeCamp")
console.log(`Word Count: ${wordCount}`);