var name1 = 'John';
var name2 = 'Mary';
console.log("Are name1 and name2 equal? ".concat(name1 == name2)); // False
console.log("Are name1 and name2 not equal? ".concat(name1 != name2)); // True
var word1 = 'HELLO';
var word2 = 'hello';
console.log("Is word1 in lowercase equal to word2? ".concat(word1.toLowerCase() == word2)); // True
var num1 = 10;
var num2 = 5;
console.log("Is num1 greater than num2? ".concat(num1 > num2)); // True
console.log("Is num1 less than num2? ".concat(num1 < num2)); // False
console.log("Is num1 greater than or equal to num2? ".concat(num1 >= num2)); // True
console.log("Is num1 less than or equal to num2? ".concat(num1 <= num2)); // False
var x = 5;
var y = 10;
console.log("Is x greater than 0 and less than 10? ".concat(x > 0 && x < 10)); // True
console.log("Is y greater than 0 or less than 5? ".concat(y > 0 || y < 5)); // True
var fruits = ['apple', 'banana', 'orange', 'grape'];
console.log("Is 'apple' in the fruits array? ".concat(fruits.includes('apple'))); // True
console.log("Is 'watermelon' not in the fruits array? ".concat(!fruits.includes('watermelon'))); // True
