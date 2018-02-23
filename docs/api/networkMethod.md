# /v1/jsonrpc/network/method

A request using an "HTTP GET-compatible" (non-state-changing) JSON-RPC method. Most Ethereum JSON-RPC methods can be described in this way, since they query the blockchain for various pieces of information. Use the `/v1/jsonrpc/{network}/methods` endpoint to get the list of permitted methods.

## GET

``
**Get** https://private-anon-cf6e378447-infura.apiary-mock.com/v1/jsonrpc/network/method?params=
``

| Parameters |                                                                                                                                                                |        |
|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|
| network    | Ethereum network in lowercase. Possible values: `mainnet`, `ropsten`, `kovan`, `rinkeby`                                                                       | Enum   |
| method     | JSON-RPC method. Use the `/v1/jsonrpc/{network}/methodsendpoint` to get the list of permitted methods.                                                         | String |
| params     | This is the params field that would normally be part of the JSON-RPC POST body. Use the exact same format. If it's omitted, it will default to an empty array. | Array  |

### Request

**NOTE: Not sure what to do since this is a code generator piece. See: [Apiary](https://infura.docs.apiary.io/#reference/0//v1/jsonrpc/{network}/methods/get)**

| Response |                                                  |
|----------|--------------------------------------------------|
| jsonrpc  | enum                                             |
| id       | `number` JSON-RPC request ID                     |
| result   | `string` JSON-RPC result (can also be an object) |

#### JSON-RPC Response

`200`

**Headers**

`Content-Type:application/json`

**Body**

```
{
  "jsonrpc": "2.0",
  "id": -5294191,
  "result": "sed dolor eu ullamco"
}
```

**JSON Schema**

```
{
  "type": "object",
  "properties": {
    "jsonrpc": {
      "type": "string",
      "description": "JSON-RPC version",
      "enum": [
        "2.0"
      ]
    },
    "id": {
      "type": "integer",
      "description": "JSON-RPC request ID"
    },
    "result": {
      "type": "string",
      "description": "JSON-RPC result (can also be an object)"
    }
  },
  "required": [
    "jsonrpc",
    "id"
  ]
}
```

### Response

Bad JSON in `params` query parameter

``400``

**Headers**

``Content-Type:application/json``

### Response

JSON-RPC method is not a valid GET method

``404``

**Headers**

``Content-Type:application/json``

### Response

Server error

``500``

**Headers**

``Content-Type:application/json``

### Response

Ethereum client error

``502``

**Headers**

``Content-Type:application/json``
