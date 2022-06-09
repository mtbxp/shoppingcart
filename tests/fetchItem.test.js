require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it (`Teste se fetchItem é uma função`, async () => {
    await fetchItem;
    expect(typeof fetchItem).toBe('function');
  })
  it(`Execute a função fetchItem com o argumento do item "MLB1615760527" e teste se fetch foi chamada`, async () => {
    await fetchItem('MLB1615760527');
    const itemUrl = 'https://api.mercadolibre.com/items/MLB1615760527'
    expect(fetch).toHaveBeenCalledWith(itemUrl);
  })
  it(`Teste se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: 'You must provide an url'`, async () => {
    await expect(fetchItem())
    .rejects
    .toThrow('You must provide an url');
  })
  
});
