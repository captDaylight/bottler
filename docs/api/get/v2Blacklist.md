# /v2/blacklist

Return a blacklist of phishing sites, as well as a whitelist and a fuzzylist. This list is maintained by the MetaMask project at [https://github.com/MetaMask/eth-phishing-detect/blob/master/src/config.json](https://github.com/MetaMask/eth-phishing-detect/blob/master/src/config.json).

### GET

`GET https://api.infura.io/v2/blacklist`

### Request

### Response

#### Attributes

`version` - required number - Version

`tolerance` - required number - Tolerance

`fuzzylist` - required array

`whitelist` - required array

`blacklist` - required array

#### Phising blacklist, whitelist, and fuzzylist

`200`

**Headers**

`Content-Type:application/json`

**Body**

```
{
  "version": 38611173,
  "tolerance": 49572925,
  "fuzzylist": [
    "eiusmod anim mollit Ut",
    "minim et ea ex"
  ],
  "whitelist": [
    "irure Duis",
    "officia minim voluptate cillum ullamco",
    "nostrud aliquip",
    "ex in sint velit",
    "Excepteur veniam fugi"
  ],
  "blacklist": [
    "do in tempor consectet"
  ]
}
```

**JSON Schema**

```
{
  "type": "object",
  "properties": {
    "version": {
      "type": "integer",
      "description": "Version"
    },
    "tolerance": {
      "type": "integer",
      "description": "Tolerance"
    },
    "fuzzylist": {
      "description": "Fuzzylist",
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "whitelist": {
      "description": "Whitelist",
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "blacklist": {
      "description": "Blacklist",
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  "required": [
    "version",
    "tolerance",
    "fuzzylist",
    "whitelist",
    "blacklist"
  ]
}
```

#### Response

Github is having issues

`502`

**Headers**

`Content-Type:application/json`
