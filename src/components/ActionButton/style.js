import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  button: {
    minWidth: 260,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 30,
    fontWeight: 'bold'
  },
  buttonPrimary: {
    background: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.main}`,
    color: '#fff',
    boxShadow: 'none',
    minWidth: 'auto',
    padding: '10px 20px',
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'none'
  },
  buttonSecundary: {
    background: '#fff',
    color: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.main}`,
    textTransform: 'none',
  },
  buttonTertiary: {
    background: theme.palette.white,
    color: theme.palette.primary.variant1,
    textTransform: 'uppercase',
  },
  buttonSimple: {
    textTransform: 'none',
    background: 'none',
    color: '#643A9F',
    fontWeight: 'bold',
    boxShadow: 'none'
  },
  buttonLogin: {
    borderRadius: 4,
    background: '#fff',
    border: 'none',
    color: '#292447',
    textTransform: 'uppercase',
    width: '100%'
  },
  buttonGreen: {
    borderRadius: 2,
    background: '#31E3A6',
    border: '3px solid rgba(0,0,0,0.13)',
    color: '#fff',
    textTransform: 'uppercase',
    paddingTop: 12,
    paddingBottom: 12
    // width: '100%'
  },
  buttonDark: {
    background: '#39364F',
    border: 'none'
  },
  progress: {
    color: 'inherit'
  },
  none: {
    minWidth: 'auto',
    padding: 10
  }
}))

