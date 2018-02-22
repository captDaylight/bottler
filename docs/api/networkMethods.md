# /v1/jsonrpc/network/methods

The JSON-RPC methods supported by the `/v1/jsonrpc/{network}/{method}` (GET) and `/v1/jsonrpc/{network}` (POST) endpoints.

## GET

`**GET** https://api.infura.io/v1/jsonrpc/network/methods`

### Parameters

**network**

Ethereum network in lowercase

Possible values: `mainnet`, `ropsten`, `kovan`, `rinkeby`.

### Request

**NOTE: Not sure what to do since this is a code generator piece. See: [Apiary](https://infura.docs.apiary.io/#reference/0//v1/jsonrpc/{network}/methods/get)**

### Response

#### Attributes

`get` required `array`

List of methods supported by the /v1/jsonrpc/{network}/{method} endpoint (GET)

`string 0`

`post` required `array`

List of methods supported by the /v1/jsonrpc/{network} endpoint (POST)

`string 0`

#### Methods Response

`200`

**Headers**

`Content-Type:application/json`

** Body

**JSON Schema**
```
{
  "type": "object",
  "properties": {
    "get": {
      "type": "array",
      "description": "List of methods supported by the /v1/jsonrpc/{network}/{method} endpoint (GET)",
      "items": {
        "type": "string"
      }
    },
    "post": {
      "type": "array",
      "description": "List of methods supported by the /v1/jsonrpc/{network} endpoint (POST)",
      "items": {
        "type": "string"
      }
    }
  },
  "required": [
    "get",
    "post"
  ]
}
```

```
{
  "get": [
    "culpa ipsum sunt dolor",
    "labore in",
    "sunt pariatur eiusmod",
    "nostrud mollit"
  ],
  "post": [
    "aute aliqua elit",
    "eu tempor nulla Excepteur eiusmod",
    "ipsum et officia laborum"
  ]
}
```

### Response

Server error

``500``

**Headers**
``Content-Type:application/json``
