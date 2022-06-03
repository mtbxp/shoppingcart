require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  it('fetchProducts deve ser uma função', () => {
    expect(typeof fetchProducts).toBe('function')
  })
  it('A função fetch deve ser chamada com o endpoint esperado ao ser passado "computador" como argumento', () => {
    fetchProducts('computador');
    const expectedEndPoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    expect(fetch).toBeCalled();
    expect(fetch).toBeCalledWith(expectedEndPoint);
  })
  it('fetchProducts retorna o objeto esperado', async () => {
    expect(typeof fetchProducts('computador')).toBe('object');
    expect(await fetchProducts('computador')).toEqual(computadorSearch.results);
  })
  it('fetchProducts deve retornar um erro ao não receber argumento', async () => {
    const error = new Error('You must provide an url');
    await expect(fetchProducts()).rejects.toEqual(error);
  })
  
});
