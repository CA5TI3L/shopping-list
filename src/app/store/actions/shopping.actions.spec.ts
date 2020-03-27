import * as fromShopping from './shopping.actions';

describe('loadShoppings', () => {
  it('should return an action', () => {
    expect(fromShopping.loadShoppings().type).toBe('[Shopping] Load Shoppings');
  });
});
