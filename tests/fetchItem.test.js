require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('testa se é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });
  it('testa se fetch foi chamada com o argumento MLB1615760527', () => {
    fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });
  it('testa se chamada com o argumento MLB1615760527 retorna a api', () => {
    fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });
  it('testa se chamada com o argumento MLB1615760527 é igual ao objeto de item', () => {
    expect(fetchItem('MLB1615760527').toEqual(item));
  });
  it('testa se chamada sem argumento retorna o erro esperado', () => {
    expect(fetchItem()).toBe(new Error('You must provide an url'));
  });
});
