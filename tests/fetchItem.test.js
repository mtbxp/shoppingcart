require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Verifica se fetchItem é uma função', async () => {
    expect(typeof fetchItem).toBe('function');
  });

  it('Verifica se o fetch é chamado na função fetchItem', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalled();
  });

  it('Verifica se ao chamar a função ela vem com o endpoint correto', async () => {
    const endpoint = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });

  it('Verifica se o retorno da função é igual ao objeto item', async () => {
    const response = await fetchItem('MLB1615760527');
    expect(response).toEqual(item);
  });

  it('Verifica que sem parametros a função retorna um erro', async () => {
    const response = await fetchItem();
    expect(response).toEqual(new Error('You must provide an url'))
  });
});