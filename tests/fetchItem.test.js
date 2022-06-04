require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  test('Teste se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });
  
  test('Execute a função fetchItem com o argumento do item "MLB1615760527" e teste se fetch foi chamada', async () => {
    await fetchItem("MLB1615760527");
    expect(fetch).toBeCalled();
  });

  test('Testa o endpoit ao usar a função fetchItem com argumento "MLB1615760527"', async () => {
    await fetchItem("MLB1615760527");
    expect(fetch).toBeCalledWith("https://api.mercadolibre.com/items/MLB1615760527");
  });

  test('Testa o retorno da fetchItem com argumento "MLB1615760527"', async () => {
    expect(await fetchItem("MLB1615760527")).toEqual(item);
  });

  test("Teste se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: 'You must provide an url'", async () => {
    try {
      await fetchItem();
    } catch (error) {
      expect(error).toEqual(new Error('You must provide an url'));
    }
  });
});
