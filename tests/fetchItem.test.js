require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Testa se é uma função', () => {
    const actual = fetchItem;
    const expected = 'function';
    expect(typeof actual).toBe(expected);
  });

  it('Testa se fetch é chamada', () => {
    fetchItem('MLB1615760527');
    const expected = fetch;
    expect(expected).toHaveBeenCalled();
  });

  it('Teste se fetch utiliza um determinado endpoint', () => {
    fetchItem('MLB1615760527');
    const endpoint = 'https://api.mercadolibre.com/items/MLB1615760527';
    const expected = fetch;
    expect(expected).toBeCalledWith(endpoint);
  });

  it('Testa o retorno da função fetchItem', async () => {
    const actual = await fetchItem('MLB1615760527');
    const expected = item;
    expect(actual).toEqual(expected);
  });

  it('Testa se é lançado um erro', () => {
    const actual = fetchItem();
    const expected = 'You must provide an url';
    expect(actual).rejects.toThrow(expected);
  });
});
