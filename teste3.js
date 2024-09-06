const fs = require('fs');

// Ler o arquivo JSON
fs.readFile('./arquivos/dados.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }

    // Parse do JSON
    const faturamento = JSON.parse(data);
    
    // Filtrar dias com faturamento > 0
    const diasComFaturamento = faturamento.filter(dia => dia.valor > 0).map(dia => dia.valor);
    
    // Calcular soma e média
    const soma = diasComFaturamento.reduce((acc, val) => acc + val, 0);
    const media = soma / diasComFaturamento.length;

    // Encontrar menor e maior faturamento
    const menor = Math.min(...diasComFaturamento);
    const maior = Math.max(...diasComFaturamento);

    // Contar dias acima da média
    const diasAcimaMedia = diasComFaturamento.filter(v => v > media).length;

    // Exibir resultados
    console.log(`Menor faturamento: ${menor}`);
    console.log(`Maior faturamento: ${maior}`);
    console.log(`Número de dias acima da média: ${diasAcimaMedia}`);
});
