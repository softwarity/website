import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const Logo = require('@site/static/img/archway.svg').default
  return (
    <header className={clsx('hero hero--dark', styles.heroBanner)}>
      <div className="container">
        <div className={clsx('row',styles.logoRow)}>
          <Logo role="img" className={styles.logo}/>
          <div className={styles.banner_title}>
            <b className="hero__title">ARCHWAY</b>
            <div>The Open source APP Gateway</div>
            {/* <Heading as="h1" className="hero__title">ARCHWAY</Heading>
            <Heading as="h4">The Open source APP Gateway</Heading> */}
          </div>
        </div>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/tuto/install">ARCHWAY Tutoriel - 5min ⏱️</Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Application gateway effortless">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
