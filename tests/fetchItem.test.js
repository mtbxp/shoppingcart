require("../mocks/fetchSimulator");
const { fetchItem } = require("../helpers/fetchItem");
const item = require("../mocks/item");

describe("2 - Teste a função fetchItem", () => {
  // implemente seus testes aqui
  it("Teste se fetchItem é uma função", () => {
    expect(typeof fetchItem).toBe("function");
  });

  it('Execute a função fetchItem("MLB1615760527") para saber se o fetch foi chamada', async () => {
    await fetchItem("MLB1615760527")
    expect(fetch).toHaveBeenCalled();
  });
  it('Execute a função fetchItem ("MLB1615760527") com endpoint correto', async () => {
    await fetchItem("MLB1615760527");
    expect.assertions(1);
    const url = "https://api.mercadolibre.com/items/MLB1615760527";
    expect(fetch).toHaveBeenCalledWith(url);
  });

  it('Teste se fetchItem("MLB1615760527") é uma estrutura igual ao objeto item', async () => {
    const result = await fetchItem("MLB1615760527");
    expect(result).toBe(item);
  });

  it("Teste se fetchItem() retorna um error", async () => {
    try {
      await fetchItem();
    } catch (err) {
      expect(err).toEqual("You must provide an url");
    }
  });
});
