export const cart = [{
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 2
}, {
  productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity: 1
}];

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
}