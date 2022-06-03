require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  test('If fetchProducts is a function', () => {
    expect(typeof fetchProducts).toBe('function');
  });

  test('If fetch is called when calling fetchProducts with argument "computador"', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });

  test('If endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador" is acessed whencalling fetchProducts with argument "computador"', async () => {
    const expected = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');
    expect(fetch).toBeCalledWith(expected);
  });

  test('If when calling fetchProducts with argument "computador" the return is the expected object', async () => {
    const response = await fetchProducts('computador');
    expect(response).toEqual(computadorSearch);
  });

  test('If when calling fetchProducts with no argument the return is the error message "You must provide an url"', async () => {
    const error = new Error('You must provide an url');
    await expect(fetchProducts()).resolves.toThrow(error);
  });
});
