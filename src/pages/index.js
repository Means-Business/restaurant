import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { HomeHeader, Banner, BannerButton } from '../utils';
import img from '../images/bcg/homeBcg.jpeg';
import QuickInfo from '../components/HomePageComponent/QuickInfo';
import Gallery from '../components/HomePageComponent/Gallery-1';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `gatsby`,
        `application`,
        `react`,
        `accounting`,
        `accountant`,
        `bookkeeping`,
        `taxation`,
        `programming`,
      ]}
    />
    <HomeHeader img={img}>
      <Banner
        title="eatery"
        subtitle="142/191 Moo 7 Kathu, Kathu, Phuket 83120"
      >
        <BannerButton style={{ margin: '2rem auto' }}>menu</BannerButton>
      </Banner>
    </HomeHeader>
    <QuickInfo />
    <Gallery />
  </Layout>
);

export default IndexPage;
