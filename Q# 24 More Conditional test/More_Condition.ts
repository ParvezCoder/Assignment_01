let name1: string = 'John';
let name2: string = 'Mary';

console.log(`Are name1 and name2 equal? ${name1 == name2}`); // False
console.log(`Are name1 and name2 not equal? ${name1 != name2}`); // True

let word1: string = 'HELLO';
let word2: string = 'hello';

console.log(`Is word1 in lowercase equal to word2? ${word1.toLowerCase() == word2}`); // True

let num1: number = 10;
let num2: number = 5;

console.log(`Is num1 greater than num2? ${num1 > num2}`); // True
console.log(`Is num1 less than num2? ${num1 < num2}`); // False
console.log(`Is num1 greater than or equal to num2? ${num1 >= num2}`); // True
console.log(`Is num1 less than or equal to num2? ${num1 <= num2}`); // False


let x: number = 5;
let y: number = 10;

console.log(`Is x greater than 0 and less than 10? ${x > 0 && x < 10}`); // True
console.log(`Is y greater than 0 or less than 5? ${y > 0 || y < 5}`); // True

let fruits: string[] = ['apple', 'banana', 'orange', 'grape'];

console.log(`Is 'apple' in the fruits array? ${fruits.includes('apple')}`); // True

console.log(`Is 'watermelon' not in the fruits array? ${!fruits.includes('watermelon')}`); // True
