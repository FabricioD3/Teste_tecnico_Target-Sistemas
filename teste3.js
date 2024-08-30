const fs = require('fs');

const faturamentoJson = `{
    "faturamento": [1500, 2000, 1800, 2200, 0, 1700, 1900, 0, 0, 2500, 2100, 2300, 2400, 0, 0, 2200, 1900, 2000, 2100, 0, 0, 2000, 2200, 2500, 0, 0, 1900, 1800, 2000, 2200, 2400, 2500, 0, 0, 2100, 1900, 2000, 1800, 2200, 0, 0, 2000, 2100, 2200, 2300]
}`;

const faturamento = JSON.parse(faturamentoJson).faturamento;
const diasComFaturamento = faturamento.filter(v => v > 0);
const soma = diasComFaturamento.reduce((acc, val) => acc + val, 0);
const media = soma / diasComFaturamento.length;

const menor = Math.min(...diasComFaturamento);
const maior = Math.max(...diasComFaturamento);
const diasAcimaMedia = diasComFaturamento.filter(v => v > media).length;

console.log(`Menor faturamento: ${menor}`);
console.log(`Maior faturamento: ${maior}`);
console.log(`Número de dias acima da média: ${diasAcimaMedia}`);
