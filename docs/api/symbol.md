# /v1/jsonrpc/symbol

Get pricing (ticker) data for various currency pairs (fiat, crypto, and tokens) using data from several exchanges. This endpoint shows the price at the exchange with the most volume for the symbol. Use the `/v1/ticker/symbols` endpoint for the full list of supported symbols.

## GET

```
GET https://private-anon-cf6e378447-infura.apiary-mock.com/v1/ticker/symbol
```

### Parameters

| Attributes |                              |        |
|------------|------------------------------|--------|
| Symbol     | Ticker symbol (currency pair | string |

### Response

#### Attributes

`base` string - Currency pair base

`quote` string - Currency pair quote

`bid` number - Bid at the exchange with the most volume

`ask` number - Ask at the exchange with the most volume

`exchange` string - The exchange with the most value

`volume` number - Volume at the exchange with the most volume

`num_exchanges` number - Number of exchanges queried

`total_volume` number - Total volume across al exchanges queried

`timestamp` number - Unix timestamp

#### Ticker Response

`200`

**Headers**

`Content-Type:application/json`
