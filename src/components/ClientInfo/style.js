import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: 25,
    background: '#f0f0f0',
    width: '100%',
    padding: '12px 18px'
  },
  property: {
    color: '#808080',
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 6
  },
  value: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold'
  }
}))
