function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great ".concat(magicians[i]);
    }
}
// Original array of magician's names
var magicians = ["Safdar", "Shoukat Ali", "Aijaz", "Mustafa"];
// Calling make_great function to modify the array
make_great(magicians);
// Showing the modified list of magicians
show_magicians(magicians);
