import React, {useEffect} from 'react'
import { RouteCard, ActionButton, RouteModal } from '../../components'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import PropTypes from 'prop-types'
import { 
  selectRoutes,
  fetchRoutes,
  selectIsFeching,
  setSelectedRoute,
  setIsRouteOpen,
  selectSelectedRoute,
  selectIsRouteOpen
} from '../../reducers/routes'
import { useSelector, useDispatch } from 'react-redux'
import { useStyles } from './style'


const TabPanel = (props) => {
  const { children, value, index, boxClass, ...other } = props

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3} className={boxClass}>{children}</Box>}
    </Typography>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Routers = () => {
  const classes = useStyles()
  const [selectedTab, setSelectedTab] = React.useState(0)
  const routes = useSelector(selectRoutes)
  const selectedRoute = useSelector(selectSelectedRoute)
  const isRouteOpen = useSelector(selectIsRouteOpen)
  const isFechingData = useSelector(selectIsFeching)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRoutes())
  }, [])

  const handleChange = (event, newTab) => {
    setSelectedTab(newTab);
  }

  const handleClickOpen = () => {
    dispatch(setIsRouteOpen(true))
  }

  const handleClose = (value) => {
    dispatch(setSelectedRoute())
    dispatch(setIsRouteOpen(false))
  }

  const handleEdit = (route) => {
    dispatch(setSelectedRoute(route))
    dispatch(setIsRouteOpen(true))
  }

  return (
    <div className={classes.root}>
      <Tabs 
        value={selectedTab}
        onChange={handleChange}
        aria-label="simple tabs example"
        classes={{
          flexContainer: classes.optionsContainer,
          indicator: classes.optionSelector
        }}
      >
        <Tab label="Normal" {...a11yProps(0)}
          disableRipple
          classes={{
            root: classes.leftSelectionButton,
            selected: classes.optionSelected,
          }}
        />
        <Tab label="Fim de semana" {...a11yProps(1)}
          disableRipple
          classes={{
            root: classes.rightSelectionButton,
            selected: classes.optionSelected,
          }}
        />
      </Tabs>

      <TabPanel value={selectedTab} index={0} boxClass={classes.cardsContainer}>
        {routes.map(route => <RouteCard key={route.id} route={route} onSelect={handleEdit} />)}
      </TabPanel>
      <TabPanel value={selectedTab} index={1} boxClass={classes.cardsContainer}>
        {/* {currentRoutes.map((route, index) => <RouteCard key={index} route={route} />)} */}
      </TabPanel>
      <ActionButton className={classes.addButton} onClick={handleClickOpen}>
        Adicionar rota
      </ActionButton>
      <RouteModal open={isRouteOpen} handleClose={handleClose} route={selectedRoute} />
    </div>
  )
}

export default Routers