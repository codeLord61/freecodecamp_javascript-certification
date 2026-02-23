const maskEmail = email => {
    let front = email.slice(0, 1);
    let indexOfEmailSymbol = email.indexOf('@');
    let end = email.slice(indexOfEmailSymbol-1);
    let maskChar = '*';
    // indexOfEmailSymbol = the length of the domain word before @
    // Subtract 2 since we are displaying first and last characters
    let maskCount = indexOfEmailSymbol - 2;      
    let maskString = maskChar.repeat(maskCount);

    let result = front + maskString + end;
    return result
}

let email = "freecodecamp@example.com";

console.log(maskEmail(email)); 
