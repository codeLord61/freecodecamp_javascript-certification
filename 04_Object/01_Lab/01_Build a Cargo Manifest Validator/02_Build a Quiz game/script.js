const questions = [
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Mars", "Venus", "Jupiter"],
    answer: "Mars"
  },
  {
    category: "History",
    question: "Who was the first President of the United States?",
    choices: ["George Washington", "Abraham Lincoln", "Thomas Jefferson"],
    answer: "George Washington"
  },
  {
    category: "Geography",
    question: "What is the largest ocean on Earth?",
    choices: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean"],
    answer: "Pacific Ocean"
  },
  {
    category: "Technology",
    question: "What does HTML stand for?",
    choices: ["HyperText Markup Language", "HighText Machine Language", "HyperTool Multi Language"],
    answer: "HyperText Markup Language"
  },
  {
    category: "Sports",
    question: "How many players are there in a football (soccer) team on the field?",
    choices: ["11", "9", "7"],
    answer: "11"
  }
];


function getRandomQuestion (arr) {
    let len = arr.length;
    let randIndex = Math.floor(Math.random()*len);
    let randItem = arr[randIndex];
    
    return randItem;
}

function getRandomComputerChoice (choiceArr) {
    let randIndex = Math.floor(Math.random()*choiceArr.length);
    let randChoice = choiceArr[randIndex];

    return randChoice;
}

function getResults (questObj, compChoice) {
    let ans = questObj.answer;

    if (ans === compChoice) {
        return "The computer's choice is correct!"
    } else {
        return `The computer's choice is wrong. The correct answer is: ${ans}`
    }
}

function run () {
    let quest = getRandomQuestion(questions);
    let compChoice = getRandomComputerChoice(quest.choices);
    let results = getResults(quest, compChoice);
    console.log(`Question: 
${quest.question}
Computer guessed: 
${compChoice}`);

    console.log(results);
}

run();