"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var places = ["Pakistan", "Karachi", "Islamabad", "Lahore", "Sukkur"];
console.log("Original Order:");
console.log(places);
// Print alphabetical order without modifying original list
console.log("\nAlphabetical Order:");
console.log(__spreadArray([], places, true).sort());
// reverse
console.log("\nReverse Alphabetical Order:");
console.log(__spreadArray([], places, true).sort().reverse());
places.reverse();
console.log("\nReversed Order:");
console.log(places);
// Reverse the order of the list again to get back to original order
places.reverse();
places.sort();
console.log("\nSorted Alphabetical Order:");
console.log(places);
// Sort the list in reverse alphabetical order
places.sort(function (a, b) { return b.localeCompare(a); });
console.log("\nSorted Reverse Alphabetical Order:");
console.log(places);
