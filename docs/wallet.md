---
title: wallet
---

Every Volibra Account comes with a Wallet after the KYC Process has been approved.




### GET `/wallet/`

Returns User's Wallet Information with Balance Details

#### Response 200

``` json
{
    "response": {
        "result": {
            "balances": [
                {
                    "XUS": 997999200
                }
            ]
        },
        "length": 1
    }
}
```



### GET `/wallet/payment-method`

List of payment methods registered with the account

``` json
{
	
}
```

#### Response 200

The streams were updated successfully.

### POST `/wallet/payment-method`

Register a payment method to the account.

#### Response 200

The stream was created successfully.

### POST `/wallet/{userId}/receiving-addresses`

get an address for deposit (receive) funds `id`.

``` json
{
	"userId": "<number, unique user id>",
	
}
```

#### Response 200

``` json
{
	
}
```




