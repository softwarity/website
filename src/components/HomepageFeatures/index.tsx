import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Clé en main',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <b>Archway</b> a été conçu pour être facilement installé et
        utilisé pour construire votre application rapidement.
      </>
    ),
  },
  {
    title: 'Concentrez-vous sur vos microservices métiers',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        <b>Archway</b> vous permet de vous concentrer sur la valeur ajoutée, <br></br><b>Archway</b> fera le reste.
      </>
    ),
  },
  {
    title: 'Propulsé par Spring Cloud Gateway et Angular',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Construit sur l'écosystème de Spring, notamment: Spring Boot, Spring security et le project Reactor.
        <b>Archway</b> est construit sur les dernières versions de Spring Cloud Gateway et Angular.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
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
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
