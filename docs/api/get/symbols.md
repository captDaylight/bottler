# /v1/ticker/symbols

Get a list of supported symbols (currency pairs), including fiat, crypto, and tokens

### GET

`GET https://private-anon-cf6e378447-infura.apiary-mock.com/v1/ticker/symbols`

### Request

```
curl --include \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
  'https://api.infura.io/v1/ticker/symbols'
```

### Response

| Attributes                                 |          |                                         |
|--------------------------------------------|----------|-----------------------------------------|
| `symbols`                                  |          | array                                   |
| List of supported symbols (currency pairs) | `string` | 0                                       |

#### Symbols Response

`200`

**Headers**

`Content-Type:application/json`
