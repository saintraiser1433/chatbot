export function calculateItemsQuantity(cartItems) {
  return cartItems.reduce((total, item) => total + item.quantity, 0);
}
