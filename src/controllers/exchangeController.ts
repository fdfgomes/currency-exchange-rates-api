import { Request, Response } from 'express';
// import { Currency, Exchange } from '../../lib';
import { Currency, Exchange } from 'node-currency-exchange-rates';
import REDIS_DATABASE_URL from '../constants/REDIS_DATABASE_URL';

const exchange = new Exchange(REDIS_DATABASE_URL);

const getRates = async (req: Request, res: Response) => {
  let baseCurrency = 'USD' as Currency;

  if (req.params.base_currency) {
    baseCurrency =
      (req.params['base_currency'].toUpperCase() as Currency) ?? 'USD';
  }

  const rates = await exchange.getRates(baseCurrency);

  return res.status(200).json(rates);
};

const convert = async (req: Request, res: Response) => {
  const fromCurrency = req.params['from_currency'].toUpperCase() as Currency;
  const { value: fromValue } = req.body;
  const toCurrency = req.params['to_currency'].toUpperCase() as Currency;

  const convertedValue = await exchange.convert(
    fromCurrency,
    fromValue,
    toCurrency
  );

  return res.status(200).json(convertedValue);
};

export { getRates, convert };
