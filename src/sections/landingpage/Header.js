import React from 'react';
import { Box, Heading, Link } from '@thepuzzlers/pieces';
import { headerAnimation } from './animation';
import { usePreloaderEnd } from 'context/PreloaderEndContext';
import { NavigationLink } from 'gatsby-theme-thepuzzlers-intl';

export const Header = () => {
  const { isPreloaderEnd } = usePreloaderEnd();
  console.log('this is preloader staete', isPreloaderEnd);
  return (
    <Box
      initial="initial"
      animate={isPreloaderEnd && 'animate'}
      variants={headerAnimation}
      transition={{ duration: 1 }}>
      <Heading
        sx={{
          fontSize: '3rem',
          fontWeight: 'bold',
          fontFamily: 'body.normal',
          textAlign: 'center',
          mt: '10rem'
        }}>
        Landing Page Header
      </Heading>
      <NavigationLink variant="links.hyperLink" to="/about">
        go to about page
      </NavigationLink>
    </Box>
  );
};
