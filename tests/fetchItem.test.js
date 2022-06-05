require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  //fail('Teste vazio');
  test('Testar se fetchItem se é uma "função"', () => {
    expect(typeof fetchItem).toEqual("function");
  });
  test('Testar se a função fetchItem argumento do item MLB1615760527 chama se fetch', async () => {
   await fetchItem("MLB1615760527")
   expect(fetch).toHaveBeenCalled();
  })
  test('Testar se a função fetchItem "MLB1615760527" com endpoint', async () => {
    await fetchItem("MLB1615760527")
    expect(fetch).toHaveBeenCalledWith("https://api.mercadolibre.com/items/MLB1615760527");
  });
  test('Testar se a função fetchItem "MLB1615760527" estrutura igual a Obj Item', async () => {
   const expected = await fetchItem("MLB1615760527")
    expect(expected).toBe(item);
  });
  test('Testa se a função fetchItem retorna um Erro', async () => {
  try {
    await fetchItem();
  } catch (erro) {
    expect(erro).toEqual('You must provide an url');
  }
  });
});

