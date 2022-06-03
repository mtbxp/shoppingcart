require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
test('Testando se fetchProducts é uma função', () => {
  expect(typeof fetchProducts).toEqual('function');
});
test('Passando "computador" como parâmetro, verificar se a fetch foi chamada', async () => {
  await fetchProducts('computador');
  expect(fetch).toHaveBeenCalled();
});
test('Passando o argumento "computador", se a fetch utiliza o endpoint', async () => {
  const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
  await fetchProducts('computador');
  expect(fetch).toHaveBeenCalledWith(endpoint);
})
});
