require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it("testa se fetchProducts é uma função", () => {
    expect(typeof fetchProducts).toBe('function')
  })
  it("testa se a função fetchProducts com o argumento 'computador' chama o fetch", async () => {
    await fetchProducts("computador")
    expect(window.fetch).toHaveBeenCalled()
  })
  it("se chamar a função fetchProducts com o argumento 'computador', a função fetch utiliza o endpoint https://api.mercadolibre.com/sites/MLB/search?q=computador", async () => {
    await fetchProducts("computador")
    expect(window.fetch).toHaveBeenLastCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador')
  })
  it("testa se a função retorna um erro se chamada sem argumento", async () => {
    expect(fetchProducts()).rejects.toEqual(new Error('You must provide an url'))
  })
});
