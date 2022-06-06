require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Verifica se retorna erro ao executar a função sem parâmetro', async () => {
    const failRequest = await fetchProducts();
    expect(failRequest).toEqual(new Error('You must provide an url'));
  });

  it('Verifica se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });

  it('verifica se o retorno é igual a computadorSearch', async () => {
    const expected = await fetchProducts('computador');
    expect(expected).toEqual(computadorSearch);
  })
});
