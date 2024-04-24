

const numbers = [2, 3, 4, 5, 6, 7, 9];
const output = [];
for(const number of numbers){
    const doubled = number * 2;
    output.push(doubled);
}
console.log(output);

const double = numbers.map(x => x * 2);
console.log(double);
const half = numbers.map(x => x / 2);
console.log(half);