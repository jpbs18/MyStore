import { Product } from '../../app/models/product';
import ProductsList from './ProductsList';
import { useState, useEffect } from 'react';

const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <ProductsList products={products} />
    </>
  );
};

export default Catalog;
