function isFibonacci(num) {
    let a = 0, b = 1, c;
    if (num === a || num === b) return true;

    while (b <= num) {
        c = a + b;
        a = b;
        b = c;

        if (b === num) return true;
    }
    return false;
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Informe um número: ', (input) => {
    const num = parseInt(input);
    if (isFibonacci(num)) {
        console.log(`${num} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${num} não pertence à sequência de Fibonacci.`);
    }
    rl.close();
});
