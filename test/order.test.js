const { ORDERS, productSummaryLinear } = require('../src/orders.js');

// test('summary linear mantiene total de items', () => {
//   const out = productSummaryLinear(ORDERS);
//   const totalQty = out.reduce((a,x)=>a+x.qty,0);
//   const must = ORDERS.flatMap(o=>o.items).reduce((a,x)=>a+x.qty,0);
//   expect(totalQty).toBe(must);
// });

test('debe retornar objetos con la estructura  sku, qty, and amount', () => {
  const orders = [
    {
      items: [
        { sku: 'A', qty: 2, price: 10 },
        { sku: 'B', qty: 1, price: 20 }
      ]
    },
    {
      items: [
        { sku: 'A', qty: 1, price: 10 },
        { sku: 'C', qty: 3, price: 5 }
      ]
    }
  ];

  const result = productSummaryLinear(orders);
  expect(result.length).toBe(3);

  console.log(result)

  expect(result).toEqual([
    { sku: 'A', qty: 3, amount: 30 },
    { sku: 'B', qty: 1, amount: 20 },
    { sku: 'C', qty: 3, amount: 15 }
  ]);

})