function isPrime(num){
    if (num < 2) {
        return false
    }

    let divisorCount = 0

    for (let i = 1; i <= num; i++) {
        if (num%i==0){
            divisorCount += 1
        }    
    }

    if (divisorCount !== 2) {
        return false
    }

    return true
}


function sumPrimes (num) {
    if (num < 2) {
        return 0
    }
    
    let total = 0

    for (let i = 2; i <= num; i++) {
        if (isPrime(i)){
            total += i
        }
    }

    return total
}

console.log(sumPrimes(977));