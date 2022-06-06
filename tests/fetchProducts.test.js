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
  it("Teste se o retorno da função fetchProducts com o argumento 'computador' é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo.", async () => {
    expect(await fetchProducts("computador")).toBe(computadorSearch)
  })
  it("testa se a função retorna um erro se chamada sem argumento", async () => {
    expect(fetchProducts()).rejects.toEqual(new Error('You must provide an url'))
  })
});
