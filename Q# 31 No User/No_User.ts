// Assignment 28: Stages of Life
// Define the list of users
let users: string[] = []; // Empty list

// Check if the list of users is not empty
if (users.length > 0) {
    // Variable representing age
    let age: number = 30; // Example age

    // Check the age and print the corresponding stage of life
    if (age < 2) {
        console.log("The person is a baby.");
    } else if (age < 4) {
        console.log("The person is a toddler.");
    } else if (age < 13) {
        console.log("The person is a kid.");
    } else if (age < 20) {
        console.log("The person is a teenager.");
    } else if (age < 65) {
        console.log("The person is an adult.");
    } else {
        console.log("The person is an elder.");
    }
} else {
    console.log("We need to find some users!");
}
users = [];

// Check if the list of users is empty after removal
if (users.length === 0) {
    console.log("We need to find some users!");
}
