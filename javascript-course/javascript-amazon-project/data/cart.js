export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart)
{
  cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2
  }, {
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1
  }];
}

function saveToStorage() 
{
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId)
{
  const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
  const quantity = Number(quantitySelector.value); // To convert it to number as DOM gives a string.
  
  let matchingItem;
    cart.forEach((cartItem) => 
      {
        if(productId === cartItem.productId)
        {
          matchingItem = cartItem;
        } 
      });

    if(matchingItem){ // if matching item is defined then it will be true and this code will run
      matchingItem.quantity += quantity;
    }
    else 
    {
      cart.push({
        productId,
        quantity}); 
    }

    saveToStorage();
}

export function calculateCartQuantity()
{
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  return cartQuantity;
}

export function updateQuantity(productId, newQuantity) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.quantity = newQuantity;

  saveToStorage();
}

export function removeFromCart(productId) 
{
  // Step 1: Create a new array
  const newCart = [];
  // Step 2: Loop through the cart
  cart.forEach((cartItem) => {
  // Step 3: Add each product to the new array, except for this productId
  if (cartItem.productId !== productId) 
    {
      newCart.push(cartItem);
    }
  });

  cart = newCart;

  saveToStorage();
}