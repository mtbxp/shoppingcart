require('../mocks/fetchSimulator');
const { fetchItem, createUrlToGetProductItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Deveria falhar se fetchItem não for uma função', () => {
    expect.assertions(1);
    expect(typeof fetchItem).toBe('function');
  });

  it('Deveria ser capaz de invocar a função fecth.', async () => {
    expect.assertions(1);
    const productid = 'MLB1615760527';
    await fetchItem(productid);
    expect(fetch).toHaveBeenCalled();
  });

  it('Deveria invocar a função fetch com a URL correta', async () => {
    expect.assertions(1);
    const productId = 'MLB1615760527';
    const url = createUrlToGetProductItem(productId);
    await fetchItem(productId);
    expect(fetch).toHaveBeenCalledWith(url);
  });

  it('deveria retornar o objeto correto "item"', async () => {
    expect.assertions(1);
    const productId = 'MLB1615760527';
    const result = await fetchItem(productId);
    expect(result).toEqual(item);
  });

  it('Deveria retornar um erro se nenhum parametro for fornecido.', async () => {
    expect.assertions(1);
    try {
      await fetchItem();
    } catch (error) {
      expect(error).toEqual(new Error('You must provide an url'));
    }
  });
});
