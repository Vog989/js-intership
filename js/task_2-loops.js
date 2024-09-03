const a = 2;
const b = 10;

let sum = 0;

for (let i = a; i <= b; ++i) {
    if (i % 2 === 0) {
        sum += i;
    }
}

console.log(sum);
