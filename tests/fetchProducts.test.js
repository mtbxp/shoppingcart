require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  test('se é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  test('se ao chamar com o argumento "computador", o fetch foi chamado', async () => {
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  test(`passando o argumento "computador", a função fetch utiliza o endpoint
  "https://api.mercadolibre.com/sites/MLB/search?q=computador"`, async () => {
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    fetchProducts('computador');
    expect(fetch).toHaveReturnedWith(url);
  });
});
