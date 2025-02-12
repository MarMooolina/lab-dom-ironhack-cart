// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;

  const subtotal = product.querySelector('.subtotal span')
  subtotal.innerHTML = quantity * price;
  let subtotalResult = subtotal.innerHTML

  console.log('Calculating subtotal, yey!');

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  let allProductsSubtotal = document.getElementsByClassName('product')
  let total = 0
  for(item of allProductsSubtotal) {
    total += updateSubtotal(item)
  }

  let totaltext = document.querySelector('#total-value span')
  totaltext.innerHTML = total;
  console.log(typeof total);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
