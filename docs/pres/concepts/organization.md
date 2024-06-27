---
title: Organization
authors: fachache
tags: []
---

Organizations enable the management of multitenancy.

By introducing the organization, `ARCHWAY` allows for centralized management of an organization's resources.

The information of an organization `id` and `name` will be transmitted along with user information.

## Organization

Organizations are entities that generally allow for the segregation of an organization's resources.

A user connected within an organization should not be able to access resources from another organization.

### Use cases

To better understand the concept of an organization and how it can help you, here are some examples.

#### A multi-site stock management application

 Imagine a franchise of any products.    
 All the stores in the franchise share the same product references.    
 Also, references, visuals, etc. can be shared by all stores.   
 However, stocks are unique to each store.  
 Here, the organization represents each of the stores.  
 Each store can therefore manage its own stocks, orders, accounting, etc.  
 One store cannot and should not interact with the stock of another store.   
 When the user logs in, they will be in an organization (a store) and will therefore have access to the data of that store and only that store.   
 Within this organization, applicable rights for this organization are applied.   
 The user (member), the organization, and its rights will be transmitted to the application behind `ARCHWAY` (This must be defined during the configuration of the `route`.).   
 The microservice will use these informations to filter and provide access to the relevant data for the member.
 This setup allows for efficient and secure management of multiple stores within the same franchise, ensuring data segregation and proper access control.
 
#### A EDM (Electronic Document Management) application

 You want to manage document in your enterprise.  
 You have differents departments in your enterprise.  
 Each department has its own set of documents.  
 The documents are not shared between the departments.  
 The organization represents each department.  
 Each department can manage its own documents independently.  
 Each members can create documents shared in current organization or private or shared with other members.
 When the user logs in, they will be in an organization (a department) and will therefore have access to the their documents, documents shared with him/her and documents of that department.
 The user (member), the organization, and its rights will be transmitted to the application behind `ARCHWAY` (This must be defined during the configuration of the `route`.).
 The microservice will use these informations to filter and provide access to the relevant data for the member.
 This setup allows for efficient and secure management of multiple departments within the same enterprise, ensuring data segregation and proper access control.
 

## Groups

Within an organization, administrators can define user groups.

User groups can be associated with one or more roles.

Depending on the mode `SINGLE` or `MULTIPLE`.

  - `SINGLE` The user will have to choose one of the groups they belong to. They will have all the roles associated with the chosen group.
  - `MULTIPLE` The user will end up with all the roles from the groups they belong to.
