import React from 'react'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import classnames from 'classnames'
import Router from '../../router'
import { useHistory } from "react-router-dom"
import { useStyles } from './style'

const Home = (props) => {
  const classes = useStyles()
  const history = useHistory()

  const menuItems = ['Pedidos', 'Rotas', 'Clientes', 'Comercial']
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index, currentMenu) => {
    setSelectedIndex(index)
    switch (currentMenu) {
      case 'Pedidos':
        history.push(Router.routes.orders.path)
        break;
      case 'Rotas':
        history.push(Router.routes.routers.path)
        break;
      case 'Clientes':
        history.push(Router.routes.clients.path)
        break;
      case 'Comercial':
        history.push(Router.routes.comercial.path)
        break;
      default:
        break;
    }
  }


  return (
    <div className={classes.root}>
      <nav className={classes.drawer}>
        <div className={classes.logoContainer}>
          <img src="/assets/branding/logo.png" alt="logo" className={classes.logo} />
          <Typography variant="h6" gutterBottom className={classes.subtitle}>
            Painel de administração
          </Typography>
        </div>

        <div className={classes.menu}>
          <List component="nav">
            {menuItems.map((currentMenu, index) => {
              return (
                <ListItem
                  key={index}
                  button
                  selected={selectedIndex === index}
                  onClick={event => handleListItemClick(event, index, currentMenu)}
                  className={classes.item}
                >
                  <ListItemText
                    primary={currentMenu}
                    classes={{
                      primary: classnames(classes.menuItem, {
                        [classes.menuItemSelected]: selectedIndex === index
                      })
                    }}
                  />
                </ListItem>
              )
            })}
          </List>
        </div>

      </nav>
      <div className={classes.app}>
        {props.children}
      </div>
    </div>
  )

}

export default Home