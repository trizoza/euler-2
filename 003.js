const isPrime = (num) => {
    if (typeof num !== "number") return false
    if (num < 2) return false
    const notPrimes = []
    for (let i = 2; i <= num; i++) {
        if (i !== num && num%i === 0 && num/1 > 1) notPrimes.push(num)
        if (notPrimes.length) i = num
    }
    return notPrimes.length ? false : true
}

// let check = isPrime(3);
// console.log(check);

const findPrimes = num => {
    const primes = []
    for (let i =2; i <= num; i++) {
        if (isPrime(i)) {
            primes.push(i)
            console.log(i)
        }
    }
    console.log(primes)
    return primes
}

const candidates = findPrimes(1000);