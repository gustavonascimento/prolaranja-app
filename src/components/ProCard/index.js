import React from 'react'
import Card from '@material-ui/core/Card'
import clsx from 'clsx'
import { useStyles } from './style'

const ProCard = ({ children, className }) => {
  const classes = useStyles()
  return (
    <Card className={clsx(classes.root, className)}>
      {children}
    </Card>
  )
}

export default ProCard