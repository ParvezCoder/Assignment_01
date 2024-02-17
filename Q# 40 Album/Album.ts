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

// Creating three different albums
const album1: Album = make_album("Artist1", "Album1");
const album2: Album = make_album("Artist2", "Album2", 12);
const album3: Album = make_album("Artist3", "Album3");

// Printing each album
console.log(album1);
console.log(album2);
console.log(album3);
