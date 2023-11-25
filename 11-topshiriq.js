function revArray(arr) {
    const newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        const element = arr[i];
        newArr.push(element)
    }
    return newArr;
}
console.log(revArray([3, 4, 5, 6, 7]))