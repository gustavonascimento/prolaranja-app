import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 160,
    borderRadius: 16,
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.08)',
    overflow: 'hidden',
    background: '#FFAA54'
  },
  product: {
    height: 180,
    background: '#FFE7CF',
    overflow: 'hidden',
    borderRadius: 16,
    ...theme.flexCenter
  },
  info: {
    padding: 8,
    textAlign: 'center'
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#fff'
  },
  input: {
    maxWidth: '80%',
    height: 21,
    background: '#fff',
    borderRadius: 6,
    padding: '0 5px',
    color: theme.palette.orange,
    fontWeight: 'bold'
  },
  textAlign: {
    textAlign: 'center',
  }
}))


