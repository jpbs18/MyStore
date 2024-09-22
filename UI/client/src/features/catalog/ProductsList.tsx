import { Grid } from '@mui/material';
import { Product } from '../../app/models/product';
import ProductCard from './ProductCard';

interface Props {
  products: Product[];
}

const ProductsList = ({ products }: Props) => {
  return (
    <Grid container spacing={4}>
      {products?.map((item: Product) => (
        <Grid item xs={3} key={item.id}>
          <ProductCard product={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsList;
