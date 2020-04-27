import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 256

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
    background: theme.palette.white,
    borderBottomRightRadius: 32,
    borderTopRightRadius: 32,
    boxShadow: '4px 0px 10px rgba(0, 0, 0, 0.08)',
    overflow: 'hidden',
    position: 'fixed',
    minHeight: '100vh',
    zIndex: 999
  },
  app: {
    flex: 1,
    padding: 32,
    marginLeft: drawerWidth
  },
  logoContainer: {
    background: theme.palette.orange,
    padding: '40px 0'
  },
  logo: {
    display: 'block',
    width: '85%',
    margin: '0 auto'
  },
  subtitle: {
    fontSize: 16,
    color: theme.palette.headers.subtitle,
    textAlign: 'center'
  },
  menuItem: {
    color: theme.palette.green,
    fontSize: 16
  },
  menuItemSelected: {
    fontWeight: 'bold',
    fontSize: 18
  },
  item: {
    marginBottom: 5
  }
}))

