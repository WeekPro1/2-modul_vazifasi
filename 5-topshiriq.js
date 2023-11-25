function isPositive(a, b, c, d) {
    let count = 0;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        if (element > 0) {
            count++;
        }
    }
    if (count === arguments.length) {
        return true;
    } else { 
        return false;
    }
}

console.log(isPositive(3, 5, 0, -67, 5))