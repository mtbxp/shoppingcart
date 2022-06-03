require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  it('É uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  })
  it('Com o argumento computador, retorna o fetch', () => {
    expect(fetchProducts(computador)).toBe('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  })
  it('Com o argumento computador, utiliza endpoint', () => {
    expect(fetchProducts(computador)).toBeCalledWith(computador);
  })
  it('Testa se o retorno é igual computadorSearch', () => {
    expect(fetchProducts(computador)).toEqual(computadorSearch);
  })
  it('Sem argumento retorna erro', () => {
    expect(fetchProducts('')).toThrow('You must provide an url');
  })
});
