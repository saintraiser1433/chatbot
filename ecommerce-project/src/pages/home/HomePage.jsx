import { Header } from '../../components/Header';
import './HomePage.css';
import { ProductGrid } from './ProductGrid';
import { useEffect, useState } from 'react';
import axios from 'axios';

export function HomePage({ cartItems }) {
  const [productList, setProductList] = useState([]);

  async function fetchProducts() {
    return await axios
      .get('/api/products')
      .then((response) => {
        setProductList(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <title>Ecommerce project</title>
      <Header cartItems={cartItems} />

      <div className='home-page'>
        <ProductGrid products={productList} />
      </div>
    </>
  );
}
