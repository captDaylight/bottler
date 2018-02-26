# /v1/blacklist

Return a blacklist of phishing sites. This list is maintained by GitHub user 409H at [https://github.com/409H/EtherAddressLookup/blob/master/blacklists/domains.json](https://github.com/409H/EtherAddressLookup/blob/master/blacklists/domains.json).

### GET

`GET https://api.infura.io/v1/blacklist`

### Request

```
curl --include \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
  'https://api.infura.io/v1/blacklist'
```

### Response

| Attributes |   |
|------------|---|
| string     | 0 |

#### List of blacklisted phishing domains

`200`

**Headers**

`Content-Type:application/json`

**Body**

```
[
  "quis esse ut",
  "dolor quis",
  "dolore culpa et",
  "laboris Ut ut nisi commodo",
  "l"
]
```

**JSON Schema**

```
{
  "type": "array",
  "items": {
    "type": "string"
  }
}
```

#### Response

Github is having issues

`502`

**Headers**

`Content-Type:application/json`
