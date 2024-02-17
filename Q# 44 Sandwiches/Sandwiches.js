function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making sandwich with the following items:");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("- " + item);
    }
    console.log("Sandwich is ready!\n");
}
// Call the function three times with different number of arguments
makeSandwich("Bread", "Ham", "Cheese", "Lettuce", "Tomato");
makeSandwich("Baguette", "Chicken", "Mayonnaise");
makeSandwich("Whole wheat bread", "Turkey", "Avocado", "Bacon");
