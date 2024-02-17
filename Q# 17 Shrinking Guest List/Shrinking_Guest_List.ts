let guestList: string[] = ["Madam Hira", "Dr. Zia Khan", "Imran Ali", "Parvez Ahmed"];

console.log("Welcome all of you  invite for dinner");

guestList.unshift("Daniyal nagori");

let middleIndex: number = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Kamran Khan Tessori");


guestList.push("Mr. SadamHussain");

// Print a new set of invitation messages
console.log("\nUpdated Invitations:");
guestList.forEach(person => {
    console.log(`Dear ${person}, you areinvited  dinner`);
});
