// let a = 5, b = 25, c = 45;
//
// let max = a;
// if (b > max) {
//     max = b;
// }
// if (c > max) {
//     max = c;
// }
//
// let min = a;
// if (b < min) {
//     min = b;
// }
//
// if (c < min) {
//     min = c;
// }
//
// console.log("Наибольшее число:", max);
// console.log("Наименьшее число:", min);


// let a = 5, b = 25, c = 15;
//
// let max = a > b ? (a > c ? a : c) : (b > c ? b :c);
// let min = a < b ? (a < c ? a : c) : (b < c ? b : c);
//
// console.log("Наибольшее число:", max);
// console.log("Наименьшее число:", min);

let a = 5, b = 25, c = 15;

console.log(`Наибольшое число: ${Math.max(a, b, c)}`, `Наименьшее число: ${Math.min(a, b, c)}`);