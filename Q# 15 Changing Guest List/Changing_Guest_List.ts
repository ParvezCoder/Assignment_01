let guestList: string[] = ["Governor Kamran khan", "Dr. Zia Khan", "Mr. Daniyal Nagori"];

let NotAttend = guestList.pop();
console.log(`Unfortunately, ${NotAttend} not make it to the dinner.`);
guestList.push("Mr. Muhammad Qasim");

console.log("\nUpdated Invitations:");
guestList.forEach(person => {
    console.log(`Dear ${person}, you are invited to dinner!`);
});
