(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  };
  const products: Product[] = [];
  const addProduct = (data: Product) => {
    products.push(data);
  };
  addProduct({
    title: 'Prod1',
    createdAt: new Date(1993, 1, 1),
    stock: 12,
  });
  addProduct({
    title: 'Prod2',
    createdAt: new Date(1993, 1, 1),
    stock: 12,
    size: 'XL',
  });
  console.log(products);
  products.push({
    title: 'prod3',
    createdAt: new Date(2022, 1, 1),
    stock: 12,
    size: 'XL'
  })
})();