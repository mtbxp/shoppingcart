require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  test("Verifica se fetchItem é uma função", () => {
    expect(typeof fetchItem).toEqual("function");
  });
  test("Verifica se fetchItem com o argumento 'MLB1615760527' chamou fetch", async () => {
    await fetchItem("MLB1615760527");
    expect(fetch).toHaveBeenCalled();
  });
  test("Verifica se fetchItem com o argumento 'MLB1615760527' utiliza a URL especificada", async () => {
    await fetchItem("MLB1615760527");
    expect(fetch).toHaveBeenCalledWith(
      "https://api.mercadolibre.com/items/MLB1615760527"
    );
  });
  test("Verifica se fetchItem com o argumento 'MLB1615760527' retorna uma estrutura de dados igual ao objeto item", async () => {
    expect(await fetchItem("MLB1615760527")).toEqual(item);
  });
  test("Verifica se a função fetchItem sem argumento, retorna um erro com a mensagem You must provide an url", () => {
    expect(() => fetchItem()).toThrow("You must provide an url");
    expect(fetchItem).toThrow("You must provide an url");
  }); 
});
