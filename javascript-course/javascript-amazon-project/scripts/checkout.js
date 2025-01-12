import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
// import '../data/cart-class.js'; // This runs all the code in the file without importing anything.
// import '../data/car.js';
// import '../data/backend-practice.js';
import { loadProducts } from "../data/products.js";
import { loadCart } from "../data/cart.js";

Promise.all([
  new Promise((resolve) => { // It's a built in class and when we create a promise we need to give it some functions.
    loadProducts(() => { // We run some asynchronous code, wait for it to finish and then
      resolve('value1'); // we call resolve to go to next step.
    });
  }),
  new Promise((resolve) => { // It's a built in class and when we create a promise we need to give it some functions.
    loadCart(() => { // We run some asynchronous code, wait for it to finish and then
      resolve(); // we call resolve to go to next step.
    });
  })

]).then((values) => {
  console.log(values);
  renderOrderSummary(); // runs this function after loadProducts() and loadCart() is finished.
  renderPaymentSummary(); // Multiple callback cause a lot of nesting.
});

/*
new Promise((resolve) => { // It's a built in class and when we create a promise we need to give it some functions.
  loadProducts(() => { // We run some asynchronous code, wait for it to finish and then
    resolve('value1'); // we call resolve to go to next step.
  });
//  console.log('promise'); // It runs inner function immediately.

}).then((value) => { // whatever we give to resolve will be stored inside a variable given to .then i.e. value1 will be stored in a variable value.
  
  console.log(value);

  return new Promise((resolve) => {
    loadCart(() => { // wait for loadCart() to finish 
      resolve(); // then go to resolve then go to next step.
    });
  });

}).then(() => { // this is next step
  renderOrderSummary(); // runs this function after loadProducts() and loadCart() is finished.
  renderPaymentSummary(); // Multiple callback cause a lot of nesting.
})
*/

/*
loadProducts(() => {
  loadCart(() => {
    renderOrderSummary(); // runs this function after loadProducts() and loadCart() is finished.
    renderPaymentSummary(); // Multiple callback cause a lot of nesting.
  });
});
*/

