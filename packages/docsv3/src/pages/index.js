import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import Banner from '/static/img/gettingstarted-banner.svg';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className="row">

          <div className="col">
            <h1 className="hero__title">Everything you need to know about providing an amazing online experience for your customers</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <a
                className="button button--secondary button--me"
                href="https://blueflag.com.au/docs/getting-started/sign-up-to-blueflag-api">
                GET STARTED
              </a>
            </div>
          </div>

          <div className="col">
            {/* <img
              src='/static/img/gettingstarted-banner.svg'
              alt="Getting Started Banner"
            /> */}
            <Banner  width='100%' height='100%'/>
          </div>
            
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Documentation`}
      description="Everything you need to know about providing an amazing online experience for your customers">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
