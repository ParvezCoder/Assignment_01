function storeCarInfo(manufacturer, model) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        var _b = Object.entries(arg)[0], key = _b[0], value = _b[1];
        car[key] = value;
    }
    return car;
}
var myCar = storeCarInfo("Toyota", "Camry", { color: "blue" }, { year: 2022 });
console.log(myCar);
