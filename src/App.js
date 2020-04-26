import React, { useEffect } from 'react'
import logo from './logo.svg'
import ClientsPage from './pages/clients'
import { ThemeProvider } from '@material-ui/styles'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import theme from './theme'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectAlertText,
  selectIsAlertOpen,
  closeAlert
} from './reducers/alert'
import { fetchOptions, selectIsFeching } from './reducers/options'
import './App.css'
import { useStyles } from './style'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function App() {
  const dispath = useDispatch()
  const isAlertOpen = useSelector(selectIsAlertOpen)
  const alertText = useSelector(selectAlertText)
  const isFechingOptions = useSelector(selectIsFeching)
  const classes = useStyles()

  useEffect(() => {
    console.log('Fetching options')
    dispath(fetchOptions())
  }, [])

  const handleAlertClose = () => {
    dispath(closeAlert())
  }

  return (
    <ThemeProvider theme={theme}>
      {!isFechingOptions && (<ClientsPage />)}
      {isFechingOptions && (<div>Carregando aplicação</div>)}
      

      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }} open={isAlertOpen} autoHideDuration={4000} onClose={handleAlertClose}>
        <Alert icon={false} onClose={handleAlertClose} severity="info" classes={{root: classes.alert}}>
          {alertText}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  )
}

export default App;
