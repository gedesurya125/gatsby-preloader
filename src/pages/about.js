import React from 'react';

import { SEO } from 'gatsby-theme-thepuzzlers-intl';
import { injectIntl } from 'gatsby-theme-thepuzzlers-intl';
import { AboutHeader } from 'sections';

// Local Components

const About = () => {
  return (
    <>
      <SEO title="Home" />
      <AboutHeader />
    </>
  );
};
export default injectIntl(About);
