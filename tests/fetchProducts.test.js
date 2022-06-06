require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  test('Testa se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });

  test('Ao executar a função fetchProducts com o argumento (computador) fetch deve ser chamada', async () => {
    await fetchProducts('computador');
    expect(fetch).toBeCalled();
  });

  test('Ao chamar a função fetchProducts com o argumento computador, a função fetch utiliza o endpoint (https://api.mercadolibre.com/sites/MLB/search?q=computador)', async () => {
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');
    expect(fetch).toBeCalledWith(endpoint);
  })
  test('Com o argumento (computador) fetchProducts retorna uma estrutura de dados igual ao objeto computadorSearch', async () => {
    const response = await fetchProducts('computador');
    expect(response).toEqual(computadorSearch);
  })
  test('Ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: (You must provide an url)', async () => {
    const response = await fetchProducts();
    expect(response).toEqual(new Error('You must provide an url'));
  })
});

