
// function declaration
function add(first, second){
    const total = first + second;
    return total;
}

const number = 56;
// function expressing
const add1 = function add1(first, second){
    const total = first + second;
    return total;
}
// arrow function 
const add6 = (first, second) => first + second;
const result = add(10, 20);
console.log(result);