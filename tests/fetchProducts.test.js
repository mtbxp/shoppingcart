require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // Testando se é função.
  it('Testando se é função.', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  it('Testando se passando um parametro na função, o fetch vai ser chamado', () => {
    fetchProducts('computador');
    expect(fetch()).toHaveBeenColled();
  });
  it('Testando se ao chamar a função o endpoint está correto', () => {
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    fetchProducts('computador');
    expect(fetch).toHaveBeenColledWith('endpoint');
  });
  it('Testando se o retono da função é um objeto igual ao computadorSearch', async () => {
    const returnFetch = await fetchProducts('computador');
    expect(returnFetch).toEqual(computadorSearch);
  });
  it('Deve retornar um erro', async() => {
    const retorno = await fetchProducts();
    const errorMsg = new Error ('You must provide an url');
    expect(retorno).toEqual(errorMsg);
  });
});
