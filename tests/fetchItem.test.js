require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {

  test ('Verifica se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function')
  })

  test('Verifica se ao ser chamada com o argumento "MLB1615760527", retorna a resposta da url:',  
    async () => {
      await fetchItem('MLB1615760527');
      expect(fetch).toHaveBeenCalled();
      // Use .toHaveBeenCalled para garantir que uma função de simulação (mock, em inglês) foi chamada com argumentos específicos. link: https://jestjs.io/pt-BR/docs/expect#tohavebeencalled
    })

  test('Verifica se ao ser chamada com o argumento do item "MLB1615760527", a função fetch realiza uma requisição pela url correta',
    async () => {
      await fetchItem('MLB1615760527');
      expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
    })

  test('Verifica se ao ser chamada com o argumento "MLB1615760527", o retorno da função é uma estrutura de dados igual ao objeto "item"',
    async () => {
      // toStrictEqual: para testar se os objetos têm os mesmos tipos e estrutura. Link: https://jestjs.io/pt-BR/docs/expect#tostrictequalvalue
      expect(await fetchItem('MLB1615760527')).toStrictEqual(item);
    })

  test('Verifica se ao ser chamada sem argumento, o retorno da função é a mensagem de erro: "You must provide an url"',
    async () => {
      expect(await fetchItem()).toEqual(new Error ('You must provide an url'));
    })
});
