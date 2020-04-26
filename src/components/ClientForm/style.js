import { makeStyles, withStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  dialog: {
    width: '80%',
    maxWidth: 720,
    borderRadius: 32
  },
  dialogContent: {
    padding: 0
  },
  dialogForm: {
    padding: '8px 24px',
    borderBottom: '2px solid #B6B6B6'
  },
  dialogProduct: {
    padding: '8px 24px',
  },
  productGrid: {
    width: 590,
    paddingBottom: 15,
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  },
  actions: {
    display: 'flex',
    padding: '10px 60px'
  },
  button: {
    flex: 1,
    padding: '18px 0 !important'
  },
  cancelButton: {
    background: '#fff',
    border: `1px solid ${theme.palette.orange}`,
    borderRadius: 16,
    color: theme.palette.orange,
    padding: '12px 0'
  },
  confirmButton: {
    borderRadius: 16,
    padding: '12px 0'
  }
}))

export const customizeTitle = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  }
}))
