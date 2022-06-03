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
    expect(await fetchProducts()).toEqual(computadorSearch);
  })
  it('fetchProducts deve retornar um erro ao não receber argumento', async () => {
    await expect(fetchProducts()).rejects.toMatch('Error');
  })
  
});
