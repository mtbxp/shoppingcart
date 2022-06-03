require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  it('É uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  })
  it('Com o argumento computador, retorna o fetch', async () => {
    await fetchProducts("computador");
    expect(fetch).toHaveBeenCalled();
  })
  it('Com o argumento computador, utiliza endpoint', async () => {
    await fetchProducts("computador");
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  })
  it('Testa se o retorno é igual computadorSearch', async () => {
    const resp = await fetchProducts("computador")
    expect(resp).toEqual(computadorSearch);
  })
  it('Sem argumento retorna erro', async () => {
    const resp = await fetchProducts()
    expect(resp).toEqual(new Error('You must provide an url'));
  })
});
