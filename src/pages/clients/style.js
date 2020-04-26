import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
  },
  searchCard: {
    marginBottom: 35
  },
  searchLabel: {
    fontWeight: 'bold',
    color: theme.palette.headers.subtitle,
    fontSize: 16
  },
  searchBox: {
    ...theme.flexCenter
  },
  searchInput: {
    marginLeft: 26,
    background: '#F5F5F5',
    borderRadius: 32,
    padding: '5px 15px',
    color: theme.palette.headers.subtitle,
  },
  searchInputElement: {
    '&::placeholder': {
      color: theme.palette.headers.subtitle,
      fontWeight: 'bold'
    }
  },
  addbutton: {
    borderRadius: 32,
    margin: '0 0 0 auto',
    display: 'block',
    minWidth: 185,
    minHeight: 85
  },
  addButtonLabel: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 16,
    textTransform: 'none'
  },
  select: {
    marginRight: 15
  }
}))

