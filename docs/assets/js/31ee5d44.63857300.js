"use strict";(self.webpackChunksoftwarity=self.webpackChunksoftwarity||[]).push([[2015],{1889:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var n=i(5893),r=i(1151);const t={slug:"access-control",title:"Contr\xf4le d'acc\xe9s",authors:"fachache",tags:[]},l=void 0,c={id:"pres/concepts/access-control",title:"Contr\xf4le d'acc\xe9s",description:"Clients",source:"@site/versioned_docs/version-1.0.1/pres/concepts/access-control.md",sourceDirName:"pres/concepts",slug:"/pres/concepts/access-control",permalink:"/1.0.1/pres/concepts/access-control",draft:!1,unlisted:!1,editUrl:"https://github.com/softwarity/website/tree/main/versioned_docs/version-1.0.1/pres/concepts/access-control.md",tags:[],version:"1.0.1",frontMatter:{slug:"access-control",title:"Contr\xf4le d'acc\xe9s",authors:"fachache",tags:[]},sidebar:"presSidebar",previous:{title:"Gateway",permalink:"/1.0.1/pres/concepts/gateway"},next:{title:"Param\xeatres r\xe9gionaux",permalink:"/1.0.1/pres/concepts/locales"}},o={},a=[{value:"Clients",id:"clients",level:2},{value:"Utilisateurs",id:"utilisateurs",level:3},{value:"Services tiers",id:"services-tiers",level:3},{value:"RBAC",id:"rbac",level:2},{value:"R\xf4les",id:"r\xf4les",level:2},{value:"Profils",id:"profils",level:2},{value:"Groupes",id:"groupes",level:2},{value:"Authentification \xe0 2 facteurs",id:"authentification-\xe0-2-facteurs",level:2}];function u(e){const s={br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"clients",children:"Clients"}),"\n",(0,n.jsx)(s.p,{children:"Les clients de vos services, sont simplement les utilisateurs ou les services devant l'application."}),"\n",(0,n.jsx)(s.h3,{id:"utilisateurs",children:"Utilisateurs"}),"\n",(0,n.jsx)(s.p,{children:"Pour les clients humains, lorsqu'ils tentent d'acceder \xe0 l'application, un ecran de login leur sera propos\xe9."}),"\n",(0,n.jsx)(s.h3,{id:"services-tiers",children:"Services tiers"}),"\n",(0,n.jsxs)(s.p,{children:["Pour les clients qui sont eux m\xeames des applications, un mecanisme d'authentification par ticket ",(0,n.jsx)(s.code,{children:"JWT"})," lui sera propos\xe9. Plus particuli\xe8rement 2 ",(0,n.jsx)(s.code,{children:"endpoints"}),":"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Un ",(0,n.jsx)(s.code,{children:"endpoint"})," pour s'authentifier."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Un ",(0,n.jsx)(s.code,{children:"endpoint"})," pour rafraichir le tocken d'authentification."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"rbac",children:"RBAC"}),"\n",(0,n.jsx)(s.p,{children:"Le contr\xf4le d'acc\xe8s bas\xe9 sur les r\xf4les (RBAC) est un m\xe9canisme de contr\xf4le d'acc\xe8s qui d\xe9finit les r\xf4les de chaque utilisateur."}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"ARCHWAY"})," Propose un m\xe9canisme simple pour les g\xe9rer."]}),"\n",(0,n.jsxs)(s.p,{children:["Cette gestion est dite \xe0 plat. En effet il existe des syst\xe8mes de gestion des r\xf4les hierarchiques. Mais cela devient tr\xe8s rapidement difficile \xe0 g\xe9rer. Nous avont donc choisi une gestion non hierarchique des r\xf4les. Un m\xe9canisme appel\xe9 ",(0,n.jsx)(s.code,{children:"Profile"})," d'\xe9crit plus loin permet n\xe9anmoins de regrouper les r\xf4les."]}),"\n",(0,n.jsx)(s.h2,{id:"r\xf4les",children:"R\xf4les"}),"\n",(0,n.jsxs)(s.p,{children:["Un r\xf4le devrait par son nom \xe9voqu\xe9 l'action qu'il autorise et l'objet m\xe9tier sur lequel il s'applique.",(0,n.jsx)(s.br,{}),"\n","Aussi les r\xf4les devraient \xeatre le plus atomiques possibles."]}),"\n",(0,n.jsx)(s.p,{children:"Par exemple, il vaut mieux cr\xe9er :"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"MANAGER_USER"}),"\n",(0,n.jsx)(s.li,{children:"VIEWER_USER"}),"\n",(0,n.jsx)(s.li,{children:"MANAGER_GROUP"}),"\n",(0,n.jsx)(s.li,{children:"VIEWER_GROUP"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Plut\xf4t que ceci:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"ADMIN"}),"\n",(0,n.jsx)(s.li,{children:"VIEWER"}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"profils",children:"Profils"}),"\n",(0,n.jsx)(s.p,{children:"Pour faciliter l'association des r\xf4les aux utilisateurs une abstraction appel\xe9 profil permet de regrouper ces derniers."}),"\n",(0,n.jsx)(s.p,{children:"Plusieurs r\xf4les peuvent \xeatre associ\xe9s \xe0 un profil et plusieurs profils peuvent \xeatre associ\xe9s \xe0 un utilisateur."}),"\n",(0,n.jsx)(s.p,{children:"Pour faire simple on imagine qu'un profil d'adminstrateur aura bien plus de r\xf4les qu'un exploitant de l'application."}),"\n",(0,n.jsx)(s.p,{children:"Un profil est donc un regroupement de r\xf4les."}),"\n",(0,n.jsx)(s.p,{children:"Ce sont les profils qui seront associ\xe9s aux utilisateurs et non directements les r\xf4les."}),"\n",(0,n.jsx)(s.h2,{id:"groupes",children:"Groupes"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"ARCHWAY"})," propose aussi une notion de groupes. Ceux ci ne sont pas \xe0 confondre avec les profils."]}),"\n",(0,n.jsx)(s.p,{children:"Les profils d\xe9finissent les actions de que vous pouvez faire alors que les groupes permettrait de r\xe9duire la port\xe9 des \xe9l\xe9ments impact\xe9s par ces actions."}),"\n",(0,n.jsx)(s.p,{children:"Par exemple imaginons une application g\xe9rant des documents avec des niveaux d'accr\xe9ditations diff\xe9rents."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"SECRET"}),"\n",(0,n.jsx)(s.li,{children:"CONFIDENTIAL"}),"\n",(0,n.jsx)(s.li,{children:"PUBLIC"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"On pourrait cr\xe9er des groupes, images de ces niveaux d'accr\xe9ditations."}),"\n",(0,n.jsxs)(s.p,{children:["Les groupes poss\xe9d\xe9s par l'utilisateur courant pourront \xeatre transmis aux microservices via des ent\xeates ",(0,n.jsx)(s.code,{children:"HTTP"})," ou via un ticket ",(0,n.jsx)(s.code,{children:"JWT"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"En charge du microservice d'int\xe9grer les groupes ainsi transmis dans les APIs expos\xe9s."}),"\n",(0,n.jsx)(s.h2,{id:"authentification-\xe0-2-facteurs",children:"Authentification \xe0 2 facteurs"}),"\n",(0,n.jsx)(s.p,{children:"L'authentification 2 facteurs est un m\xe9canisme permettant d'augmenter la s\xe9curit\xe9 des comptes utilisateurs."}),"\n",(0,n.jsx)(s.p,{children:"Un QR Code est g\xe9n\xe9r\xe9 par le serveur. L'utilisateur le scanne avec son application d'authentification, comme google authentication, Authy ou autre."}),"\n",(0,n.jsx)(s.p,{children:"Apr\xe9s un succ\xe9s d'authentification l'utilisateur est invit\xe9 \xe0 saisir le code g\xe9n\xe9r\xe9 par l'application d\xe9di\xe9. Ce code est contraint par le temps."}),"\n",(0,n.jsx)(s.p,{children:"L'utilisateur peut choisir d'enregistrer le navigateur comme de confiance. Ce qui \xe9vitera de redemander le code lors de sa prochaine connexion."})]})}function d(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},1151:(e,s,i)=>{i.d(s,{Z:()=>c,a:()=>l});var n=i(7294);const r={},t=n.createContext(r);function l(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);