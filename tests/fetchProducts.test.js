require('../mocks/fetchSimulator');
const {
  fetchProducts
} = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  test('se fetchProducts é uma função', async () => {
    await expect(typeof fetchProducts).toBe('function');
  })
  test('Se quando o argumento é \'computador\' o fecth retorna a URL certa', async () => {
    await fetchProducts('computador');
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    expect(fetch).toBeCalledWith(url);
  })
  test('Se quando o argumento é \'computador\' retorna um arquivo igual ao esperado', async () => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch);
  })
  test('Deve retornar a mensagem \'You must provide an url\' quando a função é chamda sem argumento', async () => {
    expect(await fetchProducts()).toBe('You must provide an url');
  })
});
