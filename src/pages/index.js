import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Watch a Video</>,
    imageUrl: 'img/undraw_youtube_tutorial.svg',
    description: (
      <>
        <p>At Plant an App, we are creating new videos to expand your knowledge all the time. Explore our video content:</p>
        <a href="https://www.youtube.com/watch?v=zOGVh-zEsqs&amp;list=PL67RlTAxc73ESnxFEw0i7AU7yMrmLYAyh" title="Getting Started with Plant an App" target="_blank">Getting Started with Plant an App</a><br></br>
        <a href="https://www.youtube.com/watch?v=37C4iSJ7haI&amp;list=PL67RlTAxc73HwiL13W1nvYZ_Wgb2jhWwd" title="Low-Code Feature Focus" target="_blank">Low-Code Feature Focus</a><br></br>
        <a href="https://www.youtube.com/watch?v=SDL-FfE47TU&amp;list=PL67RlTAxc73EADPcPrLHLGaVu4zXOGuyi" title="The Low-Code Café | Weekly Community Zoom Session" target="_blank">The Low-Code Café</a>
      </>
    ),
  },
  {
    title: <>Read the Details</>,
    imageUrl: 'img/undraw_online_reading.svg',
    description: (
      <>
        Start here if you are the kind of person that just wants to dive into the details. We recommend you begin by learning about the
        different <a href="docs/audience" title="Audience">Audiences</a> our documentation targets. From there, you should learn about <a href="docs/entities" title="Entities">Entities</a>, the heart of your application.

      </>
    ),
  },
  {
    title: <>Learn From Others</>,
    imageUrl: 'img/undraw_Group_chat.svg',
    description: (
      <>
        <p>The Plant an App Community is growing all the time, just like your apps! Join the community and ask the experts: the people just like you who are building great apps with Low-Code.</p>
        <a href="https://community.plantanapp.com/" title="Plant an App Community Portal" target="_blank">Plant an App Community Portal</a>
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Developer-First Low-Code Platform`}
      description="The only app development platform that gives IT teams the speed of low-code without compromising the power and flexibility of custom coding">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--secondary button--lg',
                styles.getStarted,
              )}
              to="https://academy.plantanapp.com/Course-Work?CourseId=1">
              Start the course NOW!
            </Link>
          </div>
        </div>
      </header>
      <div style={{ textAlign: "center", display: "none", backgroundColor: "#303846", color: "white" }}>
        Leave us a Capterra review and earn a $20 giftcard! Limited to first 100 reviewers.
        <button className={classnames(styles.buttonRev, styles.buttonX)} onClick={event => window.open("https://review.capterra.com/Feedback-Plant-an-App-207065-3163062598", "_blank")}>Review now</button>

      </div>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
