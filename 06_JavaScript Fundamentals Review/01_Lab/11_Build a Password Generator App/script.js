function getRandomIndex (length) {
    return Math.floor(Math.random()*length)
}


function generatePassword(len) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

    let result = ''

    for (let index = 0; index < len; index++) {
        let randIndex = getRandomIndex(chars.length)
        result += chars[randIndex]
    }
    
    return result
}


const password = generatePassword(8)
console.log(`Generated password: ${password}`);