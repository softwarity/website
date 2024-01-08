import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Item: any;
  type: 'svg' | 'img';
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Clé en main',
    Item: require('@site/static/img/turn-key.png').default,
    type: 'img',
    description: (
      <>
        <b>Archway</b> a été conçu pour être facilement installé et
        utilisé pour construire votre application rapidement.
      </>
    ),
  },
  {
    title: 'Concentrez-vous sur vos microservices métiers',
    Item: require('@site/static/img/computer_girl.png').default,
    type: 'img',
    description: (
      <>
        <b>Archway</b> vous permet de vous concentrer sur la valeur ajoutée, <br></br><b>Archway</b> fera le reste.
      </>
    ),
  },
  {
    title: 'Propulsé par Spring Cloud Gateway et Angular',
    Item: require('@site/static/img/powered-by.png').default,
    // Item: require('@site/static/img/undraw_docusaurus_react.svg').default,
    type: 'img',
    description: (
      <>
        Construit sur l'écosystème de Spring, notamment: Spring Boot, Spring security et le project Reactor.
        <b>Archway</b> est construit sur les dernières versions de Spring Cloud Gateway et Angular.
      </>
    ),
  },
  {
    title: 'Gestion avancée des routes',
    Item: require('@site/static/img/toll.png').default,
    // Item: require('@site/static/img/undraw_docusaurus_react.svg').default,
    type: 'img',
    description: (
      <>
        <li>Gestion des routes, sécurisation, création des prédicats, des filtres via l'interface graphique.</li>
        <li>Gestion des alternatives de routes.</li>
        <li>Rechargement dynamique sans redémarrage.</li>
      </>
    ),
  },
  {
    title: 'Securisez vos applications sans effort',
    Item: require('@site/static/img/gate-with-monks.png').default,
    // Item: require('@site/static/img/undraw_docusaurus_react.svg').default,
    type: 'img',
    description: (
      <>
        <li>Gestion des droits RBAC. Prise en charge de LDAP.</li>
        <li>Gestion des politiques d'accès des mots de passe, des jours ouvrables et des heures ouvrables.</li>
        <li>Authentification 2 facteurs via TOTP.</li>
      </>
    ),
  },
];

function Feature({title, Item, type, description}: FeatureItem) {
  let item;
  if (type === 'svg') {
    item = <Item className={styles.featureSvg} role="img" />;
  } else {
    item = <img src={Item} alt="" className={styles.featureImg} role="img" />;
  }
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">{item}</div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx('row',styles.featuresRow)}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
