require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');
const url = 'https://api.mercadolibre.com/items/MLB1615760527'

describe('2 - Teste a função fetchItem', () => {
  it('Testando se fetchItem é uma função', () => {
  expect(typeof fetchItem).toBe('function');
  });
  it('Testando se fetch é chamada quando se passa um argumento', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalled();
  });
  it('Testando se ao passar um argumento retorna o endpoint correto', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalledWith(url);
  });
  it('Testa se retorno da função será um objeto', async () => {
    await fetchItem('MLB1615760527');
    expect (typeof await fetchItem('MLB1615760527')).toBe(typeof item);
  });
  it('Testa se volta erro ao chamar a fetchItem sem argumento', async () => {
    await fetchItem();
    expect (await fetchItem()).toEqual(new Error(`You must provide an url`));
  });
});