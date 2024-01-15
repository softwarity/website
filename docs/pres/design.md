---
slug: design
title: Principes de conception
authors: fachache
tags: []
---

`ARCHWAY` est construit sur des technologies éprouvées.

## `Back-end`

La partie `back-end` s'appuie sur l'écosysteme `Spring`. Et plus particulierement `Spring cloud gateway`.

`Spring Cloud Gateway` est une `API gateway` dynamique pour microservices.
Il est construit sur `Spring Framework` et `Spring Boot`, offrant une manière facile de créer le routage d'`APIs`.
`Spring Cloud Gateway` est souvent utilisé dans les architectures basées sur les microservices pour gérer efficacement les requêtes entre les différents services.

## `Front-end`

La partie `front-end`, elle, s'appuie sur l'écosysteme `Angular`.  `Angular` et `Material Angular` sont utiliser principalement dans l'interface utilisateur. Avec d'autres `Framework` ou librairies comme `Fontawesome` ou `Echartjs`.

`Angular` est un framework de développement front-end basé sur TypeScript, développé et maintenu par `Google`.

`Angular Material` est une bibliothèque de composants `UI` pour `Angular`, suivant les principes du `Material Design` de `Google`.

## `Database`

Pour la base de donné nous avons choisi `MongoDB`.

`MongoDB` est une base de données `NoSQL` orientée documents, très populaire pour sa flexibilité et ses performances.

## Schemas

### Routes

```mermaid
erDiagram
ArchRoute {
    string _id PK
    string name
    string description
    string locale
    Security security
    Predicates predicates
    Filters filters
    string uri
    string[] uris
    int order
    boolean link
    boolean enabled
    string[] tags
    boolean system
    string createdBy "Auto, userId"
    date createdAt "Auto"
    string updatedBy "Auto, userId"
    date updatedAt "Auto"
}
Security {
    boolean authenticated
    string[] roles FK
    string[] usernames FK "userId"
}
ArchRoute ||--|| Security : security
ArchRoute ||--|| Predicates : predicates
ArchRoute ||--|| Filters : filters
```

### Route Filters

```mermaid
erDiagram
Filters {
    AddRequestHeader[] addRequestHeaders
    AddRequestHeader[] addRequestHeadersIfNotPresent
    AddRequestParameterFilter[] addRequestParameters
    AddResponseHeaderFilter[] addResponseHeaders
    LocalResponseCacheFilter localResponseCache 
    string prefixPath
    RedirectToFilter redirectTo
    RemoveJsonAttributesResponseBodyFilter removeJsonAttributesResponseBody
    string[] removeRequestHeaders
    string[] removeRequestParameters
    string[] removeResponseHeaders
    Long requestHeaderSize
    RewritePathFilter rewritePath
    string setPath
    SetRequestHeaderFilter[] setRequestHeaders
    SetResponseHeaderFilter[] setResponseHeaders
    string setStatus
    int stripPrefix
    boolean classpathFile
    boolean archway
    ModifyBaseHref modifyBaseHref
    SendAuthFilter sendAuth
    boolean imagePlugin
}
Filters||--o{ AddRequestHeader : addRequestHeaders
Filters ||--o{ AddRequestHeader : addRequestHeadersIfNotPresent
Filters ||--o{ AddRequestParameterFilter : addRequestParameters
Filters ||--o{ AddResponseHeaderFilter : addResponseHeaders
Filters ||--|| LocalResponseCacheFilter : localResponseCache 
Filters ||--|| RedirectToFilter : redirectTo 
Filters ||--|| RemoveJsonAttributesResponseBodyFilter : removeJsonAttributesResponseBody
Filters ||--|| RewritePathFilter : rewritePath
Filters ||--o{ SetRequestHeaderFilter : setRequestHeaders
Filters ||--o{ SetResponseHeaderFilter : setResponseHeaders
Filters ||--|| ModifyBaseHref : modifyBaseHref
Filters ||--|| SendAuthFilter : sendAuth
SendAuthFilter {
  string mode "FORM, JWT"
  string username FK "userId"
  string password
}
RemoveJsonAttributesResponseBodyFilter {
    string[] attributeNames
    boolean recursive
}
SetRequestHeaderFilter {
    string name
    string value
}
AddResponseHeaderFilter {
    string name
    string value
}
ModifyBaseHref {
  string html
  string json
  string javascript
}
RedirectToFilter {
  string status
  string url
}
SetResponseHeaderFilter {
    string name
    string value
}
AddRequestHeader {
    string name
    string value
}
RewritePathFilter {
    string regexp
    string replacement
}
AddRequestParameterFilter {
    string name
    string value
}
LocalResponseCacheFilter {
    long seconds
    long kilobytes
}
```
### Route Predicates

```mermaid
erDiagram
Predicates {
    CookiePredicate[] cookies
    HeaderPredicate[] headers
    string[] hosts
    string[] methods
    PathPredicate path
    QueryPredicate query
    string[] remoteAddrs
    WeightPredicate weight
    string[] xForwardedRemoteAddr
}
Predicates ||--o{ CookiePredicate : cookies
Predicates ||--o{ HeaderPredicate : headers
Predicates ||--|| PathPredicate : path
Predicates ||--|| QueryPredicate : query
Predicates ||--|| WeightPredicate : weight
QueryPredicate {
    string param
    string regexp
}
PathPredicate {
    string[] paths
    boolean matchTrailingSlash
    string linkName
    string swagger
}
WeightPredicate {
    string group
    int weight
}
CookiePredicate {
    string name
    string regexp
}
HeaderPredicate {
    string name
    string regexp
}
```

