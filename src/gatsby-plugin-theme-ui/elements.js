const linkDefault = {
  cursor: 'pointer',
  transition: '0.2s ease-out'
};

const buttonDefault = {
  cursor: 'pointer',
  transition: '0.2s ease-out'
};

const links = {
  hyperLink: {
    ...linkDefault,
    variant: 'typography.hyperLink.normal',
    fontSize: '2rem',
    textAlign: 'center',
    display: 'block',
    mt: '3rem',
    color: 'secondary',
    ':hover,:focus,active': {}
  },
  navigation: {
    ...linkDefault,
    variant: 'typography.navigationLink.normal',
    ':hover,:focus,&.active': {}
  },
  footer: {
    ...linkDefault,
    color: 'beige500',
    display: 'block',
    variant: 'typography.footerLink.medium',
    ':hover,:focus,&.active': {
      color: 'yellow'
    }
  },
  legal: {
    ...linkDefault,
    color: 'beige500',
    display: 'block',
    variant: 'typography.p-500-135.normal',
    ':hover,:focus,&.active': {
      color: 'yellow'
    }
  }
};

const buttonPrimaryDefault = {
  ...buttonDefault,
  // variant: 'typography.buttonLarge.normal',
  lineHeight: 1,
  border: ({ colors }) => `solid ${colors.blue900}`,
  letterSpacing: 0,
  bg: ({ colors }) => `${colors.yellow}`,
  display: 'flex',
  alignItems: 'center',
  minWidth: 'max-content',
  '&:hover': {}
};

const buttons = {
  primary: {
    300: {
      ...buttonPrimaryDefault,
      fontFamily: 'body.bold',
      fontSize: ['1.7rem', '2rem', '1.9rem', '1.5rem', '1.8rem', '1.8rem'],
      fontFeatureSettings:
        "'salt' on, 'ss03' on, 'ss05' on, 'ss04' on, 'ss02' on, 'ss01' on, 'ss06' on, 'ss07' on, 'ss08' on",
      lineHeight: 1.15,
      borderRadius: [
        '1.2rem',
        '1.2rem',
        '1.2rem',
        '1.2rem',
        '1.2rem',
        '1.2rem'
      ],
      // the used padding is the padding of the button in figma substract by 0.3rem
      // because the padding value in figma is including border width
      p: [
        '1.7rem 2.1rem 1.7rem 2.1rem',
        '2.1rem 3.7rem 2.1rem 3.7rem',
        '1.7rem 2.5rem 1.7rem 2.5rem',
        '1.7rem 2.5rem 1.7rem 2.5rem',
        '1.7rem 2.5rem 1.7rem 2.5rem',
        '1.7rem 2.5rem 1.7rem 2.5rem'
      ],
      '& .primary-button__arrow-right': {
        display: 'none'
      }
    },
    500: {
      ...buttonPrimaryDefault,
      fontFamily: 'body.bold',
      fontSize: ['1.7rem', '2rem', '1.9rem', '1.6rem', '1.8rem', '2rem'],
      fontFeatureSettings:
        "'salt' on, 'ss03' on, 'ss05' on, 'ss04' on, 'ss02' on, 'ss01' on, 'ss06' on, 'ss07' on, 'ss08' on",
      lineHeight: 1.15,
      borderRadius: [
        '1.2rem',
        '1.6rem',
        '1.2rem',
        '1.2rem',
        '1.6rem',
        '1.2rem'
      ],
      p: [
        '2rem 2.4rem',
        '2.4rem 4rem',
        '2.4rem 3.2rem',
        '2rem 2.4rem',
        '2.4rem 3.2rem',
        '2.4rem 3.2rem'
      ],
      '& .primary-button__arrow-right': {
        width: ['1.8rem', '2.2rem', '2rem', '1.6rem', '2rem', '2.2rem'],
        ml: ['1.6rem', '2.4rem', '1.2rem', '1.6rem', '2rem', '2rem']
      }
    },
    700: {
      ...buttonPrimaryDefault,
      fontFamily: 'secondary.bold',
      fontSize: ['2rem', '2.4rem', '2.4rem', '2rem', '2.3rem', '2.8rem'],
      fontFeatureSettings:
        "'salt' on, 'ss03' on, 'ss05' on, 'ss04' on, 'ss02' on, 'ss01' on, 'ss06' on, 'ss07' on, 'ss08' on",
      borderRadius: ['1rem', '1.6rem', '1.6rem', '1.2rem', '1.6rem', '1.6rem'],
      p: [
        '2.4rem 4rem',
        '2.8rem 4.8rem 2.8rem 5.6rem',
        '2.8rem 4.8rem 2.8rem 5.6rem',
        '2rem 4rem',
        '2.6rem 4.2rem 2.6rem 5rem',
        '2.8rem 4.8rem'
      ],
      '& .primary-button__arrow-right': {
        width: ['2rem', '2.4rem', '2.2rem', '1.8rem', '2.2rem', '2.8rem'],
        ml: ['1.6rem', '2.4rem', '2rem', '1.6rem', '2rem', '2rem']
      }
    }
  },
  clear: {
    ...buttonDefault,
    p: 0,
    m: 0,
    bg: 'transparent',
    display: 'flex',
    alignItems: 'center'
  }
};

const cards = {
  primary: {}
};

export { links, buttons, cards };
