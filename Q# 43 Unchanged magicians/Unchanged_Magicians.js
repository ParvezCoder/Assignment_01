var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
function show_albums(albums) {
    for (var _i = 0, albums_1 = albums; _i < albums_1.length; _i++) {
        var album = albums_1[_i];
        console.log(album);
    }
}
function make_great(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        greatMagicians.push("the Great ".concat(magician));
    }
    return greatMagicians;
}
function show_magicians(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
var magicians = ["Safdar", "Shoukat Ali", "Aijaz", "Mustafa"];
var greatMagicians = make_great(__spreadArray([], magicians, true));
console.log("Original Magicians:");
show_magicians(magicians);
// Showing the modified list of magicians with "the Great" added
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
