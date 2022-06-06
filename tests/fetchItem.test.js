require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Teste se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });
  it('Teste se fetch foi chamada', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });
  it('Teste se fetch foi chamada com o endpoint correto', async () => {
    const endpoint = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });
  it('Teste se o retorno é igual ao objeto item', async () => {
    const response = await fetchItem('MLB1615760527');
    expect(response).toEqual(item);
  });
  it('Teste se retorna um erro ao achamar a função sem parâmetro', async () => {
    const msg = 'You must provide an url';
    const response = await fetchItem();
    expect(response).toEqual(new Error(msg));
  });
});
