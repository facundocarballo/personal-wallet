# Controllers

## Users
### Create
This endpoint is used to create a new user. The server expect to receive this kind of data in the body request.
```json
    {
        "name": "Facundo",
        "last_name": "Carballo",
        "email": "carballofacundo70@gmail.com",
        "password": "D59BB11C961041DF4D4DFB7F1D5E10C157BC60A4FC943E3FC9B7CE59B91DCA7A"
    }
```
> Please, if you want to use this endpoint by yourself check that your password is hashed with a SHA-256 Algorithm. :)

## Currency
### Create
This endpoint is used to create a new currency. The server expect to receive this kind of data in the body request.
```json
    {
        "name": "Peso Argentino",
        "symbol": "ARS",
        "usd_value": 1090
    }
```
> To make this request work, you have to provide a JWT thought the Authorization Header.