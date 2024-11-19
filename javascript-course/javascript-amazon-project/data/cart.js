export const cart = [];

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