import { makeStyles, withStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  selectIcon: {
    color: theme.palette.orange
  },
  label: {
    color: theme.palette.orange
  },
  selectOption: {
    color: theme.palette.orange
  }
}))

export const customize = withStyles(theme => ({
  root: {
    marginTop: 16
  },
  input: {
    minWidth: 120,
    padding: '6px 5px',
    borderBottom: `2px solid ${theme.palette.orange}`,
    color: theme.palette.orange
  }
}))
