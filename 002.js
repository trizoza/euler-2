let next = 2
let prev = 1
let holder
const nums = []

while (next < 4000000) { 
  if (prev === 1) {
    nums.push(prev)
  }
    nums.push(next)
    holder = prev
    prev = next
    next = holder + next
}

console.log(nums)
// expected output [1,2,3,5,8,13,21,34,55,89...]

let sum = 0

nums.forEach(n => {
	if (n%2===0) sum += n
})

console.log(sum)
