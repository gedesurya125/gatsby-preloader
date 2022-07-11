import React from 'react';

import { SEO } from 'gatsby-theme-thepuzzlers-intl';
import { injectIntl } from 'gatsby-theme-thepuzzlers-intl';
import { Header } from 'sections';
import { Preloader } from 'components';

// Local Components

const Home = () => {
  return (
    <>
      <SEO title="Home" />
      <Preloader />
      <Header />
    </>
  );
};
export default injectIntl(Home);
