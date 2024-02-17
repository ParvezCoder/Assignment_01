function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
}

// Original array of magician's names
const magicians: string[] = ["Safdar", "Shoukat Ali", "Aijaz", "Mustafa"    ];

// Calling make_great function to modify the array
make_great(magicians);

// Showing the modified list of magicians
show_magicians(magicians);
