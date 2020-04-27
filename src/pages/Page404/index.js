import React from 'react'
import { useStyles } from './style'
import { useDarkBody } from '../../hooks'

const Page404 = () => {
  useDarkBody()
  const classes = useStyles()

  return (
    <div className={classes.root}>
      404
    </div>
  )
}

export default Page404