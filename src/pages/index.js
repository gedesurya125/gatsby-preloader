import React from 'react';

import { SEO } from 'gatsby-theme-thepuzzlers-intl';
import { injectIntl } from 'gatsby-theme-thepuzzlers-intl';

// Local Components

const Home = () => {
  return (
    <>
      <SEO title="Home" />
    </>
  );
};
export default injectIntl(Home);
