require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  
  test('Se a função fetchItems é uma função', () => {
    expect(typeof fetchItem).toBe("function");
  });

  test('Se a função fetchItems com argumento MLB1615760527 chama a função Fetch', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalled();
  });

    test('Se a função fetchItems com argumento MLB1615760527 chama o endpoint correto da função Fetch', async () => {
      await fetchItem('MLB1615760527');
      expect(fetch).toBeCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });

  test('Teste se fetchItems com o argumento MLB1615760527 é uma estrutura de dados igual ao objeto item', async () => {
    const expected = await fetchItem('MLB1615760527');
    expect(expected).toStrictEqual(item);
  });

  test('Teste se, ao chamar a função fetchItems sem argumento, retorna um erro com a mensagem', async () => {
    const expected = await fetchItem();
    expect(expected).toEqual(new Error('You must provide an url'));
  });
});
