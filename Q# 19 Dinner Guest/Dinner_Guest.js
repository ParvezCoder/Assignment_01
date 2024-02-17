var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var guests = ["Governor Kamran Khan", "Dr. Zia Khan", "Mr. Daniyal Kahn"];
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are invited to dinner!"));
});
var places = ["Pakistan", "Karachi", "Islamabad", "Lahore", "Sukkur"];
console.log("\nOriginal Order:");
console.log(places);
//  alphabetical order without modifying original list
console.log("\nAlphabetical Order:");
console.log(__spreadArray([], places, true).sort());
console.log("\nOriginal Order:");
console.log(places);
// Print reverse alphabetical order without modifying original list
console.log("\nReverse Alphabetical Order:");
console.log(__spreadArray([], places, true).sort().reverse());
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
places.sort(function (a, b) { return b.localeCompare(a); });
console.log("\nSorted Reverse Alphabetical Order:");
console.log(places);
console.log("\nNumber of people invited to dinner: ".concat(guests.length));
