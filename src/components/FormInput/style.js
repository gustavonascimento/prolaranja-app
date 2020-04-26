import { makeStyles, withStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 16
  },
  inputContainer: {
    flex: 1
  },
  borderTop: {
    borderTop: '2px solid #B6B6B6',
    marginBottom: 2
  },
  borderBottom: {
    borderBottom: '2px solid #B6B6B6',
    marginTop: 2
  }
}))
