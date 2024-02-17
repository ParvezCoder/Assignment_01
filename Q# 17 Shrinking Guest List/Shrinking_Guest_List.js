var guestList = ["Madam Hira", "Dr. Zia Khan", "Imran Ali", "Parvez Ahmed"];
console.log("Welcome all of you  invite for dinner");
guestList.unshift("Daniyal nagori");
var middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Kamran Khan Tessori");
guestList.push("Mr. SadamHussain");
// Print a new set of invitation messages
console.log("\nUpdated Invitations:");
guestList.forEach(function (person) {
    console.log("Dear ".concat(person, ", you areinvited  dinner"));
});
