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
    title: 'Turnkey',
    Item: require('@site/static/img/turn-key.png').default,
    type: 'img',
    description: (
      <>
        <b>Archway</b> was designed to be easily installed and
        used to build your applications quickly.
      </>
    ),
  },
  {
    title: 'Focus on your business microservices',
    Item: require('@site/static/img/computer_girl.png').default,
    type: 'img',
    description: (
      <>
        <b>Archway</b> allows you to focus on the added value, <br></br><b>Archway</b> will do the rest.
      </>
    ),
  },
  {
    title: 'Powered by Spring Cloud Gateway and Angular',
    Item: require('@site/static/img/powered-by.png').default,
    // Item: require('@site/static/img/undraw_docusaurus_react.svg').default,
    type: 'img',
    description: (
      <>
        Built on the Spring ecosystem, including: Spring Boot, Spring Security, and the Reactor project.
        <b>Archway</b> is built on the latest versions of Spring Cloud Gateway and Angular.
      </>
    ),
  },
  {
    title: 'Advanced Route Management',
    Item: require('@site/static/img/toll.png').default,
    // Item: require('@site/static/img/undraw_docusaurus_react.svg').default,
    type: 'img',
    description: (
      <>
        <li>Route management, securing, creation of predicates, filters through the graphical interface.</li>
        <li>Management of route alternatives.</li>
        <li>Dynamic reloading without restarting.</li>
      </>
    ),
  },
  {
    title: 'Secure your applications effortlessly',
    Item: require('@site/static/img/gate-with-monks.png').default,
    // Item: require('@site/static/img/undraw_docusaurus_react.svg').default,
    type: 'img',
    description: (
      <>
        <li>RBAC rights management. LDAP support.</li>
        <li>Management of access policies for passwords, business days, and business hours.</li>
        <li>Two-factor authentication via TOTP.</li>
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
