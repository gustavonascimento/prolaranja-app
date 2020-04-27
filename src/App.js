import React, { useEffect } from 'react'
import { Page404 } from './pages'
import { ThemeProvider } from '@material-ui/styles'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import router from './router'
import PrivateRoute from './helpers/PrivateRoute'
import theme from './theme'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectAlertText,
  selectIsAlertOpen,
  closeAlert
} from './reducers/alert'
import { fetchOptions, selectIsFeching } from './reducers/options'
import CssBaseline from '@material-ui/core/CssBaseline'
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
      <CssBaseline />
      {!isFechingOptions && (<Router>
        <Switch>
          {router.routesList.map((currentRoute, index) => {
            return (
              <PrivateRoute
                key={index}
                path={currentRoute.path}
                exact
                routeInfo={currentRoute}
                component={<currentRoute.component />}
              />
            )
          })}
          <Route component={Page404} />
        </Switch>
      </Router>)}
      {isFechingOptions && (<div>Carregando aplicação</div>)}

      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }} open={isAlertOpen} autoHideDuration={4000} onClose={handleAlertClose}>
        <Alert icon={false} onClose={handleAlertClose} severity="info" classes={{ root: classes.alert }}>
          {alertText}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  )
}

export default App;
