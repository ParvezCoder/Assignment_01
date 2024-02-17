var guestList = ["Kamran khan Tessori", "Mr. Daniyal Khan", "Dr. Zia KIhan", "Parvez Ahmed"];
console.log("I want to invite all of you");
guestList.unshift("Mr. Hamza Kha ");
var middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Mr. Imran Ali (Alexander)");
guestList.push("G.M");
console.log("\nUpdated Invitations:");
guestList.forEach(function (person) {
    console.log("Dear ".concat(person, ", you are all invited to dinner! Please join us."));
});
