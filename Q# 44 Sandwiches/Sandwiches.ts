function makeSandwich(...items: string[]): void {
    console.log("Making sandwich with the following items:");
    for (const item of items) {
        console.log("- " + item);
    }
    console.log("Sandwich is ready!\n");
}

// Call the function three times with different number of arguments
makeSandwich("Bread", "Ham", "Cheese", "Lettuce", "Tomato");
makeSandwich("Baguette", "Chicken", "Mayonnaise");
makeSandwich("Whole wheat bread", "Turkey", "Avocado", "Bacon");
