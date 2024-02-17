import { reverse } from "dns";

let places: string[] = ["Pakistan", "Karachi", "Islamabad", "Lahore", "Sukkur"];

console.log("Original Order:");
console.log(places);

// Print alphabetical order without modifying original list
console.log("\nAlphabetical Order:");
console.log([...places].sort());

// reverse
console.log("\nReverse Alphabetical Order:");
console.log([...places].sort().reverse());


places.reverse();
console.log("\nReversed Order:");
console.log(places);

// Reverse the order of the list again to get back to original order
places.reverse();

places.sort();
console.log("\nSorted Alphabetical Order:");
console.log(places);

// Sort the list in reverse alphabetical order
places.sort((a, b) => b.localeCompare(a));
console.log("\nSorted Reverse Alphabetical Order:");
console.log(places);
