const isPrime = (num) => {
  for (let j = num - 1; j > 1; j -= 1) {
    if (num % j === 0) {
      return false;
    }
  }
  return true;
};

const findHighestPrimeFactor = (cap) => {
  const primeDividers = [];
  for (let i = 3; i <= cap; i += 2) {
    if (cap % i === 0) {
      if (!primeDividers.includes(i) && isPrime(i)) primeDividers.push(i);
      cap = cap / i;
    }
  }
  return primeDividers[primeDividers.length - 1];
};

const highest = findHighestPrimeFactor(600851475143);
console.log("highest ", highest);