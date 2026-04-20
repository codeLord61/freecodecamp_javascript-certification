function getAverage (arr) {
    let total = 0

    for (let num of arr) {
        total += num 
    }
    
    return total/arr.length
}


function getGrade(score) {
    switch(true) {
        case (score === 100):
            return "A+";
        case (score >= 90 && score < 100):
            return "A";
        case (score >= 80 && score < 90):
            return "B";
        case (score >= 70 && score < 80):
            return "C";
        case (score >= 60 && score < 70):
            return "D";
        default:
            return "F"
    }
}

function hasPassingGrade(score) {
    if (getGrade(score) != "F") {
        return true
    }

    return false
}

function studentMsg(scoreArray, score) {
    const average = getAverage(scoreArray);
    const grade = getGrade(score);
    const hasPassed = hasPassingGrade(score) ? 'passed' : 'failed';

    return `Class average: ${average}. Your grade: ${grade}. You ${hasPassed} the course.`
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));

console.log(getGrade(90));

console.log(hasPassingGrade(60));

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));

