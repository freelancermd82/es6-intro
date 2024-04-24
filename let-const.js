
// do not use var
// Not more use var


// ----let : let it to reassing----
// let money = 25;
// console.log(money);
// money = 30;
// console.log(money);

const taka = 10;
const total = 'this my amount ' + taka;
console.log(total);

const numbers = [12, 14, 18, 25, 65, 45];
numbers.push(111);
console.log(numbers);
numbers[0] = 10;
console.log(numbers);

// const student = {
//     name: 'mofiz',
//     address: 'rangpur'
// }
// student.name = 'mofazzal';
// console.log(student.name);

for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}