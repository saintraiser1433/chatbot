import './CheckoutPage.css';
import './CheckoutHeader.css';
import { CheckoutHeader } from './CheckoutHeader.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { OrderSummary } from './OrderSummary.jsx';
import { PaymentSummary } from './PaymentSummary.jsx';
export function CheckoutPage({ cartItems }) {
  const [selectedDeliveryOption, setSelectedDeliveryOption] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  const fetchCheckoutData = async () => {
    let response = await axios
      .get('/api/delivery-options?expand=estimatedDeliveryTime')
      .then((response) => {
        setSelectedDeliveryOption(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
    response = await axios
      .get('/api/payment-summary')
      .then((response) => {
        setPaymentSummary(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  };

  useEffect(() => {
    fetchCheckoutData();
  }, []);
  return (
    <>
      <title>Checkout</title>

      <CheckoutHeader cartItems={cartItems} />
      <div className='checkout-page'>
        <div className='page-title'>Review your order</div>

        <div className='checkout-grid'>
          <OrderSummary
            cartItems={cartItems}
            selectedDeliveryOption={selectedDeliveryOption}
          />
          <PaymentSummary paymentSummary={paymentSummary} />
        </div>
      </div>
    </>
  );
}
