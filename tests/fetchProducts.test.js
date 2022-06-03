require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('É uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  it('Chama fetch quando o argumento é "computador"', async () => {
    expect.assertions(1);
    const result = await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  it('Chama fetch com o endpoint correto', async () => {
    expect.assertions(1);
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    const result = await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });
  it('Retorna o objeto correto quando o argumento é "computador"', async () => {
    expect.assertions(1);
    const result = await fetchProducts('computador');
    expect(result).toEqual(computadorSearch);
  });
  it('Quando chamada sem parâmetros, lança o erro esperado', async () => {
    expect.assertions(1);
    const expected = new Error('You must provide an url');
    const result = await fetchProducts();
    expect(result).toEqual(expected);
  });
});
