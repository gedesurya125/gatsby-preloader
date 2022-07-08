import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { CoreLayout } from 'gatsby-theme-thepuzzlers-core';
import { Box } from '@thepuzzlers/pieces';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RiveContainer } from 'components/RiveContainer';

// Sections
import { Footer, Navigation } from '../sections';

import 'gatsby-plugin-theme-ui/fonts/fontImports';

gsap.registerPlugin(ScrollTrigger);

const Layout = ({ children, pageContext }) => {
  let fontSizeFactor = 1;
  let mediaQueries = '';

  let lastHeight = 0;
  let lastWidth = 0;

  const setDocHeight = () => {
    if (
      Math.abs(lastWidth - window.visualViewport.width) > 100 ||
      Math.abs(lastHeight - window.visualViewport.height) > 100
    ) {
      lastHeight = window.visualViewport.height;
      lastWidth = window.visualViewport.width;

      document.documentElement.style.setProperty(
        '--vh',
        `${window.visualViewport.height / 100}px`
      );
    }
  };

  React.useEffect(() => {
    setDocHeight();
    window.addEventListener('resize', setDocHeight);
    window.addEventListener('orientationchange', setDocHeight);
  }, []);

  if (typeof window !== 'undefined') {
    const baseFontSize = 16;
    const pageRootElement = document.getElementsByTagName('html')[0];
    pageRootElement.style.fontSize = '100%';
    const fontSizePxValue = window
      .getComputedStyle(pageRootElement)
      .getPropertyValue('font-size');
    const fontSizeNumberValue = Number(fontSizePxValue.replace(/px/, ''));

    // only calculate fontSizeFactor if font has never been configured before
    if (pageRootElement.dataset.fontIsConfigured !== 'true') {
      fontSizeFactor = fontSizeNumberValue / baseFontSize;
    }

    mediaQueries = `
    html {
      font-size: calc(${9.365 * fontSizeFactor}px + ((100vw - 320px) * ${
      9.365 * fontSizeFactor
    } / 2.5 / 320)) !important;
  }

    @media screen and (min-width: 500px) {
        html {
          font-size: calc(${8.99 * fontSizeFactor}px + ((100vw - 500px) * ${
      8.99 * fontSizeFactor
    } / 2.5 / 500)) !important;
        }
      }
      
      @media screen and (min-width: 750px) and (orientation: portrait) {
        html {
        font-size: calc(${9.57 * fontSizeFactor}px + ((100vw - 750px) * ${
      9.57 * fontSizeFactor
    } / 2.5 / 750)) !important;
        }
      }        
      
      @media screen and (min-width: 700px) and (orientation: landscape) {
        html {
        font-size: calc(${9.4 * fontSizeFactor}px + ((100vw - 700px) * ${
      9.4 * fontSizeFactor
    } / 2.5 / 700)) !important;
        }
      }
       
      @media screen and (min-width: 1000px) {
        html {
        font-size: calc(${9.28 * fontSizeFactor}px + ((100vw - 1000px) * ${
      9.28 * fontSizeFactor
    } / 2.5 / 1000)) !important;
        }
      }
      
      @media screen and (min-width: 1400px) {
        html {
          font-size: calc(${9.89 * fontSizeFactor}px + ((100vw - 1400px) * ${
      9.89 * fontSizeFactor
    } / 2.5 / 1400)) !important;
  }
    }
    `;

    // store in data attribute that fontsize is already configured
    pageRootElement.dataset.fontIsConfigured = true;
  }

  React.useEffect(() => {
    console.log('hi i am called');
    var body = document.querySelector('body');
    body.classList.add('preloader_ready');
    setTimeout(function () {
      body.classList.remove('preloader_active');
      body.classList.remove('preloader_ready');
    }, 500);
  }, []);
  return (
    <>
      <Box key="preloader" id="preloader">
        {/* <canvas id="rive-canvas"></canvas> */}
        <RiveContainer
          src="/delivery.riv"
          // src="https://cdn.rive.app/animations/off_road_car_v7.riv"
          sx={{ width: '300px', height: '300px', overflow: 'hidden' }}
        />
      </Box>
      <CoreLayout pageContext={pageContext}>
        <Navigation />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <Box
              as="main"
              sx={{
                position: 'relative',
                bg: 'background',
                overflow: 'hidden'
              }}>
              {children}
            </Box>
            <Footer />
          </div>
        </div>
        <Helmet>
          <style type="text/css">{mediaQueries}</style>
        </Helmet>
      </CoreLayout>
    </>
  );
};

Layout.propTypes = {
  pageContext: PropTypes.object.isRequired
};

export default Layout;
