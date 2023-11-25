function sumN(n) {
    m = n.toString();
    let sum = 0;
          for (let i = 0; i < m.length; i++) {
sum += parseInt(m[i]);
        }
          return sum;
}
console.log(sumN(999))