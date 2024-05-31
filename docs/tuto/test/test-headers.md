---
slug: test-headers
title: Test Forward Headers
authors: fachache
tags: []
---

We will now test if the user's information is correctly forwarded to the backend (here `httpbin.org`).

Still in the `httpbin` interface, open the `HTTP Methods` section, then `Get`.

Like this:

![httpbin-open-get](../img/test/httpbin-open-get.png)

Click on `Try it out`, then `Execute`.

You should see something similar to this:

```json
{
  "args": {},
  "headers": {
    "Accept": "application/json",
    "Accept-Encoding": "gzip, deflate, br, zstd",
    "Accept-Language": "en",
    "Cache-Control": "no-cache",
    "Content-Length": "0",
    "Cookie": "archway=1e166086-2c0f-4e66-b93f-2e0fd0f1ec1f",
    "Forwarded": "proto=https;host=localhost;for=\"10.0.0.2:40308\"",
    "Host": "httpbin",
    "Organizationid": "663a891650967f4fc96565f9",
    "Organizationname": "DEFAULT",
    "Pragma": "no-cache",
    "Priority": "u=1, i",
    "Remote-User": "663a8727fe1c465d3bb93647",
    "Roles": "[\"HTTPBIN_TESTER\"]",
    "Sec-Ch-Ua": "\"Microsoft Edge\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
    "Sec-Ch-Ua-Mobile": "?0",
    "Sec-Ch-Ua-Platform": "\"Linux\"",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 Edg/125.0.0.0",
    "Username": "archway",
    "X-Forwarded-Host": "localhost"
  },
  "origin": "2a01:cb04:1251:b600:b9a6:1dbc:188b:e117,10.0.0.2",
  "url": "http,http://localhost:8080/get"
}
```

The interesting points are the following:

```json
{
  "headers": {
    "Accept-Language": "en",
    "Organizationid": "663a891650967f4fc96565f9",
    "Organizationname": "DEFAULT",
    "Remote-User": "663a8727fe1c465d3bb93647",
    "Roles": "[\"HTTPBIN_TESTER\"]",
    "Username": "archway",
  }
}
```

- Accept-Language: `ARCHWAY` sets the language defined by the user. If your application was internationalized, it should use this information.
- Username: the user's name in clear text.
- Remote-User: the user's ID.
- Organizationid: the organization's ID.
- Organizationname: the organization's name in clear text.
- Roles: the user's roles in the organization.

This information is important, it will allow the application to apply rights via roles but also to discriminate accessible data by the latter. This is at the user level but also at the organization level.

