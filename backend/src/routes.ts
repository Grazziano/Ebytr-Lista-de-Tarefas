import { Router } from 'express';

const router = Router();

router.get('/', () => {
  throw new Error('TESTE');
});

export { router };
