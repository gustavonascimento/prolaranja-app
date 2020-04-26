import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  parentRoot: {
    position: 'relative'
  },
  root: {
    margin: '20px auto',
    display: 'flex',
    width: 'calc(100vw - 706px)',
    // 450
    overflowX: 'scroll'
  },
  item: {
    marginRight: 28
  },
  buttonLeft: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 30,
    color: theme.palette.orange,
    borderRadius: 0
  },
  buttonRight: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: 30,
    color: theme.palette.orange,
    borderRadius: 0
  }
}))


