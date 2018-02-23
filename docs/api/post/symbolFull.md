# /v1/jsonrpc/symbol/full

A request using an "HTTP POST-compatible" (state-changing) JSON-RPC method. Use the `/v1/jsonrpc/{network}/methods` endpoint to get the list of permitted methods. Use the regular Ethereum JSON-RPC format for the POST body.

### POST

`POST https://private-anon-cf6e378447-infura.apiary-mock.com/v1/jsonrpc/network`

### Parameters

| Attributes |                              |        |
|------------|------------------------------|--------|
| Symbol     | Ticker symbol (currency pair | string |

### Response

#### Attributes

`base` string - Currency pair base

`quote` string - Currency pair quote

`tickers` Array - List of tickers at various exchanges

`bid` number - Bid

`ask` number - Ask

`exchange` string - Exchange

`volume` number - Volume

`timestamp` number - Unix timestamp

#### Full ticker Response

`200`

**Headers**

`Content-Type:application/json`
