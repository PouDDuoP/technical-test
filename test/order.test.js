import { ORDERS, productSummaryLinear } from '../src/orders.js';

test('summary linear mantiene total de items', () => {
  const out = productSummaryLinear(ORDERS);
  const totalQty = out.reduce((a,x)=>a+x.qty,0);
  const must = ORDERS.flatMap(o=>o.items).reduce((a,x)=>a+x.qty,0);
  expect(totalQty).toBe(must);
});