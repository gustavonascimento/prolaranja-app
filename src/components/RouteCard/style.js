import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 450,
    minWidth: 320,
    marginRight: 32,
    maxHeight: 'calc(100% - 0px)',
    background: theme.palette.orange,
    color: theme.palette.white,
    borderRadius: 32,
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.08)',
    display: 'flex',
    flexDirection: 'column'
  },
  inputCreate: {
    background: 'rgba(255,255,255,0.2)',
    border: '1px solid rgba(255,255,255,0.5)',
    padding: '5px 10px',
    color: '#fff',
    borderRadius: 8
  },
  createButton: {
    marginTop: 7
  },
  cardSubheader: {
    color: '#fff'
  },
  modalRoot: {
    marginRight: 0
  },
  title: {
    '&:hover': {
      background: 'rgba(255,255,255,0.2)',
      border: '1px solid rgba(255,255,255,0.5)',
      padding: '5px 10px',
      color: '#fff',
      borderRadius: 8,
      cursor: 'text'
    }
  },
  body: {
    borderRadius: 32,
    padding: '32px 16px',
    background: theme.palette.white,
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.08)',
    overflowY: 'scroll',
      '&::-webkit-scrollbar': {
        display: 'none'
      }
  },
  item: {
    background: '#F0F0F0',
    padding: '16px 18px',
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 16,
    borderRadius: 16,
    textTransform: 'Capitalize',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  lastItem: {
    marginBottom: 0
  },
  icon: {
    color: "#fff",
    marginTop: 8
  },
  itemAction: {
    border: '2px solid #000',
    color: '#000',
    width: 30,
    height: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemActionIcon: { marginTop: -10 },
  divider: {
    marginBottom: 16,
    marginTop: 16,
    height: 2
  },
  input: {
    color: '#5A3928',
    width: '100%',
    background: '#F5F5F5',
    height: 48,
    borderRadius: 20,
    padding: '0 15px',
  },
  listTitle: {
    color: '#010101',
    fontWeight: 'bold'
  }
}))

