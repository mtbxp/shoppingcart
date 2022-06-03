require("../mocks/fetchSimulator");
const { fetchProducts } = require("../helpers/fetchProducts");
const computadorSearch = require("../mocks/search");

describe("1 - Teste a função fetchProducts", () => {
  it("Testa se fetchProducts é uma função", () => {
    expect(typeof fetchProducts).toBe("function");
  });
  it("Testa se a função fetchProducts com o argumento 'computador' e teste se fetch foi chamada", async () => {
    await fetchProducts("computador");
    expect(fetch).toHaveBeenCalled();
  });
  it("Teste se, ao chamar a função fetchProducts com o argumento 'computador', a função fetch utiliza o endpoint 'https://api.mercadolibre.com/sites/MLB/search?q=computador'", async () => {
     await fetchProducts("computador")
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });
  it("Testa se o retorno da função fetchProducts com o argumento 'computador' é uma estrutura de dados igual ao objeto computadorSearch", async () => {
    const expected = await fetchProducts("computador")
    expect(expected).toEqual(computadorSearch);
  });
  it("Testa se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: 'You must provide an url'", async () => {
    const expected = await fetchProducts()
    expect(expected).toEqual(new Error('You must provide an url'));
  });
});
