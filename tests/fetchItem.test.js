require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

const argumentItem = 'MLB1615760527';

describe('2 - Teste a função fetchItem', () => {
  // fail('Teste vazio');
  it('1 - Verifica se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });

  it('2 - Verifica se fetchItem é chamada ao executar o argumento do item "MLB1615760527"', async() => {
    await fetchItem(argumentItem);
    expect(fetch).toHaveBeenCalled();
  });

  it('3 - Verifica se, ao chamar a função fetchItem com o argumento "MLB1615760527", a função fetch utiliza o endpoint correto', async() => {
    const endpointItem = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem(argumentItem);
    expect(fetch).toHaveBeenCalledWith(endpointItem);
  });

  it('4 - Verifica se o retorno da função com o argumento "MLB1615760527" é uma estrutura de dados igual ao objeto esperado', async () => {
    const resultArgument = await fetchItem(argumentItem);
    expect(resultArgument).toEqual(item);
  });

  it('5 - Verifica se, ao chamar a função sem argumento, retorna um erro', async () => {
    const resultNoArgument = await fetchItem();
    expect(resultNoArgument).toEqual(new Error('You must provide an url'));
  });
});
