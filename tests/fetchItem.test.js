require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  test('If fetchItem is a function', () => {
    expect(typeof fetchItem).toBe('function');
  });

  test('If fetch is called when calling fetchItem with argument "MLB1615760527"', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });

  test('If endpoint "https://api.mercadolibre.com/items/MLB1615760527" is acessed whencalling fetchItem with argument "MLB1615760527"', async () => {
    const expected = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalledWith(expected);
  });

  test('If when calling fetchItem with argument "MLB1615760527" the return is the expected object', async () => {
    const response = await fetchItem('MLB1615760527');
    expect(response).toEqual(item);
  });

  test('If when calling fetchProducts with no argument the return is the error message "You must provide an url"', async () => {
    const error = new Error('You must provide an url');
    await expect(fetchItem()).resolves.toThrow(error);
  });
});
