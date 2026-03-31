// ============================================================
// INTENTIONAL ARCHITECTURE VIOLATIONS FOR PRAXIS TESTING
// ============================================================

// ERROR: Banned import — console.log (now severity: error)
console.log('This is a banned console.log — should be an error');
console.log('Second console.log violation');
console.log('Third console.log violation');

// ERROR: Banned import — lodash
import _ from 'lodash';
import { debounce } from 'lodash';

// ERROR: Banned import — axios in client code
import axios from 'axios';

// ERROR: Cross-layer — importing from server (client → server violation)
import { Product } from '../../../server/models/product';
import { CartItem } from '../../../server/models/cartItem';

// WARNING: Using 'any' type
const badData: any = { foo: 'bar' };
const anotherBad: any = 123;
function unsafeFunc(input: any): any {
  return input;
}

// WARNING: Function with too many params (max 4, this has 8)
export function processOrder(
  userId: string,
  productId: string,
  quantity: number,
  price: number,
  discount: number,
  shippingAddress: string,
  paymentMethod: string,
  couponCode: string,
) {
  console.log('Processing order');
  return { userId, productId, quantity, price, discount, shippingAddress, paymentMethod, couponCode };
}

// ERROR: God class with too many methods (max 10)
export class KitchenSinkService {
  getUsers() { return []; }
  getProducts() { return []; }
  getOrders() { return []; }
  getCart() { return []; }
  processPayment() { return true; }
  sendEmail() { return true; }
  generateReport() { return ''; }
  validateInput() { return true; }
  formatOutput() { return ''; }
  logActivity() { return; }
  syncData() { return; }
  cleanupCache() { return; }
  handleWebhook() { return; }
}
