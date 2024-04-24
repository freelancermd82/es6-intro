
/**
----------Must Know-----------
1. spread operator[...numbers]
2. destructuring
3. map
4. forEach
5. filter
6.find
7. class
8. object
9. reduce[accumulator has two parameter, initial value]
10. optional chaining
11. default parameter
12. template string ``
------------Arrow function-----------
13.   ----
  13.1 single parameter arrow function
  13.2 two parameter arrow function
14. var, let, const
15. break up with var

*/

const numbers = [12, 123, 32, 41];
let salary = 450;
salary = 500;

// 2. default parameters
function calculateSalary(salary, tax = 0.25, bonus = 0){
    const remaining = salary - salary * tax;
    const total = remaining + bonus;
    return total
}
const result = calculateSalary(1233);
console.log(result);

// 3. template string

const elementHtml = `
    <div>
        <h3>Name: </h3>
        <h3>Name: </h3>
    </div>
`
//4. Arrow function
const doubles = x => x  * 2;
const emptyArrow = () => {

}
//5. spread operator
const ages = [12, 13, 21, 23, 14, 15, 16];
console.log(ages);
const newAges = [...ages, 44, 55];
const newAges2 = Math.min(...newAges);
console.log(newAges);
console.log(newAges2);

// 6. destructuring
const {x, y, ...z} = {x: 45, y: 52, z: 45, salary: 1234};
const [a, b, ...r] = [12, 15, 14, 13];