### User

```mermaid
erDiagram
ArchUser {
    string _id PK "Manual"
    string type "DB or LDAP"
    string password "Encoded"
    string fullname
    string email
    boolean nonEditable
    boolean nonGroupsEditable
    boolean nonProfilesEditable
    int failedLoginAttempts
    date passwordUpdatedAt
    int passwordDayExpiration
    date temporaryPasswordExpiration
    string temporaryPassword
    string[] profiles FK
    string[] groups FK
    string locale
    ArchBusinessAccess businessAccess
    string sessionTTL
    string createdBy "Auto, userId"
    date createdAt "Auto"
    string updatedBy "Auto, userId"
    date updatedAt "Auto"
}
ArchUser ||--|| ArchBusinessAccess : businessAccess
ArchUser }o--o{ ArchProfile : profiles
ArchUser }o--o{ ArchGroup : groups
ArchProfile }o--o{ ArchRole : roles
ArchProfile {
    string _id PK "Auto"
    string name
    string description
    boolean nonEditable
    string[] roles FK
    string createdBy "Auto, userId"
    date createdAt "Auto"
    string updatedBy "Auto, userId"
    date updatedAt "Auto"
}
ArchGroup {
    string _id PK "Auto"
    string name
    string createdBy "Auto, userId"
    date createdAt "Auto"
    string updatedBy "Auto, userId"
    date updatedAt "Auto"
}
ArchRole {
    string _id PK "Auto"
    string description
    string[] tags
    boolean system
    string createdBy "Auto, userId"
    date createdAt "Auto"
    string updatedBy "Auto, userId"
    date updatedAt "Auto"
}
ArchBusinessAccess {
    string timeFrom
    string timeTo
    string timezone
    int[] days
    boolean enabled
    string dateFrom
    string dateTo
    boolean inherited
}
ArchUserPasswordHistory ||--o{ ArchUser : userId
ArchConnection ||--o{ ArchUser : username
ArchTOTP ||--|| ArchUser : _id
ArchUserPasswordHistory {
    string _id PK "Auto"
    string userId FK "userId"
    string password "Encoded" 
    date date "Auto"
}
ArchTOTP {
    string _id PK,FK "Manual, userId"
    string secretKey
    int validationCode
    int[] scratchCodes
    boolean enabled
    string[] allowedBrowsers
    string createdBy "Auto"
    date createdAt "Auto, userId"
    string updatedBy "Auto"
    date updatedAt "Auto, userId"
}
ArchConnection {
  string _id PK "Auto"
  string username FK
  string client
  string authType
  string status
  string message
  date createdAt "Auto, userId"
}
```

### Push

```mermaid
erDiagram
ArchSubscription {
  string _id PK
  string endpoint
  Keys keys
}
Keys {
  string p256dh
  string auth
}
ArchSubscription ||--|| Keys : keys
```

```mermaid
erDiagram
ArchPasswordPolicy {
    int historical     "Number of previous passwords to remember."
    int maxLoginAttempts "Maximum number of login attempts before locking the account."
    int minLength      "Minimum password length."
    int minLowercase   "Minimum number of lowercase letters."
    int minUppercase   "Minimum number of uppercase letters."
    int minDigits      "Minimum number of digits."
    int minSpecial     "Minimum number of special characters."
}
ArchBusinessAccessPolicy {
    string timeFrom  "Start time for business access."
    string timeTo    "End time for business access."
    string timezone
    int[] days
}
ArchPolicies {
    ArchBusinessAccessPolicy businessAccessPolicy
    ArchPasswordPolicy passwordPolicy
    string sessionTTL
}
ArchPolicies ||--|| ArchBusinessAccessPolicy : businessAccessPolicy
ArchPolicies ||--|| ArchPasswordPolicy : passwordPolicy
```

### Application configuraiton

```mermaid
erDiagram
ArchLocale {
    string value PK
    string label
    boolean enabled
    boolean fallback
}
```

### Configurations

```mermaid
erDiagram
ArchConfiguration {
  string logoBackgroundColor
  string logoBackgroundCustomId
  string applicationName
  boolean pushEnabled
  string host
  boolean swaggerUI
  byte[] jwtPrivateKey
  byte[] jwtPublicKey
  string jwtAlgorithm
}
ArchMailConfiguration {
    string host
    int port
    string username
    string password
    string protocol
    boolean auth
    boolean starttls
    boolean starttlsRequired
    boolean enabled
    string validationDelay
}
ArchLdapConfiguration {
    boolean enabled
    string uri
    string bindDN
    string baseDN
    boolean zz
    string filter
    string cert
    LdapAutorisation autorisation
}
ArchLdapConfiguration ||--|| LdapAutorisation : autorisation
LdapAutorisation {
    boolean groupFetching
    string groupPrefix
    boolean profileFetching
    string profilePrefix
}
ArchPushConfiguration {
  string publicKey
  string privateKey
  string subject
}
ArchPreferences {
    string locale
    boolean utcTimeZone
}
```

### Vault
```mermaid
erDiagram

ArchKey {
  byte[] key
  string createdBy
  date createdAt
  string updatedBy
  date updatedAt
}

ArchVaultItem {
  string _id PK
  string value
  string description
  boolean enabled
  date expiresOn
  boolean encrypted
  string updatedBy 
  date updatedAt
}
```
