// List of current usernames
var current_users = ["john", "mary", "alice", "bob", "eve"];
// List of new usernames
var new_users = ["alice", "sam", "harry", "John", "emily"];
// Convert all current usernames to lowercase for case-insensitive comparison
var lowercase_current_users = current_users.map(function (user) { return user.toLowerCase(); });
// Loop through new_users list to check for availability
new_users.forEach(function (new_user) {
    // Convert the new username to lowercase for case-insensitive comparison
    var lowercase_new_user = new_user.toLowerCase();
    // Check if the lowercase_new_user is in lowercase_current_users
    if (lowercase_current_users.includes(lowercase_new_user)) {
        console.log("The username \"".concat(new_user, "\" is not available. Please enter a new username."));
    }
    else {
        console.log("The username \"".concat(new_user, "\" is available."));
    }
});
