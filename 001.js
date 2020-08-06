const matchingNumbers = []

for (let i =1; i < 1000; i++) {
	if (i%3 === 0 || i%5 === 0) {
		matchingNumbers.push(i)
	}
}

const sum = matchingNumbers.reduce((a,b) => a+b)

console.log(sum);

