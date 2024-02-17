let current_users: string[] = ["john", "mary", "alice", "bob", "eve"];

let new_users: string[] = ["alice", "sam", "harry", "John", "emily"];

let lowercase_current_users: string[] = current_users.map(user => user.toLowerCase());

// Loop through new_users list to check for availability
new_users.forEach(new_user => {
    let lowercase_new_user: string = new_user.toLowerCase();
    if (lowercase_current_users.includes(lowercase_new_user)) {
        console.log(`The username "${new_user}" is not available. Please enter a new username.`);
    } else {
        console.log(`The username "${new_user}" is available.`);
    }
});
