require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  test('se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  test('se a função fetchProducts com o argumento \'computador\' e teste se fetch foi chamada', async () => {
    await fetchProducts('computador');
    expect(fetch).toBeCalled();
  });
  test('se, ao chamar a função fetchProducts com o argumento \'computador\', a função fetch utiliza o endpoint \'https://api.mercadolibre.com/sites/MLB/search?q=computador\'', async () => {
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');
    expect(fetch).toBeCalledWith(endpoint);
  });
  test('se o retorno da função fetchProducts com o argumento \'computador\' é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    const fetch = await fetchProducts('computador');
    expect(fetch).toEqual(computadorSearch);
  });
  test('se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url', async () =>  {
    const fetch = await fetchProducts();
    expect(fetch).toEqual(new Error('You must provide an url'));
  });
});
