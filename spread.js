
const max = Math.max(12, 13, 41, 56);
// console.log(max);
const numbers = [15, 42, 54, 65, 456];
const largest = Math.max(...numbers);
// console.log(largest);

const numbers2 = [11, 22, ...numbers];
console.log(numbers2);
const mini = Math.min(123, 12, ...numbers);
console.log(mini);