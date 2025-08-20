// INSEGURO (para comparar)
export function authInsecure(req, res, next) {
  const userId = req.header('x-user-id');
  if (!userId) return res.status(401).json({ error: 'missing user' });
  req.user = { id: userId };
  next();
}

// TODO: implementar authSigned (Desafío A)
// Requisitos:
// - Headers: x-user-id, x-timestamp (ms UNIX), x-signature
// - x-signature = HMAC_SHA256(userId + timestamp, SECRET)
// - |now - timestamp| <= 5 min
// - Comparación en tiempo constante
// - SECRET por env var (SECRET=devsecret). Si falta → 500.
export function authSigned(req, res, next) {
  return res.status(501).json({ error: 'not implemented' });
}