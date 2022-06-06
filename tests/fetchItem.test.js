require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });
  it('Ao executar a função passando como parâmetro "MLB1615760527", a função fetch foi chamada', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalled();
  });
  it('Ao chamar a função fetchItem com o argumento do item "MLB1615760527", a função fetch utiliza o endpoint esperado', async () => {
    await fetchItem('MLB1615760527');
    const url = 'https://api.mercadolibre.com/items/MLB1615760527';
    expect(fetch).toBeCalledWith(url)
  });
  it('o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item', async () => {
    const test = await fetchItem('MLB1615760527');
    expect(test).toEqual(item);
  });
  it('ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: "You must provide an url"', async () => {
    expect(await fetchItem()).toEqual(new Error('You must provide an url'));
  });
});
