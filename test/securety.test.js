import { authSigned } from '../src/security.js';

function mockReq(h={}) { return { header: k => h[k.toLowerCase()] }; }

function mockRes() { return { status(c){ this.code=c; return this; }, json(b){ this.body=b; } }; }

function next(){ next.called = true; }

process.env.SECRET = 'devsecret';
test('rechaza sin headers', () => {
  const req = mockReq();
  const res = mockRes();
  next.called = false;
  authSigned(req, res, next);
  expect(res.code).toBe(401);
});