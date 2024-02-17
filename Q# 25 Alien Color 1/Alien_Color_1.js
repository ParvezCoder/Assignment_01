// Version that passes the if test
var alien_color = 'green';
if (alien_color === 'green') {
    console.log("The player just earned 5 points.");
}
// Version that fails the if test (no output)
alien_color = 'red';
if (alien_color === 'green') {
    console.log("The player just earned 6 points."); // This line will not be executed
}
