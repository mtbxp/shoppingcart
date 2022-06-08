require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  const fetchItemFunction = fetchItem;
  it('Verifica se fetchProdutcs é uma função', () => {
    expect(typeof (fetchItemFunction)).toBe('function');
  });
  it('Verifica se fetch foi chamada ao chamar fetchItem com um id válid', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });
  it('Verifica se a função utiliza o endpoint correto', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });
  it('Verifica se o retorno da função é uma estrutura de dados do mesmo tipo de item', async () => {
    expect(item).toStrictEqual(await fetchItem('MLB1615760527'));
  });
  it('Verifica se ao chamar a função sem argumento dá um erro determinado', async () => {
    expect(await fetchItem()).toEqual(new Error ('You must provide an url'));
  });
});
