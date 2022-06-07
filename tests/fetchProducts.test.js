require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('testa se é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  it('testa se fecth foi chamada com o argumento computador', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  it('testa se chamada com o argumento computador retorna a api', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });
  it('testa se chamada com o argumento computador é igual ao objeto de computadorSearch', async () => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch);
  });
  it('testa se chamada sem argumento retorna o erro esperado', async () => {
    expect(await fetchProducts()).toEqual(new Error('You must provide an url'));
  });
});
