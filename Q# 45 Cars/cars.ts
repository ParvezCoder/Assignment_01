interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
}

function storeCarInfo(manufacturer: string, model: string, ...args: { [key: string]: any }[]): Car {
    const car: Car = {
        manufacturer: manufacturer,
        model: model
    };

    for (const arg of args) {
        const [key, value] = Object.entries(arg)[0];
        car[key] = value;
    }

    return car;
}

const myCar: Car = storeCarInfo("Toyota", "Camry", { color: "blue" }, { year: 2022 });

console.log(myCar);
