import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { PageHeader, Banner } from '../utils';
import menuImg from '../images/bcg/menuBcg.jpeg';

const MenuPage = () => (
  <Layout>
    <SEO
      title="Menu"
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
    <PageHeader img={menuImg}>
      <Banner title="menu" subtitle={`let's dig in `} />
    </PageHeader>
  </Layout>
);

export default MenuPage;
