require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Testa se é uma função', () => {
    const actual = fetchProducts;
    const expected = 'function';
    expect(typeof actual).toBe(expected);
  });

  it('Testa se fetch é chamada', () => {
    fetchProducts('computador');
    const expected = fetch;
    expect(expected).toHaveBeenCalled();
  });

  it('Teste se fetch utiliza um determinado endpoint', () => {
    fetchProducts('computador');
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    const expected = fetch;
    expect(expected).toBeCalledWith(endpoint);
  });

  it('Testa o retorno da função fetchProducts', async () => {
    const actual = await fetchProducts('computador');
    const expected = computadorSearch;
    expect(actual).toEqual(expected);
  });

  it('Testa se é lançado um erro', () => {
    const actual = fetchProducts();
    const expected = 'You must provide an url';
    expect(actual).rejects.toThrow(expected);
  });
});
