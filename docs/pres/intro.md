---
slug: intro
title: Introduction
authors: fachache
tags: []
---

ARCHWAY est née du constat que la plupart des projets basés sur une architecture microservice avaient les mêmes besoins.
Au sein des entreprises souvent les équipes, par méconnaissance, par insatisfaction des `API Gateway` existantes ou simplement par choix, préferent développer leur propre solution.

Souvent cette solution s'appelle `PORTAL`, `GATE` ou quelque chose comme cela. Si vous vous reconnaissez dans ce cas, vous êtes au bon endroit.

En général une solution à façon permet de contrôler plus facilement un certain nombre de points comme la gestion des utilisateurs.

## ARCHWAY

:::info
Archway est une `Application gateway` une sorte de super `API Gateway`.
:::

Pour faire cours, si vous savez ce qu'est une `API Gateway`, vous allez très vite comprendre ce qu'est une `APP Gateway`.

Surtout `ARCHWAY` propose une interface utilisateur complète permettant de contrôler toutes ses fonctionnalités.

### API Gateway

Une `API Gateway` est un service qui gère principalement le routage des requêtes issues d'une application basée sur une architecture microservice et plus particulièrement dans un `cluster`.

:::note
Dans une architecture microservice l'application n'est plus construite sur **un** `client` et **un** server, mais plutôt **un** `client` **(voir plusieurs)** et de **multiple** microservices.
:::

### Architecture microservices

L'architecture microservice est une bonne architecture car elle permet entre autre:

- **Scalabilité Facilitée** : Les microservices permettent de faire évoluer chaque service individuellement en fonction de ses besoins. Cela facilite la mise à l'échelle horizontale des services qui nécessitent plus de ressources sans avoir à mettre à l'échelle l'ensemble de l'application.
- **Développement Agile** : Les équipes de développement peuvent travailler de manière autonome sur des microservices spécifiques. Cela favorise le développement agile, accélère le déploiement et permet de mettre en production plus fréquemment.
- **Isolation des Erreurs** : En cas d'échec ou de bug dans un microservice, cela n'affecte généralement pas l'ensemble du système. Les erreurs sont isolées, ce qui facilite le diagnostic et la résolution.
- **Technologies Adaptées** : Chaque microservice peut être développé en utilisant la technologie la plus adaptée à son cas d'utilisation, ce qui permet d'utiliser différentes technologies au sein de l'application.
- **Meilleure Utilisation des Ressources** : Les ressources matérielles et logicielles peuvent être allouées plus efficacement car chaque microservice peut s'exécuter sur des serveurs indépendants.
 
### Implications

Comme dit précédement nous n'avons plus un serveur adressable par son adresse, mais de multiple services.

Ces derniers doivent être adressés de sorte d'être joignables facilement par le `client` (une application web généralement).

Probléme, dans un `cluster` (swarm ou k8s), on ne sait pas où sont les services. Il ne serait pas raisonnable d'exposer tous les services sur des ports différents.

Si vous exposiez tous les services sur des ports differents, cela voudrait dire que votre `client` devrait requêter ces derniers via une `URL` absolue (le port n'est pas inclut dans une requête relative).

```bash
# absolute request (to never do)
GET http://host:port/path1/path2?param1=value1&param2=value2
# relative request from root
GET /path1/path2?param1=value1&param2=value2
# relative request from path of current path (to avoid)
GET path2?param1=value1&param2=value2
```

Ce qui n'est pas envisageable. Imaginez que vous deviez livrer chaque `client` avec des `urls` differentes et gérer tous les services avec des ports distincts. Cela deviendrait très rapidement ingérable. 

Heureusement, les `clusters` ont leut propre gestionnaire de `DNS`, l'`ingress`. Dans le `cluster` chaque microservice est identifié par un nom fixe. 

L'`ingress` maintiendra la résolution des services par leur nom. Quelque soit le nombre d'instances de celui ci, leur positions (multi noeuds) ou leur `IPs`. Mais l'`ingress` n'est pas accessible de l'exterieur du `cluster`.

L'`API Gateway` sera le mandataire unique qui va permettre de resoudre les services dans le `cluster` à partir du `client` qui est à l'exterieur du `cluster` (en général un navigateur web). 

Imaginez un service web `foo-service` déployé dans le `cluster`. Il expose un enpoint `GET api/v1/bar`.

À l'exterieur du `cluster` vous voulez bien sûr accéder à ce `endpoint`. Une application web (`HTML/CSS/JS`), probablement elle même issue d'un microservice dans le `cluster`.
Cette application ne connait pas directement l'`IP` ou le `DNS` de `foo-service`.   
En revanche elle sait interroger le serveur dont est issue l'application elle même.   
En relatif elle pourra donc interroger le service `./foo/api/v1/bar`. (notez le prefix `foo` qui peut différer du nom du service `foo-service`)   
Cette requête arrivera sur l'`API Gateway` qui elle sait que les requêtes prefixée par `foo` doivent être redirigées vers le service `foo-service`. Et voilà le tour est joué.

Maintenant que l'intêret premier de l'`API Gateway` est touché du doigt. Qu'est ce que cela implique.

Puisque celle ci se trouve en frontal de notre application. Elle va pouvoir prendre en charge un certain nombre de choses pour nous. 

Par exemple la partie authentification et autorisation. En effet puisque l'`API Gateway` est la porte d'entrée de nos services, cela semble un bon choix de lui déleguer cette tâche.

### APP Gateway

Le routage, fonction première des `API Gateway` est (j'espère) trés bien prise en charge par les `API Gateway` du marché. 
Parfois cela passe par des fichiers de configuration assez obscure mais pourquoi pas. 

En revanche leur rôles s'arrete en géneral là. Si la plupart propose des mécanismes basiques d'authentification via des fichiers d'utilsateurs en dur. Cela ne peut bien sûr pas être utilisé en production.

De plus la partie autorisation se limite aux routes puisque ce sont les seuls objets connus de l'`API Gateway`.

En géneral toutes les `API Gateway` propose de connecter celle ci à des services externes tel que `KeyCloack` ou autre `Okta` via `oauth2` pour prendre en charge l'authentification et les autorisations.
Ceci est bien sûr une bonne solution en soit de déleguer cela à un service tier. Mais de notre point de vue cela complexifie grandement l'architecture de l'application, surtout pour des applications `on-premise` et encore plus pour des applications qui sont installé dans un rśeau privée (sans internet).

L'`APP Gateway` va donc proposer un certain nombre de services dont la partie authentification et autorisation, clé en main.


