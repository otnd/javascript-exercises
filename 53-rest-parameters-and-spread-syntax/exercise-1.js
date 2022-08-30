function sum(...num) {
    return num.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
}

console.log(sum(1, 2, 3, 4, 5));