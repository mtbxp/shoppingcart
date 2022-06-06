require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Testa se fetchItem é uma função', async () => {
    expect(typeof fetchItem).toBe('function');
  });
  it('Testa se ao chamar fetchItem o fetch foi chamado', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });
  it('Testa se ao chamar fetchItem a função utiliza o endpoint esperado', async () => {
    await fetchItem('MLB1615760527');
    const url = 'https://api.mercadolibre.com/items/MLB1615760527';
    expect(fetch).toHaveBeenCalledWith(url);
  });
  it('Testa se ao chamar fetchItem a função retorna o esperado', async () => {
    const store = await fetchItem('MLB1615760527');
    expect(store).toEqual(item);
  });
  it('Testa se ao chamar fetchItem sem parâmetros retorna um erro específico', async () => {
    const store = await fetchItem();
    expect(store).toEqual(new Error('You must provide an url'));
  });
});
