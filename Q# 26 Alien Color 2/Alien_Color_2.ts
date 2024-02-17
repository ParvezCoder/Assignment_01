let alien_color: string = 'green';

if (alien_color === 'green') {
    console.log("The player just earned 5 points for shooting the alien.");
} else {
    console.log("The player just earned 10 points.");
}

// Version that runs the else block
alien_color = 'red';

if (alien_color === 'green') {
    console.log("The player just earned 5 points for shooting the alien."); // This line will not be executed
} else {
    console.log("The player just earned 10 points.");
}
