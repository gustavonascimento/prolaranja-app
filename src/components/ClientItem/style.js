import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 10,
    width: '100%',
  },
  card: {
    borderRadius: 16,
    boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.08)'
  },
  cardSummaryIcon: {
    color: theme.palette.orange
  },
  cardSummary: {
    alignItems: 'center'
  },
  heading: {
    fontSize: 16,
    fontWeight: theme.typography.fontWeightBold,
    color: '#000'
  },
  darkLabel: {
    fontSize: 12,
    padding: '4px 12px',
    background: theme.palette.orange,
    color: '#fff',
    borderRadius: 18,
    marginLeft: 12,
    ...theme.flexCenter
  },
  lightLabel: {
    fontSize: 12,
    padding: '4px 12px',
    color: theme.palette.orange,
    background: '#fff',
    borderRadius: 18,
    marginLeft: 12,
    border: `1px solid ${theme.palette.orange}`,
    ...theme.flexCenter
  },
  editButton: {
    margin: '0 0 0 auto',
    color: theme.palette.orange,
  },
  editButtonIcon: {
    width: 18
  }
}))
