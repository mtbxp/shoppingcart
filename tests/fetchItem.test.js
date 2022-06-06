require('../mocks/fetchSimulator');
const { Test } = require('mocha');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Testa função fetchItem com o argumento "MLB2120961335", verifica se ela foi chamada e se o seu o url é https://api.mercadolibre.com/items/MLB2120961335', async () => {
    await fetchItem("MLB2120961335");
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB2120961335');
    expect(fetch)
    .toHaveBeenCalled();

  });
  it('Verifica e a função featch item é uma função', () => {
    expect(typeof fetchItem)
    .toBe('function');
  });
  it('Caso o parametro esteja errado precisa retornar "You must provide an url"', async () => {
    const verifica = await fetchItem()
    expect(verifica)
    .toEqual(new Error('You must provide an url'))
  });
});
