function factorialCalculator(num) {
    let result = 1;
    let i = 1;

    while (i <= num) {
        result = result * i;
        i++;
    }
    return result;
}

const num = 5;
const factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);
