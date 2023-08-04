import { NextFunction, Request, Response } from 'express';

const convertMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { value } = req.body;

  if (!value) {
    return res.status(400).json({ message: `"value" property is required` });
  }

  if (typeof value !== 'number') {
    return res.status(400).json({ message: `"value" must be a number` });
  }

  next();
};

export { convertMiddleware };
