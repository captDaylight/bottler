# Make Requests

## JSON-RPC Methods

Below is a quick command line example using CURL:

```
$ curl -X POST
-H "Content-Type: application/json"
--data '{"jsonrpc": "2.0", "id": 1, "method": "eth_blockNumber",
"params": []}'
"https://mainnet.infura.io/YOUR-API-KEY"
```

The result should look something like this:

```
$ {"jsonrpc": "2.0","result": "0x3ccb11", "id":1}
```

**NOTE:** "0x3ccb11" will be replaced with the block number of the most recent block on that network

[View Supported JSON-RPC Methods]()

## Rest-like Infura API

```
https://api.infura.io/v1/jsonrpc/mainnet/eth_blockNumber?token=YOUR-API-KEY
```

[More API Documentation]()

### Useful Links
[More on Getting Started](https://blog.infura.io/getting-started-with-infura-28e41844cc89)
