export const ORDERS = [
  // pequeño dataset de ejemplo (puedes ampliarlo si quieres)
  { id: 1, userId: 'u1', items: [{ sku: 'A', qty: 1, price: 100 }, {sku: 'B', qty: 2, price: 30 }], createdAt: '2025-01-01T10:00:00Z' },
  { id: 2, userId: 'u2', items: [{ sku: 'A', qty: 3, price: 95 }], createdAt: '2025-01-02T09:30:00Z' },
  { id: 3, userId: 'u1', items: [{ sku: 'C', qty: 1, price: 250 }], createdAt: '2025-01-02T11:15:00Z' },
  { id: 4, userId: 'u3', items: [{ sku: 'B', qty: 5, price: 28 }, { sku: 'C', qty: 1, price: 245 }], createdAt: '2025-01-03T08:05:00Z' },
  { id: 5, userId: 'u2', items: [{ sku: 'A', qty: 1, price: 100 }, { sku: 'D', qty: 1, price: 60 }], createdAt: '2025-01-03T17:40:00Z' }
];

// INEFICIENTE a propósito (n^2): sumar ventas por SKU
export function productSummaryQuadratic(orders = ORDERS) {
  const summary = [];
  for (const o of orders) {
    for (const it of o.items) {
        const idx = summary.findIndex(s => s.sku === it.sku);
        const amt = it.qty * it.price;
      if (idx === -1) 
        summary.push({ sku: it.sku, qty: it.qty, amount: amt });
      else {
        summary[idx].qty += it.qty;
        summary[idx].amount += amt;
      }
    }
  }
  return summary;
}

// TODO (Desafío C): productSummaryLinear(orders)
// - Implementar versión O(n) usando Map/reduce
// - Mantener salida: [{sku, qty, amount}] ordenada por amount desc
export function productSummaryLinear(orders = ORDERS) {
  return []; // TODO
}