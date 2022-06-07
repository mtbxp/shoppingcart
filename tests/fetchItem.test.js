require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  test('se testItem é uma função: ', async () => {
    expect.assertions(1);

    expect(typeof fetchItem).toBe('function');
  });
  test('se fetch foi a chamada quando a função fetchItem receber "MLB1615760527" como parâmetro: ', async () => {
    expect.assertions(2);
    const response = await fetchItem('MLB1615760527');

    expect(fetch).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });
  test('se fetchItem("MLB1615760527") retorna o valor de "item": ', async () => {
    expect.assertions(1);
    const response = await fetchItem('MLB1615760527');

    expect(response).toEqual(item);
  });
  test('se quando chamamos fetchItem sem parametro, retorna um erro com a mensagem "You must provide an url": ', async () => {
    expect.assertions(1);
    const response = await fetchItem();

    expect(response).toEqual(new Error('You must provide an url'));
  })
});
