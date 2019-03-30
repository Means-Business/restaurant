import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
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
    <h3>this is home page</h3>
  </Layout>
);

export default IndexPage;
