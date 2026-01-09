import { NavLink } from 'react-router';
import { calculateItemsQuantity } from '../../utils/calculate.js';
export function CheckoutHeader({ cartItems }) {
  return (
    <div className='checkout-header'>
      <div className='header-content'>
        <div className='checkout-header-left-section'>
          <NavLink to='/'>
            <img className='logo' src='images/logo.png' />
            <img className='mobile-logo' src='images/mobile-logo.png' />
          </NavLink>
        </div>

        <div className='checkout-header-middle-section'>
          Checkout (
          <a className='return-to-home-link' href='/'>
            {calculateItemsQuantity(cartItems)} items
          </a>
          )
        </div>

        <div className='checkout-header-right-section'>
          <img src='images/icons/checkout-lock-icon.png' />
        </div>
      </div>
    </div>
  );
}
