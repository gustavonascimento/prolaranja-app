import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 750,
    margin: '0 auto',
    width: '88%',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    padding: 5% 0
  },
  logo: {
    maxWidth: 388,
    margin: '0 auto',
    width: '100%',
    '& img': {
      display: 'block',
      width: '100%'
    }
  },
  inputWrapper: {
    marginBottom: 24
  },
  input: {
    background: '#FFFFFF',
    color: '#4D5151',
    fontSize: 14
  },
  button: {
    marginBottom: 20
  },
  simpleButton: { 
    color: '#fff',
    width: '100%',
    textTransform: 'none',
    fontWeight: 'normal'
  }
}))

