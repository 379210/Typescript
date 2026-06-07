(() => {
  let productPrice = 100;
  productPrice = 12;
  console.log('productPrice', productPrice);

  let costumerAge: number = 28;
  // costumerAge = costumerAge + "1"; //281
  costumerAge = costumerAge + 1;
  console.log('costumerAge', costumerAge);

  let productInStock: number;
  console.log('productInStock', productInStock);
  if (productInStock > 10) {
    console.log('is greater');
  }
  let discount = parseInt('100');
  console.log('discount', discount);
  if (discount <= 200) {
    console.log('apply');
  } else {
    console.log('not apply');
  }
})();
