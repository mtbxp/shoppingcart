require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const fetchSimulator = require('../mocks/fetchSimulator');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  test('testa se fetchProducts usa o fetch', async () => {
    expect(typeof fetchProducts).toBe('function')
  })
  test('Testa se fetch foi chamada', async () => {
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalled()
  })
  test('se o endpoint ta correto', async () => {
    await fetchProducts('computador')
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador')
  })
  test('Se o retorno da minha função ta certo', async () => {
    const result = await fetchProducts('computador')
    expect(typeof result).toBe('object')
  })
});
// npm test fetchProducts