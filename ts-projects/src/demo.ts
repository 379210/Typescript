console.log('ejecutando archivo demos');
export function saludar() {
  console.log('Hola mundo');
}
(async () => {
  const myCart = [];
  interface Product {
    id: number;
    prize: number;
  }
  const products: Product[] = [];
  const limit = 2;

  async function getProducts() {
    const rta = await fetch('http://api.escuelajs.co/api/v1/products', {
      method: 'GET',
    });
    const data = await rta.json();
    products.concat(data);
  }
  function getTotal() {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total += products[i]?.prize || 0;
    }
    return total;
  }
  function addProduct(index: any) {
    if (getTotal() <= limit) {
      myCart.push(products[index]);
    }
  }

  await getProducts();
  addProduct(1);
  addProduct(2);
  const total = getTotal();
  console.log(total);
  const person = {
    name: 'Nicolas',
    lastName: 'Molina',
  };
  // const rta = person +  limit;

  console.log(person);
})();
