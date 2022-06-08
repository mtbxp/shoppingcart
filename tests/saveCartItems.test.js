const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

const oltest = document.createElement('ol') 
const litest = document.createElement('li')
litest.innerText = 'Item';
oltest.appendChild(litest)

describe('3 - Teste a função saveCartItems', () => {
  
  it('Deve chamar o localStorage quabdo o argumento for passado', async () => {
    await saveCartItems(oltest);
    expect(localStorage.setItem).toHaveBeenCalled();
  })

  it('Deve chamar localStorage.setItem com dois parâmetros, cartItems e o texto da lista', async () => {
    await saveCartItems(oltest);
    expect(localStorage.setItem).toBeCalledWith('cartItems', '["Item"]');
  })

  it('Deve ser uma função', () => {
    expect(typeof saveCartItems).toBe('function');
  });

});
