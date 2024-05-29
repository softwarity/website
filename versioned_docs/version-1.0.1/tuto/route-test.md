---
slug: test-route
title: Tester la route
authors: fachache
tags: []
---

Pour tester la route précédément créée nous allons utiliser `curl`.

Comme nous avons définit le besoin d'être authentifier pour accéder à la route, nous allons utiliser `JWT`.

## Récupérer un jeton `JWT`

:::warning
Attention le token JWT n'est valable que 15 minutes.
:::

### S'authentifier

Remplacer `ADMIN` et `ADMIN_PWD` par les valeurs que vous avez choisies.

```bash
curl -D - -X POST https://127.0.0.1:8080/api/jwt/v1/auth -H "Content-Type: application/json" -d '{"username": "ADMIN", "password": "ADMIN_PDW"}'
```

### Résultat

```json
{
  "token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJyb2xlcyI6WyJBUkNIV0FZX0FQUCIsIkFVRElUT1IiLCJEQkdBVEVfQVBQIiwiR0VORVJBTF9NTkciLCJHUk9VUFNfTU5HIiwiTE9DQUxFU19NTkciLCJNT05HT19BUFAiLCJNU0dfQlJPQURDQVNUIiwiUE9SVEFJTkVSX0FQUCIsIlBST0ZJTEVTX01ORyIsIlJBQkJJVE1RX0FQUCIsIlJPTEVTX01ORyIsIlJPVVRFU19NTkciLCJTV0FHR0VSX0FQUCIsIlNZU1RFTV9NTkciLCJVU0VSU19NTkciLCJWQVVMVF9NTkciXSwiZ3JvdXBzIjpbXSwic3ViIjoiYXJjaHdheSIsImlzcyI6ImFyY2h3YXkiLCJpYXQiOjE3MDU0NDE4MTIsIm5iZiI6MTcwNTQ0MTgxMiwiZXhwIjoxNzA1NDQyNzEyfQ.eUn4XS07xEmbz1YsbxO5flBWsFPUQhrzB47pFBO5-7veV_mE0153foJ-YjlTHEbI8E5HT9-UQ5GAmOhJyjPyql2XMDb3h2UteB4EY7kCtEhRamFnGS9ye9RzGq2-utESJIFnEsrQ3Bb0d80YqnXX73zTdX6zqfE2QP5E2l4LUlE5i4MDcioHWvokTL-FN8rDNDEj0YIG-ESq5Fx87ES5LATi2A9gqRgb4qd_eYsXza0rKCIug89QqGO8zxAT24SV2HLy_mk_-oCiXHjGwHLknJAdNTl-pUTQ0jh88iVSAjwz2LFRoXAdhbrhTO65UnFbmjI4h7l3Tc502Aun_TBvpQ",
  "refresh":"eyJ0eXAiOiJSRUZSRVNIIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJhcmNod2F5IiwiaXNzIjoiYXJjaHdheSIsImlhdCI6MTcwNTQ0MTgxMiwibmJmIjoxNzA1NDQxODEyLCJleHAiOjE3MDU0NjM0MTJ9.hSUR5_EWREw9rCO1X7Ji0V03hdgNNOYe3Ytp8iY35KOxSAZdzO6M41L3nXjI0hNJp1N-MWCZNqK8FPdcLtlJk0lQWaFIepHbVsP-3LnetEh4YMTsD8oKTwOdQqITA3Is8kM8fxaX3BE2uzeo_OzgBOfqyqtfgT5Yc1WRLdLRNWMKYwmWpWShkn96sUbkalz-SNcEMn3Y1v-380xOKFxsdmL3E-GC21kAsm6Km1O9B0j-WC93hqrXxPQ5UIPNFTglUPiumYRXYWkZ7dMEDtjfqoaOsZFTB1SGt4x0ieaP0AIxlNUi_TePZ3aDPDGI2yaR1dNzO5656b2UivLe3AykYg"
}
```

## Tester la route

Remplacer le token aprés `Bearer` par le `token` généré précédement.

