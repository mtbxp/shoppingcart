require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Verifique se fetchItem é uma função', () => {
    expect(typeof fetchItem).toEqual('function');
  });

  it('Verifique se ao receber ao receber a função fetchItem ao receber o argumento MLB1615760527 chama a fetch', async () => {
  await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });

  it('Verifique se ao receber ao receber a função fetchItem ao receber o argumento computador o fetch utiliza o endpoint pedido', async () => {
    const endpoint = `https://api.mercadolibre.com/items/MLB1615760527`;
    fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });

  it('Verifique se ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem "You must provide an url"', async () => {
    expect(await fetchItem()).toEqual(new Error('You must provide an url'))
  });


});
