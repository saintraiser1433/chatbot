import { useState, useEffect } from 'react';
import { Header } from '../../components/Header.jsx';
import './OrdersPage.css';
import axios from 'axios';
import { OrdersGrid } from './OrdersGrid.jsx';
export function OrdersPage({ cartItems }) {
  const [orders, setOrders] = useState([]);

  async function getOrders() {
    return await axios
      .get('/api/orders?expand=products')
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.error('Error fetching orders:', error);
      });
  }

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      <title>Orders </title>
      <Header cartItems={cartItems} />
      <div className='orders-page'>
        <div className='page-title'>Your Orders</div>
        <OrdersGrid orders={orders}></OrdersGrid>
      </div>
    </>
  );
}
