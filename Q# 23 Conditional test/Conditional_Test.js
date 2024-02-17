var car = 'subaru';
console.log("Is car equal to 'subaru'? " + (car == 'subaru')); // True
console.log("Is car not equal to 'toyota'? " + (car != 'toyota')); // True
console.log("Is car length greater than 0? " + (car.length > 0)); // True
console.log("Does car start with 'su'? " + car.startsWith('su')); // True
console.log("Does car end with 'ru'? " + car.endsWith('ru')); // True
console.log("Is car in uppercase 'SUBARU'? " + (car.toUpperCase() == 'SUBARU')); // true
// Test 7: Is car in lowercase 'subaru'?
console.log("Is car in lowercase 'subaru'? " + (car.toLowerCase() == 'subaru')); // True
// Test 8: Is car includes 'bar'?
console.log("Does car include 'bar'? " + car.includes('bar')); // False
// Test 9: Is car not identical to 'subaru'?
console.log("Is car not identical to 'subaru'? " + (car !== 'subaru')); // False
// Test 10: Is car identical to 'subaru'?
console.log("Is car identical to 'subaru'? " + (car === 'subaru')); // True
