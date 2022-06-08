require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });
  
  it('a função fetch foi chamada', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });
  
  it('usando o argumento "MLB1615760527", o endpoint está correto', async () => {
    const url = `https://api.mercadolibre.com/items/MLB1615760527`;
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(url);
  });
  
  it('usando o argumento "MLB1615760527", o resultado é o esperado', async () => {
    expect(await fetchItem('MLB1615760527')).toEqual(item);
  });
  
  it('sem argumento, lança um erro', async () => {
    expect(await fetchItem()).toEqual(new Error ('You must provide an url'))
  });
});
