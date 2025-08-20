import { Router } from 'express';
import { authInsecure, authSigned } from './security.js';
import { ORDERS, productSummaryQuadratic, productSummaryLinear } from './orders.js';

const r = Router();
// Desafío A (seguridad)
r.get('/me/insecure', authInsecure, (req, res) => res.json({ id: req.user.id }));
r.get('/me/secure', authSigned, (req, res) => res.json({ id: req.user.id }));

// Desafío B (paginación)
r.get('/orders', (req, res) => {
  const page = Math.max(1, parseInt(req.query.page ?? '1', 10));
  const pageSize = Math.min(100, Math.max(1,
  parseInt(req.query.pageSize ?? '5', 10)));
  
  // TODO: devolver paginado + header X-Total-Count, validar bordes
  return res.status(501).json({ error: 'not implemented' });
});

// Desafío C (performance)
r.get('/products/summary/slow', (_req, res) => res.json(productSummaryQuadratic()));
r.get('/products/summary/fast', (_req, res) => res.json(productSummaryLinear()));

export default r;