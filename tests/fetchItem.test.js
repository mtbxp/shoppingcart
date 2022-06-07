require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  test('Se fetchItem é uma função', () => {
    expect.assertions(1);
    expect(typeof fetchItem).toBe('function');
  });
  
  it('Testa se fetchItem recebe "MLB1615760527" e tem endpoint "https://api.mercadolibre.com/items/MLB1615760527"', async() => {
    expect.assertions(2);
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });
  it('Testa se a função fetchItem com argumento "MLB1615760527" é um obejto da estrutura de dados "item"', async () => {
    expect.assertions(1)
    const response = await fetchItem('MLB1615760527');
    expect(response).toEqual(item);
  })
  it('Testa se a funçao  fetchItem retorna a msg de erro: "You must provide an url"', async () => {
    expect.assertions(1);
     await expect(fetchItem()).rejects.toThrow(new Error('You must provide an url'));
  });
});