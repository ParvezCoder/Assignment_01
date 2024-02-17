var fruits = [
    { name: "Apple", color: "Red", isTasty: true },
    { name: "Banana", color: "Yellow", isTasty: true },
    { name: "Orange", color: "Orange", isTasty: true },
    { name: "Grapes", color: "Purple", isTasty: true },
    { name: "Lemon", color: "Yellow", isTasty: false }
];
// Print information about each fruit
console.log("Information about Fruits:");
fruits.forEach(function (fruit) {
    console.log("Name: ".concat(fruit.name));
    console.log("Color: ".concat(fruit.color));
    console.log("Tasty: ".concat(fruit.isTasty ? 'Yes' : 'No'));
    console.log("-------------------------");
});
