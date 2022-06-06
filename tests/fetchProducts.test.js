require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
it('fetchProducts é uma função', () => {
expect(typeof fetchProducts).toBe('function');
});
it('a função fetch foi chamada', async () => {
  await fetchProducts('computador');
  expect(fetch).toHaveBeenCalled();
  });
it('usando o argumento computador, o endpoint está correto', async () => {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=computador`;
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(url);
    });
it('usando o argumento computador, o resultado é o esperado', async () => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch);
    });
it('sem argumento, lança um erro', async () => {
 expect(await fetchProducts()).toEqual(new Error ('You must provide an url'))
      });
});
