require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Teste se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });
  it('teste a função fetchItem com o item "MLB1615760527" e teste se fetch foi chamada', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalled();
  });
  it('teste a função fetchItem com o item "MLB1615760527", a função fetch utiliza o endpoint', async () => {
    const endpoint = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalledWith(endpoint);
  });
  it('teste a função fetchItem com item "MLB1615760527" retorna um objeto igual ao item', async () => {
    const response = await fetchItem('MLB1615760527');
    expect(response).toEqual(item);
  });
   it('teste a função fetchItem, retorna um erro', async () => {
    const response1 = await fetchItem();
    expect(response1).toEqual(new Error('You must provide an url'));
  });
});
