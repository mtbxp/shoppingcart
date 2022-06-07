require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  //fail('Teste vazio');
  test('Testar se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toEqual('function');
  });
  test('Testar se a função fetchProducts com o argumento "computador" e teste se fetch foi chamada', async () => {
    await fetchProducts("computador");
    expect(fetch).toHaveBeenCalled();
  });
  test('Testar se a função fetchProducts com o argumento "computador" ultilizando o endpoint', async () => {
   await fetchProducts("computador");
   expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });//
  test('Testar se o fetchProducts "computador" é um objeto igual a computadorSearch', async () => {
   const expected = await fetchProducts("computador");
    expect(expected).toEqual(computadorSearch);
  });
  test('Testar se o fetchProducts retorna um error', async () => {
    const expected = await fetchProducts();
    expect(expected).toEqual(new Error('You must provide an url'))
  });
});
