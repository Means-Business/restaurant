import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { PageHeader } from '../utils';
import aboutImg from '../images/bcg/aboutBcg.jpeg';

const AboutPage = () => (
  <Layout>
    <SEO
      title="About"
      keywords={[
        `gatsby`,
        `application`,
        `react`,
        `accounting`,
        `bookkeeping`,
        `taxation`,
        `programming`,
      ]}
    />
    <PageHeader img={aboutImg}>this is about page</PageHeader>
  </Layout>
);

export default AboutPage;
