import './App.css';
import { Routes, Route } from 'react-router';
import { HomePage } from './pages/home/HomePage';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { OrdersPage } from './pages/orders/OrdersPage';
import { TrackingPage } from './pages/tracking/TrackingPage';
import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  const [cartItems, setCartItems] = useState([]);
  async function fetchCartItems() {
    return await axios
      .get('/api/cart-items?expand=product')
      .then((response) => {
        setCartItems(response.data);
      })
      .catch((error) => {
        console.error('Error fetching cart items:', error);
      });
  }

  useEffect(() => {
    fetchCartItems();
  }, []);
  return (
    <Routes>
      <Route path='/' element={<HomePage cartItems={cartItems} />} />
      <Route path='checkout' element={<CheckoutPage cartItems={cartItems} />} />
      <Route path='orders' element={<OrdersPage cartItems={cartItems} />} />
      <Route path='tracking' element={<TrackingPage />} />
    </Routes>
  );
}

export default App;
