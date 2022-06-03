require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  }),
  it('se chamada com o argumento computador invoca a função fetch', async () => {
    expect.assertions(1);
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  }),
  it('se chamada com o argumento computador a função fetch utiliza o endpoint correto', async () => {
    const URL = `https://api.mercadolibre.com/sites/MLB/search?q=computador`
    await fetchProducts('computador');
    expect(fetch).toBeCalledWith(URL);
  }),
  it('se chamada com o argumento computador retorna a computadorSearch', async () => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch);
  }),
  it('se chamada sem argumento retorna o erro You must provide an url', async () => {
    try {
      await fetchProducts();
    } catch(error) {
      expect(error).toEqual(new Error('You must provide an url'));
    }    
  }),
  fail('Teste vazio');
});
