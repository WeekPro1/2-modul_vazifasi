function abc(a, b, c) {
for (let i = 0; i < arguments.length; i++) {
    const element = arguments[i];

if (typeof element !== "number") {
    return `${element} is not number`
} else {
    if (element === 0 || element < 0) {
        return 0;
    }
}

}
}

console.log(abc(7, 0, -3));