require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Teste se fetchProducts é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  })
  it('Execute a função fetchProducts com o argumento "computador" e teste se fetch foi chamada', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledTimes(1);
  })
  it(`O "window.fetch" está definido em todos os testes, ou seja, será possível usar a função fetch dentro do seu ambiente de testes sem precisar importar ou instalar bibliotecas`, async () => {
    const url = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(url);
  })
  it(`Teste se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch, 
  que já está importado no arquivo.`, async () => {
    const result = await fetchItem('MLB1615760527');
  expect(result).toEqual(item);
  })
  it(`Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: 'You must provide an url'`, async () => {
    try {
      await fetchItem();
      expect(true).toBe(false);
    } catch (error) {
      expect(error).toEqual(new Error('You must provide an url'));
    }
  })
});
