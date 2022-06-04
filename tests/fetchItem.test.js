require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  test('Verifica se `fetchItem` é uma função', () => {
    expect(typeof fetchItem).toBe('function')
  });
  test('Deve chamar `fetch` quando o argumento `computador` for passado', async () => {
    await fetchItem('MLB161576527');
    expect(fetch).toHaveBeenCalled();
  });
  test('Deve retornar o endpoiont correto ao passar o argumento `MLB161576527` para a função', async () => {
    const url = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem('MLB161576527');
    expect(fetch).toBeCalledWith(url);
  });
  test('Deve se a função retorna a mesma estrutura de dados do objeto `item`', async () => {
    const dados = item;
    expect(await fetchItem('MLB161576527')).toBe(dados);
  });
  test('Deve retornar uma mensagem de error ao passar a função sem nenhum argumento', async () => {
    try{
      await fetchItem();
    }catch (error){
    expect(error).toThrowError(new Error('You must provide an url'));
    }
  });

});
