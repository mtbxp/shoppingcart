require("../mocks/fetchSimulator");
const { fetchProducts } = require("../helpers/fetchProducts");
const computadorSearch = require("../mocks/search");

describe("1 - Teste a função fetchProducts", () => {
  test("Verifica se fetchProducts é uma função", () => {
    expect(typeof fetchProducts).toEqual("function");
  });
  test("Verifica se fetchProducts com o argumento 'computador' chamou fetch", async () => {
    await fetchProducts("computador");
    expect(fetch).toHaveBeenCalled();
  });
  test("Verifica se fetchProducts com o argumento 'computador' utiliza a URL especificada", async () => {
    await fetchProducts("computador");
    expect(fetch).toHaveBeenCalledWith(
      "https://api.mercadolibre.com/sites/MLB/search?q=computador"
    );
  });
  test("Verifica se fetchProducts com o argumento 'computador' retorna uma estrutura de dados igual ao objeto computadorSearch", async () => {
    expect(typeof await fetchProducts("computador")).toEqual("object");
    expect(await fetchProducts("computador")).toEqual(computadorSearch);
  });
  test("Verifica se a função fetchProducts sem argumento, retorna um erro com a mensagem You must provide an url", () => {
    expect(() => fetchProducts()).toThrow("You must provide an url");
    expect(fetchProducts).toThrow("You must provide an url");
  });
});
