import {validDeliveryOption} from './deliveryOptions.js';

export let cart;

loadFromStorage();

export function loadFromStorage() {
  cart = JSON.parse(localStorage.getItem('cart'));

  if (!cart) {
    cart = [
      {
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptionId: '1'
      }, 
      {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1,
        deliveryOptionId: '2'
      }
    ];
  }
}

function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId) {
  // Safely find the quantity selector
  const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
  
  // If quantitySelector is found, use the selected quantity, otherwise default to 1
  const quantity = quantitySelector ? Number(quantitySelector.value) : 1;

  // If quantity is less than or equal to 0, you can log an error or set it to 1
  if (quantity <= 0) {
    console.error(`Quantity must be greater than 0. Received: ${quantity}`);
    return;
  }

  let matchingItem;

  // Find the matching cart item
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  // Update cart
  if (matchingItem) {
    matchingItem.quantity += quantity; // Add to existing quantity
  } else {
    cart.push({
      productId,
      quantity,
      deliveryOptionId: '1', // Default delivery option
    });
  }

  console.log('Cart updated:', cart); // Debugging log
  saveToStorage(); // Assuming saveToStorage is a function that persists the cart
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

export function calculateCartQuantity() {
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

export function updateDeliveryOption(productId, deliveryOptionId) {
  // step 1: Loop through the cart and find the product
  let matchingItem;

  cart.forEach((cartItem) => 
  {
    if (productId === cartItem.productId) 
    {
      matchingItem = cartItem;
    }
  });

  if(!matchingItem) {
    return;
  }

  if (!validDeliveryOption(deliveryOptionId)) {
    return;
  }

  // Step 2: Update the deliveryOptionId of the product
  matchingItem.deliveryOptionId = deliveryOptionId;

  saveToStorage();
}