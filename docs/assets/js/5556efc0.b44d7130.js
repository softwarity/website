"use strict";(self.webpackChunksoftwarity=self.webpackChunksoftwarity||[]).push([[4154],{6973:(e,n,i)=>{i.r(n),i.d(n,{VaultLogo:()=>d,assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=i(5893),s=i(1151);const r={slug:"features",title:"Features",authors:"fachache",tags:[]},l=void 0,a={id:"pres/features",title:"Features",description:"Here we will try to quickly present the features supported by ARCHWAY.",source:"@site/docs/pres/features.mdx",sourceDirName:"pres",slug:"/pres/features",permalink:"/pres/features",draft:!1,unlisted:!1,editUrl:"https://github.com/softwarity/website/tree/main/docs/pres/features.mdx",tags:[],version:"current",frontMatter:{slug:"features",title:"Features",authors:"fachache",tags:[]},sidebar:"presSidebar",previous:{title:"Introduction",permalink:"/pres/intro"},next:{title:"Gateway",permalink:"/pres/concepts/gateway"}},o={},c=[{value:"Route Management",id:"route-management",level:2},{value:"Securing Routes",id:"securing-routes",level:3},{value:"User Management",id:"user-management",level:2},{value:"Supported Features",id:"supported-features",level:3},{value:"MFA (Multi-Factor Authentication)",id:"mfa-multi-factor-authentication",level:3},{value:"Organizations (multitenant)",id:"organizations-multitenant",level:3},{value:"Authentication and Authorization",id:"authentication-and-authorization",level:3},{value:"Locales",id:"locales",level:3},{value:"Frontend",id:"frontend",level:2},{value:"Swagger-UI",id:"swagger-ui",level:2},{value:"Connections",id:"connections",level:2},{value:"Vault",id:"vault",level:2}],d=i(1172).Z;function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Here we will try to quickly present the features supported by ARCHWAY."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"All these features are accessible via the user interface."})}),"\n",(0,t.jsx)(n.h2,{id:"route-management",children:"Route Management"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ARCHWAY"})," is based on ",(0,t.jsx)(n.a,{href:"https://spring.io/projects/spring-cloud-gateway/",children:"Spring Cloud Gateway"}),"."]})}),"\n",(0,t.jsx)(n.p,{children:"It also offers most of the features provided by the latter."}),"\n",(0,t.jsx)(n.p,{children:"This is the minimum..."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Creation of routes"}),"\n",(0,t.jsx)(n.li,{children:"Definition of route conditions (Predicates)"}),"\n",(0,t.jsx)(n.li,{children:"Modification of requests (Filters)"}),"\n",(0,t.jsx)(n.li,{children:"Modification of responses (Filters)"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"securing-routes",children:"Securing Routes"}),"\n",(0,t.jsx)(n.p,{children:"It also adds a mechanism to secure routes and endpoints."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Is authentication required?"}),"\n",(0,t.jsx)(n.li,{children:"Is a specific role required?"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"You can manage route security at two levels:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"At the level of the route itself."}),"\n",(0,t.jsx)(n.li,{children:"At the level of the endpoints."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"user-management",children:"User Management"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ARCHWAY"})," manages several types of users:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"DB user, created in the database"}),"\n",(0,t.jsx)(n.li,{children:"OAuth2 user (Google, GitHub)"}),"\n",(0,t.jsx)(n.li,{children:"LDAP user"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["These users will be the users of the microservices behind the ",(0,t.jsx)(n.code,{children:"APP Gateway"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"supported-features",children:"Supported Features"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"User information"}),"\n",(0,t.jsx)(n.li,{children:"Organizations"}),"\n",(0,t.jsx)(n.li,{children:"MFA (Multi-Factor Authentication)"}),"\n",(0,t.jsx)(n.li,{children:"Groups within the organization (and therefore roles)"}),"\n",(0,t.jsx)(n.li,{children:"Password policy (complexity, failures, change)"}),"\n",(0,t.jsx)(n.li,{children:"Blocking"}),"\n",(0,t.jsx)(n.li,{children:"Allowed date and time ranges."}),"\n",(0,t.jsx)(n.li,{children:"Session time"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"mfa-multi-factor-authentication",children:"MFA (Multi-Factor Authentication)"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ARCHWAY"})," supports built-in ",(0,t.jsx)(n.code,{children:"MFA"})," (Multi-Factor Authentication) for users."]}),"\n",(0,t.jsx)(n.h3,{id:"organizations-multitenant",children:"Organizations (multitenant)"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ARCHWAY"})," allows managing ",(0,t.jsx)(n.code,{children:"tenants"})," (organizations)."]}),"\n",(0,t.jsx)(n.p,{children:"This feature allows you to compartmentalize data by organization."}),"\n",(0,t.jsxs)(n.p,{children:["Each ",(0,t.jsx)(n.code,{children:"tenant"})," can have its own configuration, its own users, its own groups, etc."]}),"\n",(0,t.jsx)(n.p,{children:"If the user is in multiple organizations, they will have to choose which organization they want to connect to."}),"\n",(0,t.jsx)(n.h3,{id:"authentication-and-authorization",children:"Authentication and Authorization"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ARCHWAY"})," offers a ready-to-use authentication and authorization mechanism of type ",(0,t.jsx)(n.code,{children:"RBAC"})," (role-based access control)."]}),"\n",(0,t.jsx)(n.p,{children:"This will allow you to easily use roles to secure your routes, services, and endpoints."}),"\n",(0,t.jsx)(n.p,{children:"In a few points:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"User management in the database"}),"\n",(0,t.jsx)(n.li,{children:"Password change by date"}),"\n",(0,t.jsx)(n.li,{children:"User repudiation"}),"\n",(0,t.jsx)(n.li,{children:"MFA (Multi-Factor Authentication)"}),"\n",(0,t.jsx)(n.li,{children:"Concept of groups (grouping of roles)"}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["As previously mentioned, ",(0,t.jsx)(n.code,{children:"ARCHWAY"})," manages ",(0,t.jsx)(n.code,{children:"tenants"}),". Also, a user can have different roles in each organization."]})}),"\n",(0,t.jsx)(n.h3,{id:"locales",children:"Locales"}),"\n",(0,t.jsxs)(n.p,{children:["You can configure locales via UI. ",(0,t.jsx)(n.code,{children:"ARCHWAY"})," will transmit in the ",(0,t.jsx)(n.code,{children:"HTTP"})," request the locale chosen by the user."]}),"\n",(0,t.jsx)(n.h2,{id:"frontend",children:"Frontend"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ARCHWAY"})," provides a modern interface for administering routes, users, organizations, etc."]}),"\n",(0,t.jsxs)(n.p,{children:["But not only that, ",(0,t.jsx)(n.code,{children:"ARCHWAY"})," supports certain features like:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Adding a user button"}),"\n",(0,t.jsx)(n.li,{children:"Consent popup"}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:"The user button allows you to:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"log in"}),"\n",(0,t.jsx)(n.li,{children:"change language"}),"\n",(0,t.jsx)(n.li,{children:"change organization"}),"\n",(0,t.jsx)(n.li,{children:"enable/disable MFA"}),"\n",(0,t.jsx)(n.li,{children:"update the password"}),"\n",(0,t.jsx)(n.li,{children:"access the user profile"}),"\n",(0,t.jsx)(n.li,{children:"log out"}),"\n"]})]}),"\n",(0,t.jsx)(n.h2,{id:"swagger-ui",children:"Swagger-UI"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ARCHWAY"})," provides a ",(0,t.jsx)(n.code,{children:"Swagger-UI"})," to visualize the ",(0,t.jsx)(n.code,{children:"OpenAPI"})," specifications."]}),"\n",(0,t.jsxs)(n.p,{children:["When you set the path of the ",(0,t.jsx)(n.code,{children:"OpenAPI"})," specification in the route, the ",(0,t.jsx)(n.code,{children:"Swagger-UI"})," will be available."]}),"\n",(0,t.jsx)(n.h2,{id:"connections",children:"Connections"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ARCHWAY"})," allows you to connect in several ways:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Via the login form"}),"\n",(0,t.jsxs)(n.li,{children:["Via an ",(0,t.jsx)(n.code,{children:"OAuth2"})," mechanism"]}),"\n",(0,t.jsxs)(n.li,{children:["Via a ",(0,t.jsx)(n.code,{children:"JWT"})," mechanism"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"An administration interface allows you to view the connection history (especially the connection failures)."}),"\n",(0,t.jsx)(n.h2,{id:"vault",children:"Vault"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ARCHWAY"})," offers a vault similar to what ",(0,t.jsx)(n.code,{children:"AshiCorp Vault"})," offers but simpler."]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.p,{children:"The vault manages 2 types of items:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"secrets that are encrypted in the database with a symmetric key."}),"\n",(0,t.jsx)(n.li,{children:"and clear values."}),"\n"]})]}),"\n",(0,t.jsx)(n.p,{children:"You can add an expiration date to the encrypted items to be informed of the need to update them."}),"\n",(0,t.jsx)(n.p,{children:"Moreover, encrypted elements are never displayed in the interface, which helps avoid certain mishaps."}),"\n","\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:"The items stored in the vault can be used in different places identified by this icon:"}),(0,t.jsx)(d,{width:"100px",height:"100px"})]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1172:(e,n,i)=>{i.d(n,{Z:()=>a});var t,s,r=i(7294);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e},l.apply(this,arguments)}const a=e=>{let{title:n,titleId:i,...a}=e;return r.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-labelledby":i},a),n?r.createElement("title",{id:i},n):null,t||(t=r.createElement("path",{d:"M20 2H4c-1 0-2 .9-2 2v3.01c0 .72.43 1.34 1 1.69V20c0 1.1 1.1 2 2 2h14c.9 0 2-.9 2-2V8.7c.57-.35 1-.97 1-1.69V4c0-1.1-1-2-2-2zm-1 18H5V9h14v11zm1-13H4V4h16v3z"})),s||(s=r.createElement("path",{d:"M9 12h6v2H9z"})))}},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>l});var t=i(7294);const s={},r=t.createContext(s);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);