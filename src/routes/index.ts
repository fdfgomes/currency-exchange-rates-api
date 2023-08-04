import { Request, Response, Router } from 'express';
import { convertMiddleware } from '../middlewares/exchangeMiddleware';
import { getRates, convert } from '../controllers/exchangeController';

const router = Router();

router.get('/rates/:base_currency', getRates);

router.get('/rates', getRates);

router.post('/convert/:from_currency/:to_currency', convertMiddleware, convert);

router.get('/', (_req: Request, res: Response) =>
  res.status(200).json({ message: `I'm breathing!` })
);

export default router;
