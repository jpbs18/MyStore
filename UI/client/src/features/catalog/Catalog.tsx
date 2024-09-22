import axios from 'axios';
import { Product } from '../../app/models/product';
import ProductsList from './ProductsList';
import { useState, useEffect } from 'react';

const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/products')
      .then((response) => setProducts(response.data))
      .catch(console.log)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <h3>Loading catalog...</h3>;
  }

  if (products.length === 0) {
    return <h3>There are no products.</h3>;
  }

  return (
    <>
      <ProductsList products={products} />
    </>
  );
};

export default Catalog;
