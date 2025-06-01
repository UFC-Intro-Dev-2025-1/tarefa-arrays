// Tarefa: Treinando Arrays de forma global

// Complete o código para cumprir com as demandas abaixo.

// 1. Criar um array de números.
// 2. Ajustar a função mostrarArray para exibir o tamanho do array corretamente.
// 3. Adicionar elementos 60 e 70 ao array.
// 4. Exibir o array usando a função mostrarArray.
// 5. Remover o último elemento do array usando o método pop.
// 6. Exibir o array usando a função mostrarArray.
// 7. Mostrar o elemento excluído.
// 8. Mostrar cada elemento do array em uma linha usando o método forEach.
// 9. Criar um novo array com os valores dobrados usando o método map.
// 10. Calcular a soma de todos os elementos do array usando o método reduce.

const numeros: number[] = [10, 20, 30, 40, 50];

function mostrarArray(array: number[]): void {
    console.log('--------------------------------');
    console.log(`Tamanho: ${array.length}`); // completar
    console.log(`Array: ${array}`); // completar
}
mostrarArray(numeros);

numeros.push(60, 70);
mostrarArray(numeros);

const elementoExcluido = numeros.pop();
mostrarArray(numeros);
console.log(`Elemento excluído: ${elementoExcluido}`);

numeros.forEach((numero) => {
    console.log(`${numero}`);
});

const dobrados = numeros.map((numero) => numero * 2);
mostrarArray(dobrados);

const soma = numeros.reduce(
    (acumulador, valorAtual) => acumulador + valorAtual
);
console.log(`Soma dos elementos do array: ${soma}`);

// para rodar o código, use o comando:
// npm run build
