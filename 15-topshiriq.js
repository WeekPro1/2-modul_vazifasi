function secondLargest(arr) {
    const arr1 = arr.sort();
    return arr1[arr1.length - 2]
}

console.log(secondLargest([1, 3, 4, 5, 3, 7, 9999]));