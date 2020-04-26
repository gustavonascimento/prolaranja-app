import palette from './palette';

const fontFamily = '"Nunito", "Roboto", "Helvetica", "Arial", sans-serif'

export default {
  fontFamily,
  h1: {
    color: palette.text.primary,
    fontSize: 54,
    lineHeight: 1,
    fontFamily
  },
  h2: {
    color: palette.text.primary,
    fontSize: 28,
    lineHeight: 1,
    fontFamily
  },
  h3: {
    color: palette.text.primary,
    fontSize: 24,
    lineHeight: 1,
    fontFamily
  },
  h4: {
    color: palette.text.primary,
    fontSize: '20px',
    letterSpacing: '-0.06px',
    lineHeight: '24px',
    fontFamily
  },
  h5: {
    color: palette.text.primary,
    fontSize: 18,
    letterSpacing: '-0.05px',
    lineHeight: 1,
    fontFamily
  },
  h6: {
    color: palette.text.primary,
    fontSize: 16,
    lineHeight: 1,
    fontFamily
  },
  subtitle1: {
    color: palette.text.primary,
    fontSize: '16px',
    letterSpacing: '-0.05px',
    lineHeight: '25px',
    fontFamily
  },
  subtitle2: {
    color: palette.text.secondary,
    fontSize: '14px',
    letterSpacing: '-0.05px',
    lineHeight: '21px',
    fontFamily
  },
  body1: {
    color: palette.text.primary,
    fontSize: '14px',
    letterSpacing: '-0.05px',
    lineHeight: '21px',
    fontFamily
  },
  body2: {
    color: palette.text.secondary,
    fontSize: '12px',
    letterSpacing: '-0.04px',
    lineHeight: '18px',
    fontFamily
  },
  button: {
    color: palette.text.primary,
    fontSize: '14px',
    fontFamily
  },
  caption: {
    color: palette.text.secondary,
    fontSize: '11px',
    letterSpacing: '0.33px',
    lineHeight: '13px',
    fontFamily
  },
  overline: {
    color: palette.text.secondary,
    fontSize: '11px',
    letterSpacing: '0.33px',
    lineHeight: '13px',
    fontFamily,
    textTransform: 'uppercase'
  },
  weight: {
    bold: 'bold',
    extraBold: '800'
  }
};