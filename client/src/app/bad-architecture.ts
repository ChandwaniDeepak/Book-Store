// ARCHITECTURE VIOLATION: Client importing from server
import { Product } from '../../../server/models/product';
import { CartItem } from '../../../server/models/cartItem';

// BANNED: console.log usage
console.log('This violates the architecture spec');
console.log('Another console.log violation');

// This function has too many parameters (max 4)
export function processOrder(
  userId: string,
  productId: string,
  quantity: number,
  price: number,
  discount: number,
  shippingAddress: string,
  paymentMethod: string,
) {
  console.log('Processing order with too many params');
  return { userId, productId, quantity, price, discount, shippingAddress, paymentMethod };
}
