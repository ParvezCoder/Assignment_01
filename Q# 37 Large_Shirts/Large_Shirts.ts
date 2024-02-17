function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`Size: ${size}, Message: ${message}`);
}

// Making a large shirt with default message
make_shirt();

make_shirt("Medium");

// Making a shirt of any size with a different message
make_shirt("Small", "TypeScript is awesome!");
