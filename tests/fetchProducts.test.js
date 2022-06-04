require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {

it('Testar se fetchProducts é uma função', () => {
  expect(typeof fetchProducts).toEqual('function');
});

it('Execute a função fetchProducts com o argumento "computador" e teste se fetch foi chamada', async () => {
  await fetchProducts("computador");
  expect(fetch).toHaveBeenCalled();
});

it('Teste fetchProducts "computador" com endpoint correto', async () => {
  await fetchProducts("computador");
  expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
});

test('Teste se fetchProducts(computador) é um objeto igual a computadorSearch',async () => {
  const result = await fetchProducts('computador');
  expect(result).toBe(computadorSearch);
});

it('Teste fetchProducts() retorna um err', async () => {
  try {
    await fetchProducts();
  } catch (err) {
    expect(err).toEqual(new Error('You must provide an url'));
  }
});
});
