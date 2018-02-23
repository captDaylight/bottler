# /v1/jsonrpc/network

A request using an "HTTP POST-compatible" (state-changing) JSON-RPC method. Use the `/v1/jsonrpc/{network}/methods` endpoint to get the list of permitted methods. Use the regular Ethereum JSON-RPC format for the POST body.

## POST

```
**POST** https://private-anon-cf6e378447-infura.apiary-mock.com/v1/jsonrpc/network
```

### Parameters

|        |                              |        |
|--------|------------------------------|--------|
| Symbol | Ticker symbol (currency pair | string |

### Request

#### Attributes

`jsonrpc` - required enum

JSON-RPC version

`2.0` string

`method` - required enum

Ethereum JSON-RPC method

|                        |        |
|------------------------|--------|
| eth_sendRawTransaction | string |
| eth_estimateGas        | string |
| eth_submitWork         | string |
| eth_submitHashrate     | string |

`params` - required array

JSON-RPC parameters (can be empty)

### Response

#### Attributes

`jsonrpc` - required enum

JSON-RPC version

`2.0` string

`id` - required number - JSON-RPC request ID

`result` string - JSON-RPC result (can also be an object)

#### Ticker

`200`

**Headers**

`Content-Type:application/json`

**Body**

```
{
  "jsonrpc": "2.0",
  "id": 4198843
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

### Request

#### Attributes

`jsonrpc` - required num

JSON-RPC version

`2.0` - string

`id` - required number - JSON-RPC request ID

`method` - required enum

Ethereum JSON-RPC method

|                        |        |
|------------------------|--------|
| eth_sendRawTransaction | string |
| eth_estimateGas        | string |
| eth_submitWork         | string |
| eth_submitHashrate     | string |

`params` - required array - JSON-rpc result (can also be an object)

### Response

Bad JSON in POST body or missing Content-Type Headers

`400`

**Headers**

`Content-Type:application/JSON`

### Response

JSON-RPC method is not a valid POST method

`404`

### Response

Server error

`500`

**Headers**

`Content-Type:application/JSON`

### Response

Ethereum client error

`502`

**Headers**

`Content-Type:application/JSON`
