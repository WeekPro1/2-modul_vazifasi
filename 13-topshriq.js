function equalsA(a, array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === a) {
                return(`${array[i]} va ${array[j]} ni yig'indisi ${a} ga teng.`);
            }
        }
    }
}

console.log(equalsA(8, [2, 5, 8, 3]))