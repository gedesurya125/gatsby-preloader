import { getFluidTypographyStyles } from '@thepuzzlers/pieces';
import { merge } from 'theme-ui';
// client imports
import { fontFamilies } from './fonts/fontFamilies';
import { typographyConfig } from './typographyConfig';

const fluidTypography = getFluidTypographyStyles({
  typographyConfig,
  fontFamilies
});

// Overwrite styles that are specific to bold or normal variants here:
const typography = merge(fluidTypography, {
  // Headings
  'h1-500-175': {
    normal: {
      fontSize: ['1.4rem', '1.6rem', '1.7rem', '1.4rem', '1.6rem', '1.6rem'],
      fontFamily: 'body.normal',
      lineHeight: 1.75
    },
    medium: {
      fontSize: ['1.4rem', '1.6rem', '1.7rem', '1.4rem', '1.6rem', '1.6rem'],
      fontFamily: 'body.medium',
      lineHeight: 1.75
    }
  },
  'h1-700-110': {
    normal: {
      fontSize: ['3.6rem', '4.4rem', '4.8rem', '2.8rem', '4.8rem', '5.2rem'],
      fontFamily: 'secondary.normal',
      lineHeight: 1.1,
      fontFeatureSettings:
        "'salt' on, 'ss03' on, 'ss05' on, 'ss04' on, 'ss02' on, 'ss01' on, 'ss07' on, 'ss08' on"
    }
  },
  'h1-300-100--1': {
    medium: {
      fontSize: ['1.8rem', '1.8rem', '1.8rem', '1.8rem', '1.8rem', '2rem'],
      fontFamily: 'body.medium',
      lineHeight: 1
    }
  },
  'h2-700-100': {
    normal: {
      fontSize: ['6.4rem', '8.8rem', '9.8rem', '7.2rem', '9.8rem', '12rem'],
      fontFamily: 'primary.normal',
      lineHeight: 1
    }
  },
  'h2-700-100--2': {
    normal: {
      fontSize: ['7.2rem', '8rem', '10.8rem', '7.2rem', '12rem', '12rem'],
      fontFamily: 'primary.normal',
      letterSpacing: '0.02em',
      lineHeight: 1
    }
  },
  'h2-500-110': {
    normal: {
      fontSize: ['3.2rem', '3.8rem', '5rem', '3.2rem', '5.2rem', '5.6rem'],
      fontFamily: 'secondary.normal',
      lineHeight: 1.1,
      fontFeatureSettings:
        "'salt' on, 'ss03' on, 'ss05' on, 'ss04' on, 'ss02' on, 'ss01' on, 'ss07' on, 'ss08' on"
    }
  },
  'h2-500-115--2': {
    normal: {
      fontSize: ['3.2rem', '3.6rem', '4rem', '3.2rem', '3.4rem', '4rem'],
      fontFamily: 'secondary.normal',
      lineHeight: 1.15,
      fontFeatureSettings:
        "'salt' on, 'ss03' on, 'ss05' on, 'ss04' on, 'ss02' on, 'ss01' on, 'ss07' on, 'ss08' on"
    }
  },
  'h2-500-135--1': {
    normal: {
      fontSize: ['2.8rem', '3.2rem', '4rem', '2.8rem', '2.8rem', '3.2rem'],
      fontFamily: 'secondary.normal',
      lineHeight: 1.35,
      fontFeatureSettings:
        "'salt' on, 'ss03' on, 'ss05' on, 'ss04' on, 'ss02' on, 'ss01' on, 'ss07' on, 'ss08' on"
    }
  },
  'h2-500-115--4': {
    normal: {
      fontSize: ['2.8rem', '2.8rem', '4.8rem', '2.8rem', '4rem', '4rem'],
      fontFamily: 'secondary.normal',
      lineHeight: 1.15,
      fontFeatureSettings:
        "'salt' on, 'ss03' on, 'ss05' on, 'ss04' on, 'ss02' on, 'ss01' on, 'ss07' on, 'ss08' on"
    }
  },
  'h2-600-100': {
    normal: {
      fontSize: ['4.8rem', '6.4rem', '7.2rem', '4.8rem', '5.4rem', '5.8rem'],
      fontFamily: 'primary.normal',
      lineHeight: 1
    }
  },
  'h3-500-125': {
    bold: {
      fontSize: ['1.8rem', '2.2rem', '2.2rem', '1.8rem', '2.2rem', '2.4rem'],
      fontFamily: 'body.bold',
      lineHeight: 1.25
    }
  },
  'h3-500-125--1': {
    bold: {
      fontSize: ['2rem', '2rem', '2rem', '2rem', '2rem', '2rem'],
      fontFamily: 'body.bold',
      lineHeight: 1.25
    }
  },
  'h3-700-110': {
    normal: {
      fontSize: ['2.8rem', '3.2rem', '3.2rem', '3rem', '3.2rem', '3.6rem'],
      fontFamily: 'secondary.normal',
      lineHeight: 1.1,
      fontFeatureSettings:
        "'salt' on, 'ss03' on, 'ss05' on, 'ss04' on, 'ss02' on, 'ss01' on, 'ss07' on, 'ss08' on"
    }
  },

  // Body
  'p-300-135': {
    normal: {
      fontSize: ['1.3rem', '1.5rem', '1.6rem', '1.3rem', '1.5rem', '1.6rem'],
      fontFamily: 'body.normal',
      lineHeight: 1.35
    },
    medium: {
      fontSize: ['1.3rem', '1.5rem', '1.6rem', '1.3rem', '1.5rem', '1.6rem'],
      fontFamily: 'body.medium',
      lineHeight: 1.35
    },
    bold: {
      fontSize: ['1.3rem', '1.5rem', '1.6rem', '1.3rem', '1.5rem', '1.6rem'],
      fontFamily: 'body.bold',
      lineHeight: 1.35
    }
  },
  'p-500': {
    normal: {
      fontSize: ['1.7rem', '1.8rem', '1.8rem', '1.5rem', '1.8rem', '1.8rem'],
      fontFamily: 'body.normal',
      lineHeight: 1.4
    },
    medium: {
      fontSize: ['1.7rem', '1.8rem', '1.8rem', '1.5rem', '1.8rem', '1.8rem'],
      fontFamily: 'body.medium',
      lineHeight: 1.4
    },
    bold: {
      fontSize: ['1.7rem', '1.8rem', '1.8rem', '1.5rem', '1.8rem', '1.8rem'],
      fontFamily: 'body.bold',
      lineHeight: 1.4
    }
  },
  'p-500-140': {
    normal: {
      fontSize: ['1.6rem', '1.8rem', '1.8rem', '1.5rem', '1.8rem', '1.8rem'],
      fontFamily: 'body.normal',
      lineHeight: 1.4
    },
    medium: {
      fontSize: ['1.6rem', '1.8rem', '1.8rem', '1.5rem', '1.8rem', '1.8rem'],
      fontFamily: 'body.medium',
      lineHeight: 1.4
    },
    bold: {
      fontSize: ['1.6rem', '1.8rem', '1.8rem', '1.5rem', '1.8rem', '1.8rem'],
      fontFamily: 'body.bold',
      lineHeight: 1.4
    }
  },
  'p-500-135': {
    normal: {
      fontSize: ['1.5rem', '1.8rem', '1.8rem', '1.4rem', '1.6rem', '1.8rem'],
      fontFamily: 'body.normal',
      lineHeight: 1.35
    },
    bold: {
      fontSize: ['1.5rem', '1.8rem', '1.8rem', '1.4rem', '1.6rem', '1.8rem'],
      fontFamily: 'body.bold',
      lineHeight: 1.35
    }
  },
  'p-500-100--2': {
    medium: {
      fontSize: ['1.4rem', '1.6rem', '2rem', '1.5rem', '2.2rem', '2.4rem'],
      fontFamily: 'body.medium',
      lineHeight: 1.35
    }
  },
  'p-500-135--1': {
    medium: {
      fontSize: ['1.6rem', '1.6rem', '1.6rem', '1.6rem', '1.6rem', '1.6rem'],
      fontFamily: 'body.medium',
      lineHeight: 1.35
    }
  },
  'p-500-150--1': {
    normal: {
      fontSize: ['1.4rem', '1.4rem', '1.6rem', '1.4rem', '1.4rem', '1.4rem'],
      fontFamily: 'body.normal',
      lineHeight: 1.5
    },
    medium: {
      fontSize: ['1.4rem', '1.4rem', '1.6rem', '1.4rem', '1.4rem', '1.4rem'],
      fontFamily: 'body.medium',
      lineHeight: 1.5
    },
    bold: {
      fontSize: ['1.4rem', '1.4rem', '1.6rem', '1.4rem', '1.4rem', '1.4rem'],
      fontFamily: 'body.bold',
      lineHeight: 1.5
    }
  },
  'p-500-150--2': {
    normal: {
      fontSize: ['1.6rem', '1.6rem', '1.8rem', '1.6rem', '1.5rem', '1.6rem'],
      fontFamily: 'body.normal',
      lineHeight: 1.5
    },
    medium: {
      fontSize: ['1.6rem', '1.6rem', '1.8rem', '1.6rem', '1.5rem', '1.6rem'],
      fontFamily: 'body.medium',
      lineHeight: 1.5,
      '& > span': {
        fontFamily: 'body.bold'
      }
    }
  },
  'p-700': {
    normal: {
      fontSize: ['1.7rem', '1.8rem', '2.1rem', '1.6rem', '1.8rem', '2rem'],
      fontFamily: 'body.normal',
      lineHeight: 1.5
    },
    medium: {
      fontSize: ['1.7rem', '1.8rem', '2.1rem', '1.6rem', '1.8rem', '2rem'],
      fontFamily: 'body.medium',
      lineHeight: 1.5
    },
    bold: {
      fontSize: ['1.7rem', '1.8rem', '2.1rem', '1.6rem', '1.8rem', '2rem'],
      fontFamily: 'body.bold',
      lineHeight: 1.5
    }
  },
  'p-1000-90': {
    normal: {
      fontSize: ['11.6rem', '16rem', '20rem', '11rem', '19.6rem', '21.6rem'],
      fontFamily: 'primary.normal',
      lineHeight: 0.9
    }
  },
  circleTextSmall: {
    normal: {
      fontSize: ['4rem', '4rem', '4rem', '3rem', '3rem', '2.5rem'],
      fontFamily: 'body.bold',
      lineHeight: 1.25
    }
  },
  circleTextBig: {
    normal: {
      fontSize: ['3rem', '3rem', '2.5rem', '2.5rem', '2rem', '2rem'],
      fontFamily: 'body.bold',
      lineHeight: 1.25
    }
  },
  halfCircleText: {
    normal: {
      fontSize: ['1.2rem', '1.2rem', '1.2rem', '1.2rem', '1.2rem', '1rem'],
      fontFamily: 'body.bold',
      lineHeight: 1.25
    }
  },

  // Links
  footerLink: {
    medium: {
      fontSize: ['1.6rem', '2.2rem', '2rem', '1.6rem', '1.8rem', '1.8rem'],
      fontFamily: 'body.medium',
      lineHeight: 1.25
    }
  },

  // Buttons
  buttonLarge: {
    normal: {
      fontSize: ['1.8rem', '2.2rem', '2.3rem', '1.8rem', '2.3rem', '2.4rem'],
      fontFamily: 'secondary.normal',
      lineHeight: 1,
      fontFeatureSettings:
        "'salt' on, 'ss03' on, 'ss05' on, 'ss04' on, 'ss02' on, 'ss01' on, 'ss06' on, 'ss07' on, 'ss08' on"
    }
  },

  // Global
  'global-p-500-140': {
    normal: {
      fontSize: ['1.6rem', '1.6rem', '1.7rem', '1.6rem', '1.8rem', '1.7rem'],
      fontFamily: 'body.normal',
      lineHeight: 1.4
    },
    bold: {
      fontSize: ['1.6rem', '1.6rem', '1.7rem', '1.6rem', '1.8rem', '1.7rem'],
      fontFamily: 'body.bold',
      lineHeight: 1.4
    }
  },

  'global-p-700-150': {
    normal: {
      fontSize: ['1.7rem', '1.8rem', '2.0rem', '1.6rem', '1.8rem', '1.9rem'],
      fontFamily: 'body.normal',
      lineHeight: 1.5
    },
    bold: {
      fontSize: ['1.7rem', '1.8rem', '2.0rem', '1.6rem', '1.8rem', '1.9rem'],
      fontFamily: 'body.bold',
      lineHeight: 1.5
    }
  },
  // Leads
  'lead-500-135': {
    normal: {
      fontSize: ['2.2rem', '2.8rem', '3.2rem', '2.2rem', '3.2rem', '3.4rem'],
      fontFamily: 'secondary.normal',
      lineHeight: 1.35,
      '& > span': {
        fontFamily: 'secondary.bold'
      }
    }
  },

  // List Item
  'list-item-h3-500-125': {
    normal: {
      fontSize: ['2.2rem', '2.6rem', '2.4rem', '2.2rem', '2.8rem', '2.8rem'],
      fontFamily: 'secondary.normal',
      lineHeight: 1.25
    },
    bold: {
      fontSize: ['2.2rem', '2.6rem', '2.4rem', '2.2rem', '2.8rem', '2.8rem'],
      fontFamily: 'secondary.bold',
      lineHeight: 1.25
    }
  },
  'list-item-p-500-135': {
    normal: {
      fontSize: ['1.6rem', '1.8rem', '1.8rem', '1.6rem', '1.8rem', '1.8rem'],
      fontFamily: 'body.normal',
      lineHeight: 1.35
    },
    medium: {
      fontSize: ['1.6rem', '1.8rem', '1.8rem', '1.6rem', '1.8rem', '1.8rem'],
      fontFamily: 'body.medium',
      lineHeight: 1.35
    }
  },

  // Another Reused Typography
  'legal-link': {
    normal: {
      fontSize: ['1.5rem', '1.8rem', '1.8rem', '1.4rem', '1.6rem', '1.6rem'],
      fontFamily: 'body.normal',
      lineHeight: 1.35
    }
  }
});

export { typography };
