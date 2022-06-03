require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  test('Se fetchItem é uma função', () => {
    expect.assertions(1);
    expect(typeof fetchItem).toBe('function');
  });

  test('Se a uma função fetch é chamada e com o edpoint correto, ao executar a função fetchItem com o argumento "MLB1615760527"', async () => {
    expect.assertions(2);
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalled();
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });

  test('Se a função fetchItem retorna um objeto igual ao objeto item, quando passado o argumento "MLB1615760527"', async () => {
    expect.assertions(1);
    const response = await fetchItem('MLB1615760527');
    expect(response).toEqual(item);
  });

  test('Se a função fetchItem retorna um erro com a mensagem "You must provide an url", quando chamada sem agumento', async () => {
    expect.assertions(1);
    const responseNoParam = await fetchItem();
    expect(responseNoParam).toEqual(new Error('You must provide an url'));
  });

  // test('Se a função fetchItem retorna um erro com a mensagem "Invalid product", quando chamada com agumento inválido', async () => {
  //   expect.assertions(1);
  //   const responseWrongParam = await fetchItem('InvalidProductId');
  //   expect(responseWrongParam).toEqual(new Error('Invalid product'));
  // });

});
