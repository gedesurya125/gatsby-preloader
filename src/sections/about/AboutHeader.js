import React from 'react';
import { Box, Heading, Link } from '@thepuzzlers/pieces';
import { NavigationLink } from 'gatsby-theme-thepuzzlers-intl';
import { aboutHeaderAnimation } from './animation';
// import { usePreloaderEnd } from 'context/PreloaderEndContext';

export const AboutHeader = () => {
  // const { isPreloaderEnd } = usePreloaderEnd();
  return (
    <Box
      initial="initial"
      animate={'animate'}
      variants={aboutHeaderAnimation}
      transition={{ duration: 1 }}>
      <Heading
        sx={{
          fontSize: '3rem',
          fontWeight: 'bold',
          fontFamily: 'body.normal',
          textAlign: 'center',
          mt: '10rem'
        }}>
        About Page Header
      </Heading>
      <NavigationLink
        to="/"
        variant="links.hyperLink"
        sx={{ textAlign: 'center' }}>
        go to home page
      </NavigationLink>
    </Box>
  );
};

export default AboutHeader;
