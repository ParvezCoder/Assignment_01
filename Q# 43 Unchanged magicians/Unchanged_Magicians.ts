interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

function make_album(artist: string, title: string, tracks?: number): Album {
    const album: Album = {
        artist: artist,
        title: title
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

function show_albums(albums: Album[]): void {
    for (const album of albums) {
        console.log(album);
    }
}

function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (const magician of magicians) {
        greatMagicians.push(`the Great ${magician}`);
    }
    return greatMagicians;
}

function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}
const magicians: string[] = ["Safdar", "Shoukat Ali", "Aijaz", "Mustafa"];


const greatMagicians: string[] = make_great([...magicians]);

console.log("Original Magicians:");
show_magicians(magicians);

// Showing the modified list of magicians with "the Great" added
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
