# currency-exchange-rates-api

This project is an example of <a href="https://www.npmjs.com/package/node-currency-exchange-rates">node-currency-exchange-rates</a> implementation using Redis for data caching.

# Setting up locally

```sh
# Clone the repository
git clone git@github.com:fdfgomes/currency-exchange-rates-api.git

# Navigate to it's directiory
cd currency-exchange-rates-api

# Initialize docker containers
docker-compose up -d
```

# Routes

### **GET** _`/rates/:base_currency`_

- Returns exchange rates for given currency.

- Receives one optional parameter:

  - `base_currency` - must be a valid currency (case insensitive).

> <i>\* Valid currencies are listed [here](https://www.npmjs.com/package/node-currency-exchange-rates#supported-currencies).</i>

#### Valid request examples:

#### Without `base_currency` optional parameter:

```
GET /rates
```

#### With `base_currency` optional parameter:

#### Lowercase `base_currency`:

```
GET /rates/usd
```

#### Uppsercase `base_currency`:

```
GET /rates/USD
```

#### Response

- HTTP Code: `200 - OK`;
- Body (example):

```json
{
  "baseCurrency": "USD",
  "baseValue": 1,
  "date": "2023-08-04T13:29:10.117Z",
  "exchangeRates": [
    { "JPY": 141.98 },
    { "CHF": 0.8713 },
    { "CAD": 1.3359 },
    { "ZAR": 18.4652 },
    { "TRY": 26.9468 },
    { "MXN": 17.1028 },
    { "PLN": 4.0215 },
    { "SEK": 10.5806 },
    { "SGD": 1.3369 },
    { "DKK": 6.7620000000000005 },
    { "NOK": 10.1176 },
    { "ILS": 3.6606 },
    { "HUF": 351.87 },
    { "CZK": 21.9435 },
    { "THB": 34.0612 },
    { "KWD": 0.307 },
    ...
  ]
}
```

### **POST** _`/convert/:from_currency/:to_currency`_

- Returns the converted value using the received currencies.

- Receives <b>2 required</b> parameters and <b>one required</b> property:

  - `from_currency` - valid base currency (case insensitive);

  - `to_currency` - valid currency (case insensitive).

  - `value` - value to be converted.

> <i>\* Valid currencies are listed [here](https://www.npmjs.com/package/node-currency-exchange-rates#supported-currencies).</i>

#### Valid request example:

```
POST /convert/usd/eur
```

```json
{
  "value": 100
}
```

#### Response

- HTTP Code: `200 - OK`;
- Body (example):

```json
90.76
```
