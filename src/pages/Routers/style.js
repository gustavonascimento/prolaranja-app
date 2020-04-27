import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  cardsContainer: {
    display: 'flex',
    width: 'calc(100vw - 320px)',
    overflowX: 'scroll',
    height: 'calc(100vh - 160px)',
    padding: '20px 0 20px 0',
    alignItems: 'flex-start',
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  },
  leftSelectionButton: {
    'border-top-left-radius': 24,
    'border-bottom-left-radius': 24,
    'border-left': '3px solid #f58233',
    'border-top': '3px solid #f58233',
    'border-bottom': '3px solid #f58233',
    textTransform: 'capitalize',
    color: '#F58233',
    fontWeight: 'bold',
    opacity: 1
  },
  rightSelectionButton: {
    'border-top-right-radius': 24,
    'border-bottom-right-radius': 24,
    'border-right': '3px solid #f58233',
    'border-top': '3px solid #f58233',
    'border-bottom': '3px solid #f58233',
    textTransform: 'capitalize',
    color: '#F58233',
    fontWeight: 'bold',
    opacity: 1
  },
  optionsContainer: {
    position: 'absolute',
    zIndex: 1
  },
  optionSelector: {
    height: '100%',
    borderRadius: 24,
    background: '#F58233'
  },
  optionSelected: {
    color: '#fff'
  },
  addButton: {
    width: 336,
    marginLeft: 'auto',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.32)',
    marginTop: 9
  }
}))

