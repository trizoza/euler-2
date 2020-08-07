const isPrime = (num) => {
    if (typeof num !== "number") return false
    if (num < 2) return false
    const primes = []
    for (let i = 2; i <= num; i++) {
        if (i !== num && num%i === 0 && num/1 > 1) primes.push(num)
    }
    return primes.length ? false : true
}

let check = isPrime(3);
console.log(check);