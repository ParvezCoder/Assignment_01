let fruits: { name: string, color: string, isTasty: boolean }[] = [
    { name: "Apple", color: "Red", isTasty: true },
    { name: "Banana", color: "Yellow", isTasty: true },
    { name: "Orange", color: "Orange", isTasty: true },
    { name: "Grapes", color: "Purple", isTasty: true },
    { name: "Lemon", color: "Yellow", isTasty: false }
];

// Print information about each fruit
console.log("Information about Fruits:");
fruits.forEach(fruit => {
    console.log(`Name: ${fruit.name}`);
    console.log(`Color: ${fruit.color}`);
    console.log(`Tasty: ${fruit.isTasty ? 'Yes' : 'No'}`);
    console.log("-------------------------");
});
