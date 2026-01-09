import { NavLink } from 'react-router';
import dayjs from 'dayjs';
import { formatMoney } from '../../utils/money.js';
import { Fragment } from 'react';
export function OrdersGrid({ orders }) {
  return (
    <div className='orders-grid'>
      {orders.map((order) => {
        return (
          <div key={order.id} className='order-container'>
            <div className='order-header'>
              <div className='order-header-left-section'>
                <div className='order-date'>
                  <div className='order-header-label'>Order Placed:</div>
                  <div>{dayjs(order.orderTimeMS).format('MMMM D')}</div>
                </div>
                <div className='order-total'>
                  <div className='order-header-label'>Total:</div>
                  <div>{formatMoney(order.totalCostCents)}</div>
                </div>
              </div>

              <div className='order-header-right-section'>
                <div className='order-header-label'>Order ID:</div>
                <div>{order.id}</div>
              </div>
            </div>
            <div className='order-details-grid'>
              {order.products.map((productInOrder) => {
                return (
                  <Fragment key={productInOrder.productId}>
                    <div className='product-image-container'>
                      <img src={productInOrder.product.image} />
                    </div>

                    <div className='product-details'>
                      <div className='product-name'>
                        {productInOrder.product.name}
                      </div>
                      <div className='product-delivery-date'>
                        Arriving on:{' '}
                        {dayjs(productInOrder.estimatedDeliveryTimeMs).format(
                          'MMMM D'
                        )}
                      </div>
                      <div className='product-quantity'>
                        Quantity: {productInOrder.quantity}
                      </div>
                      <button className='buy-again-button button-primary'>
                        <img
                          className='buy-again-icon'
                          src='images/icons/buy-again.png'
                        />
                        <span className='buy-again-message'>Add to Cart</span>
                      </button>
                    </div>

                    <div className='product-actions'>
                      <NavLink to='/tracking'>
                        <button className='track-package-button button-secondary'>
                          Track package
                        </button>
                      </NavLink>
                    </div>
                  </Fragment>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
