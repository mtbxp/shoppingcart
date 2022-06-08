require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');
const url = "https://api.mercadolibre.com/items/MLB1615760527";

describe('2 - Teste a função fetchItem', () => {
  it('se é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  })
  it('a função com o argumento "MLB1615760527" foi chamada', async() => {
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalled();
  })
  it('se a função com o argumento "MLB1615760527", utiliza o endpoint correto', async() => {
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalledWith(url);
  })
  it('se o retorno da função fetchIten com o argumento "MLB1615760527" é uma estrutura de dados igual ao objeto "item"', async() => {
    const result = await fetchItem('MLB1615760527');
    expect(result).toStrictEqual(item);
  })
  it('ao chamar a função sem argumento, retorna um erro com a mensagem: "You must provide an url"', async() => {
    const resultError = await fetchItem();
    expect(resultError).toEqual(new Error('You must provide an url'));
  })
});
