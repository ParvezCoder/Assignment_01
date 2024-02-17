var guestList = ["Governor Kamran khan", "Dr. Zia Khan", "Mr. Daniyal Nagori"];
var NotAttend = guestList.pop();
console.log("Unfortunately, ".concat(NotAttend, " not make it to the dinner."));
guestList.push("Mr. Muhammad Qasim");
console.log("\nUpdated Invitations:");
guestList.forEach(function (person) {
    console.log("Dear ".concat(person, ", you are invited to dinner!"));
});
