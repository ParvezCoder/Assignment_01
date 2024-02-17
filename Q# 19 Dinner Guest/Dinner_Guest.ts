let guests: string[] = ["Governor Kamran Khan", "Dr. Zia Khan", "Mr. Daniyal Kahn"];

guests.forEach(guest => {
    console.log(`Dear ${guest}, you are invited to dinner!`);
});

let places: string[] = ["Pakistan", "Karachi", "Islamabad", "Lahore", "Sukkur"];
console.log("\nOriginal Order:");
console.log(places);

//  alphabetical order without modifying original list
console.log("\nAlphabetical Order:");
console.log([...places].sort());

console.log("\nOriginal Order:");
console.log(places);

// Print reverse alphabetical order without modifying original list
console.log("\nReverse Alphabetical Order:");
console.log([...places].sort().reverse());

places.reverse();
console.log("\nReversed Order:");
console.log(places);

places.reverse();
console.log("\nOriginal Order:");
console.log(places);

places.sort();
console.log("\nSorted Alphabetical Order:");
console.log(places);

// Sort the list in reverse alphabetical order
places.sort((a, b) => b.localeCompare(a));
console.log("\nSorted Reverse Alphabetical Order:");
console.log(places);
console.log(`\nNumber of people invited to dinner: ${guests.length}`);
