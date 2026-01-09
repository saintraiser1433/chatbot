import dayjs from 'dayjs';
import { formatMoney } from '../../utils/money';
const DeliveryOptions = ({ selectedDeliveryOption, item }) => {
  return (
    <div className='delivery-options'>
      <div className='delivery-options-title'>Choose a delivery option:</div>
      {selectedDeliveryOption.map((option) => {
        let priceString = 'FREE Shipping';
        if (option.priceCents > 0) {
          priceString = formatMoney(option.priceCents);
        }
        return (
          <div key={option.id} className='delivery-option'>
            <input
              type='radio'
              defaultChecked={item.deliveryOptionId === option.id}
              className='delivery-option-input'
              name={`delivery-option-${item.productId}`}
            />
            <div>
              <div className='delivery-option-date'>
                {dayjs(option.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
              </div>
              <div className='delivery-option-price'>{priceString}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DeliveryOptions;
