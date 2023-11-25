const array = [3, 4, 5, 6, 8, 3, 4, 3];
function digitsN(n) {
   const d = array.filter((number) => number === n);
 return `arrayda ${d.length} ta ${n} bor`;
}
console.log(digitsN(4))