const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function inverterString(str) {
    return str.split('').reverse().join('');
}

rl.question('Informe uma string: ', (input) => {
    const strInvertida = inverterString(input);
    console.log(`String invertida: ${strInvertida}`);
    rl.close();
});