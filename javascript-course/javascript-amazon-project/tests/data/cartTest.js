import { addToCart, cart, loadFromStorage } from '../../data/cart.js';

describe('Test Suite: addToCart', () => {
  it('Adds an existing product to the cart', () => {
    spyOn(localStorage, 'setItem'); // Mock the setItem so that the addToCart used below will no longer save anything to localStorage.
    
    spyOn(localStorage, 'getItem').and.callFake(() => { // overRiding getItem(Mocking it)
      return JSON.stringify([{
          productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
          quantity: 1,
          deliveryOptionId: '1'
      }]); // will convert to JSON string
    });
    loadFromStorage();

    addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1); // gives us an object having many useful methods
    expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart[0].quantity).toEqual(2);
  });

  it('Adds a new product to the cart', () => {
    spyOn(localStorage, 'setItem'); // Mock the setItem so that the addToCart used below will no longer save anything to localStorage.
    
    spyOn(localStorage, 'getItem').and.callFake(() => { // overRiding getItem(Mocking it)
      return JSON.stringify([]); // will convert to JSON string
    });
    // console.log(localStorage.getItem());
    loadFromStorage();
    
    addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1); // gives us an object having many useful methods
    expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart[0].quantity).toEqual(1);
  });
});