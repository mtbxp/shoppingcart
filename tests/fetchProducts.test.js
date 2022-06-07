require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');
const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';

describe('1 - Teste a função fetchProducts', () => {

it('test if fetchProducts is a function', () => {
    expect(typeof fetchProducts).toBe('function');
    });

it('test if function fetchProducts call fetch using the argument `computador`', async () => {
  await fetchProducts('computador');
  expect(fetch).toHaveBeenCalled();
});

it('test if when the function fetchProducts as an argument `computador`, the function use the right endpoint ', () => {
  fetchProducts('computador');
  expect(fetch).toHaveBeenCalledWith(url);
})

it('test if the return of fetchProducts as an argument `cumputador is the same estructure of computadorSearch', async () => {
  const testEstructure = await fetchProducts('computador');
  expect(testEstructure).toStrictEqual(computadorSearch);
})

it('test if you call the function without an argument return the error `You must provide an url`', async () => {
  const response = await fetchProducts();
  expect(response).toEqual(new Error ('You must provide an url'));
});
});
