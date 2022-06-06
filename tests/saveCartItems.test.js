const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
 
  it('Se ao chama-la localStorage tambem e chamado', () => {
    localStorage.setItem('cartItems', JSON.stringify([]));
    // const storage = JSON.parse(localStorage.getItem('cartItems'))
    // console.log('teste', storage)
    saveCartItems('MLB2131342947', [])
    expect(localStorage.setItem).toBeCalled();
  })
  it('Se ao chama-la localStorage utiliza cartItems e MLB2131342947', async () => {
    localStorage.setItem('cartItems', JSON.stringify([]));
    // const storage = JSON.parse(localStorage.getItem('cartItems'))
    saveCartItems('MLB2131342947', [])
    expect(localStorage.setItem).toBeCalledWith('cartItems', "[\"MLB2131342947\"]");
  })
  // se ao chamar enquanto o texto total-price nao existir salva talva coisa
  // it('Se ao chama-la enquanto e total-price existir, salva junto com as informaçoes anteriores', async () => {
  //   const save = saveCartItems('MLB2131342947');
  //   expect(save).toEqual(['MLB2131342947']);
  // })
});
