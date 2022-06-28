import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';


const FeatureList = [
  {
    title: 'User Guides',
    className: "boxLeft",
    Svg: require('../../static/icons/file-alt-regular.svg').default,
    description: (
      <>
        <a href="./getting-started/sign-up-to-blueflag-api">Getting Started with the Blue Flag API ></a>
      </>
    ),
  },
  {
    title: 'API Documentation',
    className: "boxRight",
    Svg: require('../../static/icons/terminal-solid.svg').default,
    description: (
      <>
        <div className="box-left">Technical documentation for the HTTP API.</div>
        <div className="box-right">
          <a className="button button--outline button--primary button--me" href="https://blueflag.com.au/docs/api/">READ DOCS</a>
        </div>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="sectionBox">
        <div className="sectionHeader">
          <Svg className={styles.featureSvg} alt={title} /> <h3>{title}</h3>
        </div>
        <div className="sectionText padding-horiz--md">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row sections">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