```bash
curl -v -k -X GET http://127.0.0.1:8080/httpbin/get  -H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJyb2xlcyI6WyJBUkNIV0FZX0FQUCIsIkFVRElUT1IiLCJEQkdBVEVfQVBQIiwiR0VORVJBTF9NTkciLCJHUk9VUFNfTU5HIiwiTE9DQUxFU19NTkciLCJNT05HT19BUFAiLCJNU0dfQlJPQURDQVNUIiwiUE9SVEFJTkVSX0FQUCIsIlBST0ZJTEVTX01ORyIsIlJBQkJJVE1RX0FQUCIsIlJPTEVTX01ORyIsIlJPVVRFU19NTkciLCJTV0FHR0VSX0FQUCIsIlNZU1RFTV9NTkciLCJVU0VSU19NTkciLCJWQVVMVF9NTkciXSwiZ3JvdXBzIjpbXSwic3ViIjoiYXJjaHdheSIsImlzcyI6ImFyY2h3YXkiLCJpYXQiOjE3MDU0NDE4MTIsIm5iZiI6MTcwNTQ0MTgxMiwiZXhwIjoxNzA1NDQyNzEyfQ.eUn4XS07xEmbz1YsbxO5flBWsFPUQhrzB47pFBO5-7veV_mE0153foJ-YjlTHEbI8E5HT9-UQ5GAmOhJyjPyql2XMDb3h2UteB4EY7kCtEhRamFnGS9ye9RzGq2-utESJIFnEsrQ3Bb0d80YqnXX73zTdX6zqfE2QP5E2l4LUlE5i4MDcioHWvokTL-FN8rDNDEj0YIG-ESq5Fx87ES5LATi2A9gqRgb4qd_eYsXza0rKCIug89QqGO8zxAT24SV2HLy_mk_-oCiXHjGwHLknJAdNTl-pUTQ0jh88iVSAjwz2LFRoXAdhbrhTO65UnFbmjI4h7l3Tc502Aun_TBvpQ'
```

### Résultat

```json
{
  "args": {}, 
  "headers": {
    "Accept": "*/*", 
    "Accept-Language": "en", 
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJyb2xlcyI6WyJBUkNIV0FZX0FQUCIsIkFVRElUT1IiLCJEQkdBVEVfQVBQIiwiR0VORVJBTF9NTkciLCJHUk9VUFNfTU5HIiwiTE9DQUxFU19NTkciLCJNT05HT19BUFAiLCJNU0dfQlJPQURDQVNUIiwiUE9SVEFJTkVSX0FQUCIsIlBST0ZJTEVTX01ORyIsIlJBQkJJVE1RX0FQUCIsIlJPTEVTX01ORyIsIlJPVVRFU19NTkciLCJTV0FHR0VSX0FQUCIsIlNZU1RFTV9NTkciLCJVU0VSU19NTkciLCJWQVVMVF9NTkciXSwiZ3JvdXBzIjpbXSwic3ViIjoiYXJjaHdheSIsImlzcyI6ImFyY2h3YXkiLCJpYXQiOjE3MDU0NDIwMDUsIm5iZiI6MTcwNTQ0MjAwNSwiZXhwIjoxNzA1NDQyMDY1fQ.G9kXjzxReHh_fVdICaG3ovJJ8P7zeRVtQDx6lm05hKlojgYLtm0q2sj6xWgrKt4_vJH-MlAnUwWi4QWrIVMP_ywK1fPXhlg5qTUxYRtgoHWXjHRTSrEGNPvpbKtPrLgBpr6vmbU9qmnUBwGBqtslkKMbQkUaX5nGHOZ6kqNOazk7hywN1TsVjymC7S1N9pTM-iwSTyPgif2K2Lyk2zME350kc-RgswNIBRDS4N7nzplxdydc9lOBZypD4F9kks0xecan52ydb6OeaEFjBb_vUhSPiphqNEcXdWfLLacIRX_eaq7srQLC4OIDXbBav5yGboCK46xtJux8cM6G_P_AMA", 
    "Content-Length": "0", 
    "Forwarded": "proto=http;host=\"127.0.0.1:8282\";for=\"172.19.0.1:48070\"", 
    "Host": "httpbin.org", 
    "User-Agent": "curl/7.88.1", 
    "X-Amzn-Trace-Id": "Root=1-65a6fad5-1f851ac67315e738232d6b15", 
    "X-Forwarded-Host": "127.0.0.1:8282", 
    "X-Forwarded-Prefix": "/httpbin"
  }, 
  "origin": "172.19.0.1, 83.202.135.20", 
  "url": "/httpbin"
}
```

:::info
Le `token` présent dans le résultat de `httpbin` n'est pas le même que celui envoyé.
:::

Celui ci est celui activé par le filtre que nous avons positionné précédement.

![connection](img/create-route-filter-2.png)

Vous pouvez copier ce `token` et le décoder sur la page de [jwt.io](https://jwt.io/#debugger-io)