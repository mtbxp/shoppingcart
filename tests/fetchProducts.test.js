require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');
  test('testa se a fetchProducts é uma função',() => {
    expect(typeof fetchProducts).toBe('function')
  });

  test('testa se ao receber o argumento computador, a função foi chamada', async () => {
    await fetchProducts('computador');
    const getEndpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador'
    expect(fetch).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledWith(getEndpoint);
  });

  test('testa se o retorno da função ao receber o argumento computador é igual ao objeto computadorSearch', async () =>{
  const resultado = await fetchProducts('computador');
  expect(resultado).toEqual(computadorSearch.results);
  });

  test('testa se ao chamar a função fetchProducts sem argumentos retorna a mensagem de erro You must provide an url', async () => {
  const resultadoVazio = await fetchProducts();
  expect(resultadoVazio).toEqual(new Error('You must provide an url'));
  });
});
