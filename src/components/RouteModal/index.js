import React from 'react'
import classnames from 'classnames'
import Dialog from '@material-ui/core/Dialog'
import RouteCard from '../RouteCard'
import { useStyles } from './style'

const RouteModal = ({ open, handleClose, route }) => {
  const classes = useStyles()
  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}
      classes={{
        paper: classes.root
      }}
    >
      <RouteCard route={route} modal handleClose={handleClose} />
    </Dialog>
  )
}

export default RouteModal